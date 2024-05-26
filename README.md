# PG-CypressBDD

This project is created to demonstrate setup of Cucumber BDD in Cypress and POM design pattern

## Cypress Setup

1. Create Git repo and clone the git repo
   `e.g. git clone https://github.com/yallav/PG-CypressBDD.git`
2. Go inside the project and initiate the project with the following command
   `npm init`
3. Install Cypress dependency by executing
   `npm install Cypress -D`
4. Open cypress test runner to generate cypress test configurations by executing
   `npx cypress open`
   ![alt text](/documentation/image-1.png)
5. Click continue -> click StartE2E Testing button
   ![alt text](/documentation/image-2.png)
6. Finally, we will land on test runner page. With this step, you can find cypress folder along with cypress-config.js file inside the project folder
   ![alt text](/documentation/image-3.png)
   Project folder content -
   ![alt text](/documentation/image-4.png)
7. Click on Create new spec to create new spec file in the project directory
   ![alt text](/documentation/image-5.png)
   Updated project directoy -
   ![alt text](/documentation/image-6.png)

## Dependencies setup

This section demonstrates to setup required depenencies such as Cucumber, mocha test reports and XPath plugins

- Cucumber preprocessor
  Go to npm [dependency manager](https://www.npmjs.com/package/cypress-cucumber-preprocessor) and follow the steps as documented

  1. Install the plugin - npm install --save-dev cypress-cucumber-preprocessor
  2. Add the following statements to cypress-config.js file

  ```
  const cucumber = require('cypress-cucumber-preprocessor').default
  e2e: {
    specPattern: 'cypress/e2e/features/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
  },

  ```

  3.Add the following in package.json file

  ```
  "cypress-cucumber-preprocessor": {
      "nonGlobalStepDefinitions": true,
      "stepDefinitions": "cypress/e2e/features/"
  }
  ```

- Mocha awesome test report
  Go to npm [dependency manager](https://www.npmjs.com/package/cypress-mochawesome-reporter) and follow the steps as documented

  1. Install the plugin - npm i --save-dev cypress-mochawesome-reporter
  2. Add the following statement to cypress.config.js

  ```
  e2e{
      setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "My HTML Test Report",
  },

  ```

  3.Add the import statement in cypress\support\e2e.js

  ```
  import 'cypress-mochawesome-reporter/register';
  ```

## Challenges

1. An error was thrown in your plugins file while executing the handler for the after:run event
   ![alt text](/documentation/image-7.png)
