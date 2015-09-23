# Ozark ViewEngine Loadtests

## Running the tests

    mvn package # (once)
    ./loadtest VIEW_ENGINGE [DOCKER_IP REPEATS THREADS]
    # e.g: ./loadtest jsp 192.168.99.100 100000 10
    
## Results (2015-09-02)

* Ozark at commit c58745f3d6c7945c4d16905cc0c25f062f8af88e
* Glassfish Nightly (2015-09-19)
* JDK 1.8.0_66
* 1 minute warmup
* 100000 Repeats
* 10 Threads

| ViewEngine | Min (ms) | Max (ms) | Mean (ms) | Requests / second | 
| :----------|---------:|---------:|----------:|------------------:|
| Facelets   |        2 |      149 |        20 |               451 |
| Freemarker |        1 |      172 |        12 |               715 |
| Handlebars |        1 |      162 |        18 |               499 |
| Jade       |        2 |      207 |        38 |               254 |
| JSP        |        1 |      147 |        14 |               640 |
| Mustache   |        0 |      104 |        11 |               765 |
| Thymeleaf  |        1 |      174 |        22 |               426 |
| Velocity   |        1 |      573 |        18 |               517 |