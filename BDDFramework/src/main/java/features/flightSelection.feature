Feature: Flight Selection
Scenario Outline: Flight Selection scenario

Given User is already in flights page
When title of login page is Make mytrip
Then user enters "<source>" and "<Destination>"
And user clicks on search button
Then close the browser

Examples:
	| source| Destination  |
	|   h   | b            | 
	