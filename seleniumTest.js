const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let tableValueStr;

driver.get("https://www.tut.by");
driver.findElement(webdriver.By.xpath("//a[@title='Финансы']")).click()
    .then(() => {
        return driver.wait(webdriver.until.elementLocated(webdriver.By.xpath("//a[@data-ua-hash='finance.tut.by_main_left_logo_tut']")));
    })
    .then(() => {
        return driver.findElement(webdriver.By.css("input[data-currency='BYN']")).sendKeys("2000");
    })
    .then(() => {
        return driver.findElement(webdriver.By.css("input[data-currency='USD']")).getAttribute('value')
    })
    .then((tableValue) => {
        tableValueStr = tableValue;
        return driver.findElement(webdriver.By.css(".w-currency_table tr:nth-child(1) td:nth-child(4) p")).getText()
    })
    .then((rate) => {

        let countedValue = Math.round(2000/rate*100)/100;
        let tableValue = parseFloat(tableValueStr.replace(/ /g, ""));

        if (countedValue === tableValue) {

            console.log('Test Passed\n' + 'Value from table = ' + tableValue + ' equal to counted value = ' + countedValue);
            } else {

            throw new Error(console.log('Test Failed\n' + 'Value from table = ' + tableValue + ' not equal to counted value = ' + countedValue));
            }
    })
    .then(() => {driver.quit()}, () => {driver.quit()})

