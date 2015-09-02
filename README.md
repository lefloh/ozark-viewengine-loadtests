# Ozark ViewEngine Loadtests

## Running the tests

    mvn package # (once)
    ./loadtest VIEW_ENGINGE [DOCKER_IP REPEATS THREADS]
    # e.g: ./loadtest jsp 192.168.99.100 100000 10
    
## Results (2015-09-02)

* Ozark at commit f0d341f8c660b4d10ada5dcd922d021507910950
* Glassfish Nightly (2015-09-01)
* JDK 1.8.0_66
* 100000 Repeats
* 10 Threads

| ViewEngine | Min (ms) | Max (ms) | Mean (ms) | Requests / second | 
| :----------|---------:|---------:|----------:|------------------:|
| Facelets   |        1 |     4926 |         5 |              1654 |
| Freemarker |        0 |     1055 |         4 |              2093 |
| Handlebars |        1 |     1826 |         5 |              1680 |
| Jade       |        2 |     8060 |        10 |               946 |
| JSP        |        0 |     1779 |         4 |              1949 |
| Mustache   |        0 |      910 |         4 |              2131 |
| Thymeleaf  |        1 |     1641 |         6 |              1481 |
| Velocity   |        1 |    26885 |         8 |              1042 |
