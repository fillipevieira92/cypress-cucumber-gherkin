Feature: Navigate footer items

Scenario: Navigate to 'Conjunto de Dados'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 0         |
  Then Page title should be equal
    | label              |
    | Conjuntos de dados |

Scenario: Navigate to 'Organização'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 1         |
  Then Page title should be equal
    | label       |
    | Organização |

Scenario: Navigate to 'Temas'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 2         |
  Then Page title should be equal
    | label |
    | Temas |

Scenario: Navigate to 'Reúsos'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 3         |
  Then Page title should be equal
    | label  |
    | Reúsos |

Scenario: Navigate to 'Notícias'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 4         |
  Then Page title should be equal
    | label    |
    | Notícias |

Scenario: Navigate to 'Sobre'
  Given I navigate to the website
  When I click on footer item in position
    | position  |
    | 5         |
  Then Page title should be equal
    | label |
    | Sobre |
