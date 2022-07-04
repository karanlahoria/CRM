$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/Kay/Desktop/Selenium_Workplace/FreeCRMBDDFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User Already On Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Enter \"\u003cusername\u003e\" And \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user mouse over contact link and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user enter \"\u003cfirstname\u003e\" And \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname"
      ],
      "line": 36,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "karanlahoria89@gmail.com",
        "Selenium123",
        "puneet",
        "kumar"
      ],
      "line": 37,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "karanlahoria89@gmail.com",
        "Selenium123",
        "karan",
        "lahoria"
      ],
      "line": 38,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User Already On Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Enter \"karanlahoria89@gmail.com\" And \"Selenium123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user mouse over contact link and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user enter \"puneet\" And \"kumar\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 6636617250,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.title_of_login_page()"
});
formatter.result({
  "duration": 12196917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karanlahoria89@gmail.com",
      "offset": 12
    },
    {
      "val": "Selenium123",
      "offset": 43
    }
  ],
  "location": "LoginStepsDefinations.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1827883000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.click_on_login_button()"
});
formatter.result({
  "duration": 819568292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.user_is_home_page()"
});
formatter.result({
  "duration": 9593291,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.user_mouse_over_contact_link()"
});
formatter.result({
  "duration": 906404916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "puneet",
      "offset": 12
    },
    {
      "val": "kumar",
      "offset": 25
    }
  ],
  "location": "LoginStepsDefinations.user_enter_frist_and_last_name(String,String)"
});
formatter.result({
  "duration": 771335917,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.click_on_save_button()"
});
formatter.result({
  "duration": 132239542,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.user_on_contact_page()"
});
formatter.result({
  "duration": 3291066667,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.quitBrowser()"
});
formatter.result({
  "duration": 556252792,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User Already On Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Title of Login Page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Enter \"karanlahoria89@gmail.com\" And \"Selenium123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User Click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user mouse over contact link and click on it",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user enter \"karan\" And \"lahoria\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user click on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "user on contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsDefinations.user_already_on_login_page()"
});
formatter.result({
  "duration": 3952436125,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.title_of_login_page()"
});
formatter.result({
  "duration": 10809667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karanlahoria89@gmail.com",
      "offset": 12
    },
    {
      "val": "Selenium123",
      "offset": 43
    }
  ],
  "location": "LoginStepsDefinations.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1165980375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.click_on_login_button()"
});
formatter.result({
  "duration": 231945500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.user_is_home_page()"
});
formatter.result({
  "duration": 8093375,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepsDefinations.user_mouse_over_contact_link()"
});
formatter.result({
  "duration": 1272159167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "karan",
      "offset": 12
    },
    {
      "val": "lahoria",
      "offset": 24
    }
  ],
  "location": "LoginStepsDefinations.user_enter_frist_and_last_name(String,String)"
});
formatter.result({
  "duration": 20077147791,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //input[@name\u003d\u0027first_name\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.4\u0027, revision: \u0027535d840ee2\u0027\nSystem info: host: \u0027Abhitoshs-MacBook-Pro.local\u0027, ip: \u00272607:9880:1d08:9:0:0:0:2%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCommand: [07052a55-9e9f-429a-aff3-b0a4018f778e, findElement {using\u003dxpath, value\u003d//input[@name\u003d\u0027first_name\u0027]}]\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 101.0.1, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20220608170832, moz:debuggerAddress: localhost:53947, moz:geckodriverVersion: 0.31.0, moz:headless: false, moz:processID: 19957, moz:profile: /var/folders/6r/wf0zgbts5hv..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: MAC, platformName: MAC, platformVersion: 21.5.0, proxy: Proxy(), se:cdp: ws://localhost:53947/devtoo..., se:cdpVersion: 85.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 07052a55-9e9f-429a-aff3-b0a4018f778e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:567)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:385)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:377)\n\tat pages.LoginPage.firstName(LoginPage.java:65)\n\tat stepDefinations.LoginStepsDefinations.user_enter_frist_and_last_name(LoginStepsDefinations.java:52)\n\tat ✽.Then user enter \"karan\" And \"lahoria\"(/Users/Kay/Desktop/Selenium_Workplace/FreeCRMBDDFramework/src/main/java/Features/contact.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepsDefinations.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsDefinations.user_on_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepsDefinations.quitBrowser()"
});
formatter.result({
  "status": "skipped"
});
});