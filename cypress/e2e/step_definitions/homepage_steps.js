import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  
//Primero visita la pagina web 
  When("the user visits homepage", () => {
    cy.visit("/");
  });
//Entra en la session de registro y hace click
  When("As a user I enter the registration section",  () => {
    cy.contains("Register").click()
  });

  //Rellena los campos del formulario 
  When("the user fills in the login {string}", (login) => {
    console.log("Valor de login:", login);
    cy.get('[formControlName="username"]').type(login);
  });

  When("the user fills in the first name {string}", (firstname) => {
    console.log("Valor de first name:", firstname);
    cy.get('[name="firstName"]').type(firstname);
  });

  When("the user fills in the last name {string}", (lastname) => {
    console.log("Valor de first name:", lastname);
    cy.get('[name="lastName"]').type(lastname);
  });

  When("the user fills in the password {string}", (password) => {
    cy.get('#password').type(password);
});

When("the user fills in the confirm password {string}", (confirmpassword) => {
    console.log("Valor de confirm password:", confirmpassword);
    cy.get('[name="confirmPassword"]').type(confirmpassword); 
});

When("I give the register button", () => {
    cy.contains("Register").click(); 
});









 