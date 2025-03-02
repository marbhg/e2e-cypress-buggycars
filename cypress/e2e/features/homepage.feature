Feature: Open Buggy Cars

    As studen, I want to open bootcamp qa, so I can see training courses


    Scenario: Visit Buggy Cars positive 
        Given the user visits homepage
        When As a user I enter the registration section 
        And the user fills in the login "mar@gmail.com"
        And the user fills in the first name "Maria"
        And the user fills in the last name "Lopez"
        And the user fills in the password "Password123!"
        And the user fills in the first confirm password "Password123!"
        Then I give the register button 
       
