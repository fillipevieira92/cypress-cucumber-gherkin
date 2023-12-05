class HomePage {
  constructor() {
    this.url = 'https://dados.gov.br';

    this.searchBtn = 'body > div > section > div > div > div.hero-content.img-fluid.hero-bg-cgu > div > div > div > div > button';
    this.closeMenuBtn = '#main-navigation > div > div.menu-panel.col-sm-4.col-lg-3 > div.menu-header > div.menu-close > button';
    this.menuBtn = 'body > div > div:nth-child(1) > header > div > div.header-bottom.mt-4 > div > div.col > div > div > button';
    this.footerItems = 'body > div > footer > div:nth-child(1) > div.br-list.horizontal > div';
    this.menuItems = `#main-navigation > div > div.menu-panel.col-sm-4.col-lg-3 > nav > a`;
    this.resultList = '#conjunto-dados > div.grid-with-hover';
    this.menuSideBar = '#main-navigation';
    this.searchBar = '#search2';
  }

  navigateToWebsite() {
    cy.visit(this.url);
    cy.wait(1000);
  }

  clickMenuButton() {
    cy.get(this.menuBtn).click();
    cy.wait(1000);
    return this;
  }

  clickCloseMenuButton() {
    cy.get(this.closeMenuBtn).click();
    cy.wait(1000);
    return this;
  }

  clickMenuItem(position) {
    cy.get(this.menuItems).eq(position).click();
    cy.wait(1000);
    return this;
  }

  clickOnSearchButton() {
    cy.get(this.searchBtn).click();
    cy.wait(1000);
    return this;
  }
  
  clickOnFooterItem(position) {
    cy.get(this.footerItems).eq(position).find('a').click();
    cy.wait(1000);
    return this;
  }
  
  typeInSearchBar(text) {
    cy.get(this.searchBar).type(text);
    cy.wait(1000);
    return this;
  }

  checkIfMenuIsOpened() {
    cy.get(this.menuSideBar).should('have.class', 'active');
    return this;
  }

  checkIfMenuIsClosed() {
    cy.get(this.menuSideBar).should('not.have.class', 'active');
    return this;
  }

  checkPageTitle(label) {
    cy.get('h2')
      .eq(0)
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', label);
    return this;
  }

  searchWithoutResultsText() {
    cy.get(this.resultList).children().should('have.length', 0);
    cy.get('ul')
      .eq(2)
      .find('h3')
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', 'Nenhum resultado encontrado');
    return this;
  }

  searchWithResults() {
    cy.get(this.resultList).children().should('have.length.gt', 1);
    return this;
  }
}

const home = new HomePage();
export default home;
