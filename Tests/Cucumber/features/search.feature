Feature: Search page
  As a user
  I can search items
  and get correct search results

  Scenario: search items
    Given I open 'Main page'
    When I search 'ninjago' item
    Then 'Destiny' item is visible