
let { After, Before ,Status} = require('cucumber');
let JsonFormatter = require('cucumber').JsonFormatter;
let fse = require('fs-extra');
let moment = require('moment');
const { browser } = require('protractor');
let starttime = moment(new Date(),"MM-DD-YYYY HH:mm:ss");
let log4jsGen = require("../Utlity/log4jsGen");


module.exports = function () {

  Before(async function () {
    await browser.manage().deleteAllCookies();
    log4jsGen.getLogger().info(moment().format("MM-DD-YYYY HH:mm:ss")+" Test Execution Started");
    log4jsGen.getLogger().info("****************************************************************************");
    browser.waitForAngularEnabled(true);
    log4jsGen.getLogger().info("Set waitForAngularEnabled = true");
    browser.ignoreSynchronization = true;
    browser.sleep(2000)
    log4jsGen.getLogger().info("Set ignoreSynchronization = true");
    log4jsGen.getLogger().info("Test Method Execution Started at : "+moment().format("MM-DD-YYYY HH:mm:ss"));
    log4jsGen.getLogger().info("---------------------------------------------------------------------------")
})

After(async function (scenario) {
    log4jsGen.getLogger().info("---------------------------------------------------------------------------");
    log4jsGen.getLogger().info("Test Method Execution Completed at : "+moment().format("MM-DD-YYYY HH:mm:ss"));
    if (scenario.result.status === Status.FAILED) {
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot, "image/png")
    }
    let endtime = moment(new Date(),"MM-DD-YYYY HH:mm:ss");
    let duration = moment.duration(moment(endtime).diff(starttime));
    log4jsGen.getLogger().info("****************************************************************************");
    log4jsGen.getLogger().info("Total Duration : "+duration.minutes()+" minutes "+duration.seconds()+" seconds");
    log4jsGen.getLogger().info(moment().format("MM-DD-YYYY HH:mm:ss")+" Test Execution Completed");
  })
}