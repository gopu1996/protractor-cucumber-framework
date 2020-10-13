const { browser, element } = require("protractor");
const registrationUi = require("../com.org.uistore/RegistrationPage");
let commonMethod = require("../com.org.commonmethod/CommonMethod")
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
let log4jsGen = require("../Utlity/log4jsGen");
let path = require('path');
chai.use(chaiAsPromised);
var expect = chai.expect;

let Registration ={
   
    navigateToURL: async (env) =>{
        let url =await Registration.navigateToWebsite(env);
        await commonMethod.navigateToUrl(url);
    },

    enterFirstLastName: async (firstName , lastName) =>{
 
        await commonMethod.sendKey(registrationUi.firstName , firstName)
        await commonMethod.sendKey(registrationUi.lastName , lastName)
    },

    enterAddress: async address =>{
        await commonMethod.sendKey(registrationUi.address , address)
    },

    enterEmail: async email =>{
        await commonMethod.sendKey(registrationUi.email , email)
   },

   enterPhoneNumber: async number =>{
        await commonMethod.sendKey(registrationUi.phone , number)
   }, 

   selectGender:async gender => {
  
        let gengerLocators = await Registration.genderSlectedValue(gender);
        let isSelected = await element(gengerLocators).isSelected();
        if (isSelected !== true) {
            await element(gengerLocators).click();
        }
   },

   selectHobbies: async hobbie =>{ 
        let hobbies = await Registration.genderHobbiesValue(hobbie)
        let isSelected = await element(hobbies).isSelected();
        if (isSelected !== true) {
        await element(hobbies).click();
        }
  },

  
  enterLanguage: async () =>{
        let ddlLanguage = await element(registrationUi.ddlLanguage) 
        await browser.sleep(6000);
        await ddlLanguage.click()
        let listOfLanguage =  element.all(registrationUi.ddlListOfLanguage)
        await browser.sleep(3000);
        listOfLanguage.then(async ele =>{ 
        await listOfLanguage.get(commonMethod.genrateRandomNumber(ele) ).click()
        await element(registrationUi.row).click()
      })
  },
  selectSkill: async skill =>{
        let skills = await element(registrationUi.skill);
        await browser.sleep(3000);
        await skills.$(`[value=${skill}]`).click() 
  },

  selectCountry: async count =>{
        let country =  await element(registrationUi.country);
        await browser.sleep(3000);
        await country.$(`[value=${count}]`).click()
},

ddlSelectCountry: async () =>{

        commonMethod.waitTillElementPresent(element(registrationUi.ddlCountry))
        await element(registrationUi.ddlCountry).click()
        await browser.sleep(1000);
        let listCountry = element.all(registrationUi.ddlCountryList);
        listCountry.then(async ele=>{
        await listCountry.get(commonMethod.genrateRandomNumber(ele) ).click()
    })
} ,

selectDateOfBirth:async () =>{
   
        let year =  element.all(registrationUi.year);
        await browser.sleep(1000);
        year.then( async ele =>{
        await year.get(commonMethod.genrateRandomNumber(ele) ).click()
    })

        let month =  element.all(registrationUi.month);
        await browser.sleep(1000);
        month.then(async ele =>{
        await month.get(commonMethod.genrateRandomNumber(ele) ).click()
   })

       let day =  element.all(registrationUi.day);
       await browser.sleep(1000);
       day.then(async ele =>{
       await day.get(commonMethod.genrateRandomNumber(ele)).click();
   })

},

enterPasswordAndConfirmPassword: async (pwd , cpwd) =>{
        await commonMethod.sendKey(registrationUi.password , pwd)
        await commonMethod.sendKey(registrationUi.cnfPassword , cpwd)
 },

  
fileToupload: async () =>{
        let fileToUpload = '../File/cris.jpg',
        absolutePath = path.resolve(__dirname, fileToUpload);
        await commonMethod.sendKey(registrationUi.file, absolutePath);
 },

 clickOnSubmit: async () =>{
       await element(registrationUi.btnSubmit).click();
  }, 

 verifyWebtable: async currentUrl =>{
    await browser.sleep(10000);
      let url = browser.getCurrentUrl();
      expect(url).to.eventually.to.equal(currentUrl);
 },

 navigateToWebsite: async env =>{

    if(env.toLowerCase() === 'qa'){
       log4jsGen.getLogger().debug("Navigated to QA URL "+browser.params.App.Registration.QA_URL);
       return browser.params.App.Registration.QA_URL
    }else if(env.toLowerCase() ==='dev'){
       log4jsGen.getLogger().debug("Navigated to STAGE URL "+browser.params.App.Registration.DEV_URL);
       return browser.params.App.Registration.DEV_URL
    } else {
      log4jsGen.getLogger().debug("Navigated to QA URL "+browser.params.App.Registration.QA_URL);
      return browser.params.App.Registration.QA_URL
    }
 },

genderSlectedValue: async gender => {
        if(gender.toLowerCase() === 'male' ){
            log4jsGen.getLogger().info("Gender selected by user "+gender);
            return  registrationUi.male;
        } else if(gender.toLowerCase() === 'female'){
            log4jsGen.getLogger().info("Gender selected by user "+gender);
        return  registrationUi.female
        }else{
            log4jsGen.getLogger().error("Invalid select "+gender);
            return null
        }
   } ,
   
genderHobbiesValue: async hobbies =>{
        if(hobbies.toLowerCase() === 'cricket'){
            log4jsGen.getLogger().info("Hobbies selected by user "+hobbies);
            return registrationUi.hobbiesCricket;
        }else if(hobbies.toLowerCase() === 'hockey'){
            log4jsGen.getLogger().info("Hobbies selected by user "+hobbies);
            return registrationUi.hobbiesHockey
        } else if(hobbies.toLowerCase() === 'movies'){
            log4jsGen.getLogger().info("Hobbies selected by user "+hobbies);
            return registrationUi.hobbiesMovies
        } else{
            log4jsGen.getLogger().error("Invalid select "+hobbies);
            return null
        }
}
}
module.exports = Registration