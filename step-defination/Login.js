let {setDefaultTimeout , Given , When , Then} = require('cucumber');
let LoginPage = require("../com.org.pages/Login")
let testSetup = require("../hook/Hook");


    setDefaultTimeout(60 * 1200);
    Enviroment = new testSetup()

    Given('I should able to navigate xyz bank website with {string} enviroment', async env => {
          await LoginPage.navigateToURL(env)
      }); 

      When('I should able to click on customer login', async () => {
           await LoginPage.loginAsCustomer();
      });

      When('I should able to login with {string} name', async name =>{
           await LoginPage.loginWithName(name)
      });
      
      When('I should able to login button', async () =>{
        await LoginPage.clickOnLoginButton()
      });

      Then('I should able to user {string} as login', async loginUser =>{
        await LoginPage.verifyLoginUser(loginUser)
      });