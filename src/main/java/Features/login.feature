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

#without examples keyword
#Scenario: Free CRM Login Test Scenario

#Given User Already On Login Page
#When Title of Login Page is Free CRM
#Then User Enter "karanlahoria89@gmail.com" And "Selenium123"
#Then User Click on Login button
#Then User is on Home Page
#Then Close browser


#with example keyword
Scenario Outline: Free CRM Login Test Scenario

Given User Already On Login Page
When Title of Login Page is Free CRM
Then User Enter "<username>" And "<password>"
Then User Click on Login button
Then User is on Home Page
Then Close browser

Examples:
         |  username                  |  password  |
         |  karanlahoria89@gmail.com  |  Selenium123  |
         |  tom                       |  krkrkrkkqsaksjaksrkrk  |

#Scenario: user is able create new contact

#Given User is already on home page
#When user mouse over contact link
#Then user click on new contact link
#Then user enter first name And last name
#Then user click on save button
#Then user on contacts page
#Then Close the browser