const { browser, element } = require("protractor");
let commonMethod = require("../com.org.commonmethod/CommonMethod")
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
let log4jsGen = require("../Utlity/log4jsGen");
let loginUi = require("../com.org.uistore/LoginPage")
let path = require('path');
chai.use(chaiAsPromised);
var expect = chai.expect;


let Login ={
   
    navigateToURL: async (env) =>{
        let url =await Login.navigateToWebsite(env);
        await commonMethod.navigateToUrl(url);
    
    },
    
    loginAsCustomer: async () =>{
        await browser.sleep(3000)
        await element.all(loginUi.loginUser).get(0).click();

    },

    loginWithName: async (name) =>{
  
        let valueGenrated = await Login.genrateValueFromName(name);
        await browser.sleep(2000)
        await element.all(loginUi.loginWithName).get(valueGenrated).click()
    },

    clickOnLoginButton: async () =>{
        commonMethod.waitTillElementPresent(element(loginUi.btnLogin));
        await element(loginUi.btnLogin).click();
    } ,

    verifyLoginUser: async user=>{
        await browser.sleep(2000)
        expect(element(loginUi.verifyUser).getText()).to.eventually.to.equal(user);
    }, 

    navigateToWebsite: env =>{
       
        if(env.toLowerCase() === 'qa'){
            log4jsGen.getLogger().debug("Navigated to QA URL "+browser.params.App.Login.QA_URL);
            return browser.params.App.Login.QA_URL
        }else if(env.toLowerCase() ==='dev'){
            log4jsGen.getLogger().debug("Navigated to STAGE URL "+browser.params.App.Login.DEV_URL);
            return browser.params.App.Login.DEV_URL
        } else {
            log4jsGen.getLogger().debug("Navigated to QA URL "+browser.params.App.Login.QA_URL);
            return browser.params.App.Login.QA_URL
        }
    },

    genrateValueFromName: async name =>{
      if(name.toLowerCase() ==="Hermoine Granger" ){
        log4jsGen.getLogger().info("Return a name:  "+name);
          return '1';
      } else if (name ==="Harry Potter" ){
        log4jsGen.getLogger().info("Return a name:  "+name);
          return '2';
      } else if (name ==="Ron Weasly" ){
        log4jsGen.getLogger().info("Return a name:  "+name);
        return '3';
      }else if (name ==="Albus Dumbledore" ){
        log4jsGen.getLogger().info("Return a name:  "+name);
        return '4';
      }else if (name ==="Neville Longbottom" ){
        log4jsGen.getLogger().info("Return a name:  "+name);
        return '5';
      } else {
        log4jsGen.getLogger().error("Invalid name  "+name);
          return null;
      }

    }


}
module.exports =Login



