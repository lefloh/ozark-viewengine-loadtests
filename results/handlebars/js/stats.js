var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1013634",
        "ok": "1013634",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2751",
        "ok": "2751",
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
        "total": "18",
        "ok": "18",
        "ko": "-"
    },
    "percentiles2": {
        "total": "20",
        "ok": "20",
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
        "count": 1013624,
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
        "total": "506.551",
        "ok": "506.551",
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
        "total": "13634",
        "ok": "13634",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2751",
        "ok": "2751",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "75",
        "ko": "-"
    },
    "percentiles1": {
        "total": "33",
        "ok": "33",
        "ko": "-"
    },
    "percentiles2": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles3": {
        "total": "93",
        "ok": "93",
        "ko": "-"
    },
    "percentiles4": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13624,
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
        "total": "6.813",
        "ok": "6.813",
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
        "total": "162",
        "ok": "162",
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
        "total": "18",
        "ok": "18",
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
        "total": "499.738",
        "ok": "499.738",
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
