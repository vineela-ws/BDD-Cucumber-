Feature: FreeCrm login feature

#Scenario: FreeCrm Login test scenario

#Given User is already in loginpage
#When title of login page is FreeCrm
#Then user enters "batchautomation" and "Test@12345"
#And user clicks on login button
#Then user is on home Page


#with example keyword

Scenario Outline: FreeCrm Login test scenario

Given User is already in loginpage
When title of login page is FreeCrm
Then user enters "<username>" and "<password>"
And user clicks on login button
Then user is on home Page
Then close the browser

Examples:

|username       |password|
|batchautomation|Test@12345|
|tom            | test@123|



