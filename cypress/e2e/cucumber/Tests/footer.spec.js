import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import home from "../../../pages/home.page"

Given('I navigate to the website', () => {
  home.navigateToWebsite();
})

When('I click on footer item in position', (datable) => {
  datable.hashes().forEach((el) => {
    home.clickOnFooterItem(el.position);
  });
})

Then('Page title should be equal', (datable) => {
  datable.hashes().forEach((el) => {
    home.checkPageTitle(el.label);
  });
})
