/**
 * Copyright (C) 2015 Florian Hirsch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package de.utkast.ozark.loadtests

import java.util.UUID

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class ViewEngineSimulation extends Simulation {

  val repeats = System.getProperty("loadtest.repeats", "100000")
  val threads = System.getProperty("loadtest.threads", "10")
  val host = System.getProperty("loadtest.host", "docker")
  val viewEngine = System.getProperty("loadtest.viewEngine", "jsp")
  val baseUrl = s"http://${host}:8080/${viewEngine}/"

  print(s"Testing ViewEngine ${viewEngine} on host ${host}. Repeating ${repeats} times with ${threads} threads.")

  val httpConf = http
    .baseURL(baseUrl)
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val feeder = Iterator.continually(Map("uuid" -> UUID.randomUUID.toString))

  val scn = scenario("ViewEngineSimulation")
    .during(60) {
      exec(http("warmup")
        .get("r")
        .check(status.is(200))
      )
    }
    .pause(5)
    .repeat(repeats.toInt) {
      feed(feeder)
      .exec(http("performance")
        .get("r")
        .queryParam("uuid", "${uuid}")
        .check(status.is(200))
        .check(regex("""<p id="uuid">${uuid}</p>""").exists)
      )
    }

  setUp(scn.inject(atOnceUsers(threads.toInt))).protocols(httpConf)

}