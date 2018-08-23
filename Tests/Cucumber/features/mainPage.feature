Feature: Main Page
  As a user
  I can open the page
  So that all functionality is working

  Scenario: check logo
    Given I open 'Main page'
    Then 'logo' is visible

  Scenario: check shopping confirmation
    Given I open 'Main page'
    When I press 'shopButton'
    Then 'shopModal' is visible