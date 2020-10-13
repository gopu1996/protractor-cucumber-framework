Feature: Login a user in a website

  Background: Launch A Website
    Given I should able to navigate xyz bank website with "qa" enviroment

  Scenario: Login in a xyz bank website
     When I should able to click on customer login 
     When I should able to login with "Harry Potter" name
     And I should able to login button
     Then I should able to user "Harry Potter" as login