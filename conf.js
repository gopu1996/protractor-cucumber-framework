
let details =  require('./test-enviroment/CommonData.json')
exports.config = {
    directConnect: true,
    getPageTimeOut: 200000,
    allScriptsTimeout: 500000,
    capabilities: {
        platform: 'windows',
        platformVersion: '10',
        browserName: details.EnvBrowser.browser,
        chromeOptions: {
            'args': ['show-fps-counter=true'],
            'args': ['disable-extensions', 'start-maximized', '--disable-web-security','--no-sandbox'],
            'args': ['disable-infobars'],
            useAutomationExtension: false,
         
            }

    },
    suites:{
      smoke: [details.EnvBrowser.smoke],
      regression: [details.EnvBrowser.regression]
  },
    
     framework: details.EnvBrowser.framework,
     params: require('./test-enviroment/CommonData.json'),
     frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [details.EnvBrowser.feature],
  

    cucumberOpts: {
      require: ['./step-defination/Registration.js' , './step-defination/Login.js'],  
      tags: [],                      
      strict: true,                           
      'dry-run': false,              
      compiler: [], 
      format: 'json:report/results.json'  
    },

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true,
            pageTitle: "Project Report",
            pageFooter: "<div><p>Protractor with cucumber</p></div>",
        }
    }],
  
   onPrepare: function () {
      browser.manage().window().maximize();           
    },

  };
 