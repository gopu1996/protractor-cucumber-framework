Feature: Register a user in a website

  Background: Launch A Website
    Given I should able to navigate demo.automationtesting website with "qa" enviroment

  Scenario: Enter Personal info for a particular user
    When I should able to enter firstname "Gopu" and lastname "pandey" 
    And I should able to enter "Banglore, india" address 
    When I should able enter "gopu123@gmail.com" email address 
    And I should able enter "9883738608" phone number 
    When I should Able to Select "Male" gender 
    And I should able to select "Cricket"  hobbies of a user
    #  When I should able to select Random Language of a user
    And I should able to select "Java" skills of a user
    When I should able to select "India" country of a user
    And I should able to select Random Country of a user
    When I should able to select Random Date of Birth of a user
    And I should able to enter password "Gopu@1234" and confirm password "Gopu@1234" of a user
    When I should able to upload photo of a user
    When I should able to click on submit button
    Then I should able to see "http://demo.automationtesting.in/WebTable.html" webtable page
