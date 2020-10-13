
let {setDefaultTimeout , Given , When , Then} = require('cucumber');
let RegistrationPage = require("../com.org.pages/Registration")
let testSetup = require("../hook/Hook");


    setDefaultTimeout(60 * 1200);
    Enviroment = new testSetup();

    Given('I should able to navigate demo.automationtesting website with {string} enviroment', async evn => {
        await RegistrationPage.navigateToURL(evn) 
    });

    When('I should able to enter firstname {string} and lastname {string}', async  (firstName, lastName) => {
         await RegistrationPage.enterFirstLastName(firstName , lastName) 
    });

    When('I should able to enter {string} address', async address =>{
          await RegistrationPage.enterAddress(address)
    });

     When('I should able enter {string} email address', async email =>{
          await RegistrationPage.enterEmail(email)
    });

   When('I should able enter {string} phone number', async phone => {
          await RegistrationPage.enterPhoneNumber(phone)
      });

    When('I should Able to Select {string} gender', async gender => {
      await RegistrationPage.selectGender(gender)
      }); 

    When('I should able to select {string}  hobbies of a user', async hobbies => {
          await RegistrationPage.selectHobbies(hobbies)
      });  
      
     When('I should able to select Random Language of a user', async () => {
           await RegistrationPage.enterLanguage()
      });  

      When('I should able to select {string} skills of a user', async skill => {
          await RegistrationPage.selectSkill(skill)
      }); 

      When('I should able to select {string} country of a user', async country => {
        await RegistrationPage.selectCountry(country)
      });

      When('I should able to select Random Country of a user', async () => {
          await RegistrationPage.ddlSelectCountry()
      });

      When('I should able to select Random Date of Birth of a user', async () =>{
        await RegistrationPage.selectDateOfBirth()
      });
   
      When('I should able to enter password {string} and confirm password {string} of a user', async (pwd, cpwd) => {    
        await RegistrationPage.enterPasswordAndConfirmPassword(pwd , cpwd)
      });

      When('I should able to upload photo of a user', async () =>{
        await RegistrationPage.fileToupload()
      });

      When('I should able to click on submit button', async () => {
        await RegistrationPage.clickOnSubmit()
      });

      Then('I should able to see {string} webtable page', async currentUrl =>{
        await RegistrationPage.verifyWebtable(currentUrl)
      });

