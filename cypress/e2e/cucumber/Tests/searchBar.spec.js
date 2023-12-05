import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import home from "../../../pages/home.page"

Given('I navigate to the website', () => {
  home.navigateToWebsite();
})

When('I click on search button', () => {
  home.clickOnSearchButton();
})

Then('Page title should be equal', (datable) => {
  datable.hashes().forEach((el) => {
    home.checkPageTitle(el.label);
  });
})

When('I type some invalid text', (datable) => {
  datable.hashes().forEach((el) => {
    home.typeInSearchBar(el.text);
  });
});

When('I type some valid text', (datable) => {
  datable.hashes().forEach((el) => {
    home.typeInSearchBar(el.text);
  });
});

And('I click on search button', () => {
  home.clickOnSearchButton();
});

Then('Should appear a no results found text', () => {
  home.searchWithoutResultsText();
});

Then('Should have some itens listed', () => {
  home.searchWithResults();
});
