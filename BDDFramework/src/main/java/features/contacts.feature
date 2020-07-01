Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given User is already in loginpage
When title of login page is FreeCrm
Then user enters "<username>" and "<password>"
And user clicks on login button
Then user is on home Page
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
	| username         | password   | firstname | lastname | position |
	| batchautomation  | Test@12345 | Tom 	    | Peter    | Manager  |
	| vineela          | test@123   | David 	| Dsouza   | Director |