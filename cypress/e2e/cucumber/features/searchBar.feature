Feature: Searching in search box

Scenario: Search without parameters
  Given I navigate to the website
  When I click on search button
  Then Page title should be equal
    | label                                            |
    | Bem-vindo ao Portal Brasileiro de Dados Abertos! |

Scenario: Search with insufficient parameters
  Given I navigate to the website
  When I type some invalid text
    | text  |
    | a     |
  When I click on search button
  Then Page title should be equal
    | label |
    | Busca |
  Then Should appear a no results found text

Scenario: Search with valid parameters
  Given I navigate to the website
  When I type some valid text
    | text    |
    | agenda  |
  When I click on search button
  Then Page title should be equal
    | label |
    | Busca |
  Then Should have some itens listed
