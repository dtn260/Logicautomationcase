@feature1
Feature: Tommy Fake Login

  Scenario Outline: Verify Wrong Email Login

    Given I am on the login page
    When I accept alert on page
    Then I login with <username> and <password>
    Then I should see a flash message saying <message>


    Examples:
      | username                 | password              | message                                |
      | doruktaskin89            | SuperSecretPassword!  | Sorry, dit is geen geldig e-mailadres  |

  Scenario Outline: Verify Not Matching Login
    Given I want to navigate to login page
    When I login with <username> and <password>
    Then I click on login button
    Then I should see a flash message stating <message>

    Examples:
      | username                           | password              | message                                                            |
      | doruktaskin89@gmail.com            | four                  | Je wachtwoord moet tussen 5 en 20 tekens lang zijn                 |


