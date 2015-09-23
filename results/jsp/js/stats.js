var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1016259",
        "ok": "1016259",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4767",
        "ok": "4767",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles2": {
        "total": "14",
        "ok": "15",
        "ko": "-"
    },
    "percentiles3": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles4": {
        "total": "31",
        "ok": "31",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1016249,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "651.205",
        "ok": "651.205",
        "ko": "-"
    }
},
contents: {
"req_warmup-468bf": {
        type: "REQUEST",
        name: "warmup",
path: "warmup",
pathFormatted: "req_warmup-468bf",
stats: {
    "name": "warmup",
    "numberOfRequests": {
        "total": "16259",
        "ok": "16259",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4767",
        "ok": "4767",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "35",
        "ok": "35",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "percentiles1": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles2": {
        "total": "35",
        "ok": "34",
        "ko": "-"
    },
    "percentiles3": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "percentiles4": {
        "total": "109",
        "ok": "109",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16249,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 10,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10.419",
        "ok": "10.419",
        "ko": "-"
    }
}
    },"req_performance-c05f6": {
        type: "REQUEST",
        name: "performance",
path: "performance",
pathFormatted: "req_performance-c05f6",
stats: {
    "name": "performance",
    "numberOfRequests": {
        "total": "1000000",
        "ok": "1000000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "14",
        "ok": "14",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles2": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "percentiles3": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles4": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1000000,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "640.786",
        "ok": "640.786",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
