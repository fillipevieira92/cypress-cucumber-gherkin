Feature: Hit menu button

Scenario: Opening and closing the menu button
  Given I navigate to the website
  When I click on menu button
  Then Menu itens should be visible
  When I click on close menu button
  Then Menu itens should not be visible
