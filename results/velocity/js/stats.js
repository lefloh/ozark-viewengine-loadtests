var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1014137",
        "ok": "1014137",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2680",
        "ok": "2680",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "9",
        "ok": "9",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20",
        "ok": "19",
        "ko": "-"
    },
    "percentiles3": {
        "total": "26",
        "ok": "26",
        "ko": "-"
    },
    "percentiles4": {
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1014127,
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
        "total": "524.863",
        "ok": "524.863",
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
        "total": "14137",
        "ok": "14137",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "15",
        "ok": "15",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2680",
        "ok": "2680",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "69",
        "ko": "-"
    },
    "percentiles1": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "percentiles2": {
        "total": "43",
        "ok": "43",
        "ko": "-"
    },
    "percentiles3": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles4": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 14127,
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
        "total": "7.317",
        "ok": "7.317",
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
        "total": "573",
        "ok": "573",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "percentiles1": {
        "total": "17",
        "ok": "17",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20",
        "ok": "20",
        "ko": "-"
    },
    "percentiles3": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32",
        "ok": "32",
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
        "total": "517.546",
        "ok": "517.546",
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
