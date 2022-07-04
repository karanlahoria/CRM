#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Free CRM Login Feature

Scenario Outline: Free CRM Login Test Scenario

Given User Already On Login Page
When Title of Login Page is Free CRM
Then User Enter "<username>" And "<password>"
Then User Click on Login button
Then User is on Home Page
Then user mouse over contact link and click on it
Then user enter "<firstname>" And "<lastname>"
Then user click on save button
Then user on contacts page
Then Close the browser

Examples:
         |  username                  |  password               |  firstname  |  lastname  |
         |  karanlahoria89@gmail.com  |  Selenium123            |  puneet     |  kumar     |
         |  karanlahoria89@gmail.com  |  Selenium123            |  karan      |  lahoria   |

