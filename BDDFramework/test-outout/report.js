$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Vennela/git/BDD-Cucumber-/BDDFramework/src/main/java/features/flightSelection.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Selection",
  "description": "",
  "id": "flight-selection",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Flight Selection scenario",
  "description": "",
  "id": "flight-selection;flight-selection-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Make mytrip",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003csource\u003e\" and \"\u003cDestination\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "flight-selection;flight-selection-scenario;",
  "rows": [
    {
      "cells": [
        "source",
        "Destination"
      ],
      "line": 11,
      "id": "flight-selection;flight-selection-scenario;;1"
    },
    {
      "cells": [
        "h",
        "b"
      ],
      "line": 12,
      "id": "flight-selection;flight-selection-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Flight Selection scenario",
  "description": "",
  "id": "flight-selection;flight-selection-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is already in flights page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Make mytrip",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"h\" and \"b\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FlightSelection.user_is_already_in_flights_page()"
});
formatter.result({
  "duration": 23589797650,
  "status": "passed"
});
formatter.match({
  "location": "FlightSelection.title_of_login_page_is_Make_mytrip()"
});
formatter.result({
  "duration": 15558548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "h",
      "offset": 13
    },
    {
      "val": "b",
      "offset": 21
    }
  ],
  "location": "FlightSelection.user_enters_and(String,String)"
});
formatter.result({
  "duration": 13033753763,
  "status": "passed"
});
formatter.match({
  "location": "FlightSelection.user_clicks_on_search_button()"
});
formatter.result({
  "duration": 104430043,
  "status": "passed"
});
formatter.match({
  "location": "FlightSelection.close_the_browser()"
});
formatter.result({
  "duration": 58919588,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Please enter departure airport!!}\n  (Session info: chrome\u003d83.0.4103.116): Please enter departure airport!!\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027VENNELA-PC\u0027, ip: \u0027192.168.43.210\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Vennela\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54552}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d048417127f8c380741b8877347d2a59\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.close(RemoteWebDriver.java:442)\r\n\tat stepDefination.FlightSelection.close_the_browser(FlightSelection.java:52)\r\n\tat ✽.Then close the browser(C:/Users/Vennela/git/BDD-Cucumber-/BDDFramework/src/main/java/features/flightSelection.feature:8)\r\n",
  "status": "failed"
});
});