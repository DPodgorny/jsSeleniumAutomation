Feature: Login form
  As a user
  I should see error message
  on empty login
  or invalid login

  Scenario: Empty login
    Given I open 'Main page'
    When I login with 'emptyLogin' creds
    Then I see empty login error messages

  Scenario: Invalid login
    Given I open 'Main page'
    When I login with 'invalidLogin' creds
    Then I see invalid login error message