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
package de.utkast.ozark.loadtests;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.mvc.Models;
import javax.mvc.annotation.Controller;
import javax.servlet.ServletContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

/**
 * @author Florian Hirsch
 */
@Path("/")
public class EntryController {

	@Inject
	private Models models;

	@Context
	private ServletContext ctx;

	private String view;

	@PostConstruct
	public void init() {
		String extension = ctx.getInitParameter("extension");
		Objects.requireNonNull(extension);
		view = String.format("index.%s", extension);
	}

	@GET
	@Controller
	public String get(@QueryParam("uuid") String uuid) {
		models.put("uuid", uuid);
		models.put("name", "John Doe");
		models.put("email", "john@doe.com");
		models.put("friends", Arrays.asList("Jane", "Frank", "Pete", "Mike"));
		List<String> lorems = new ArrayList<>(10);
		for (int i = 0; i < 100; i++) {
			lorems.add("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");
		}
		models.put("lorems", lorems);
		return view;
	}

}
