import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import home from "../../../pages/home.page"

Given('I navigate to the website', () => {
  home.navigateToWebsite();
})

When('I click on menu button', () => {
  home.clickMenuButton();
})

Then('Menu itens should be visible', () => {
  home.checkIfMenuIsOpened();
})

When('I click on close menu button', () => {
  home.clickCloseMenuButton();
})

Then('Menu itens should not be visible', () => {
  home.checkIfMenuIsClosed();
})
