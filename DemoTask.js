/**
 * Step For Configuration 
 * Install Node
 * Install the npm
 * Install the puppeteer with command npm install -g puppeteer
 * After Installation write a command like node .\DemoTask.js
 * If you want to execute it in UI base just follow the belows commands
 * const browser = await puppeteer.launch({headless: false
 * 
 * If you want to to Execute it in headless mode just make the headless to true state 
 * const browser = await puppeteer.launch({headless: True.
 * 
 * Tase case # 1
 * @name Open the URL: https://phptravels.com/
 * @desc Step 1: Click Check-Out Demo Button
         Step 2: Click on Hosting Link
         Step 3: Click Cloud Shared Hosting
         Step 4: Click Check Pricing
         Step 5: Click Select at Basic Plan
         Step 6: In a Popup just enter email and Hit Continue.
 */
const puppeteer = require('puppeteer')
const screenshot = 'screenshot_before_request_a_call_back_emp.png'
try {
  (async () => {
    const browser = await puppeteer.launch({headless: false, args: ['--disable-web-security','--disable-features=IsolateOrigins,site-per-process']})    //Remove {headless: false} statement if you don't want to launch the browser
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://phptravels.com/demo')

    await page.waitForSelector('#mega-nav-navigation div ul:nth-child(1) li:nth-child(6) button',{timeout: 1000})             
    await page.focus('#mega-nav-navigation div ul:nth-child(1) li:nth-child(6) button')                       
    await page.click('#mega-nav-navigation div ul:nth-child(1) li:nth-child(6) button')       
    await page.waitForSelector("[alt='cloud shared hosting']")             
    await page.focus("[alt='cloud shared hosting']")                        
    await page.click("[alt='cloud shared hosting']")  
    await page.waitFor(2000);
    await page.waitForSelector(".btn-hero[href='https://phptravels.com/order/']")             
    await page.focus(".btn-hero[href='https://phptravels.com/order/']")                       
    await page.click(".btn-hero[href='https://phptravels.com/order/']") 
    await page.waitFor(2000);
    await page.waitForSelector(".btn-success .hero-icon")             
    await page.focus(".btn-success .hero-icon")                       
    await page.click(".btn-success .hero-icon") 
    await page.waitFor(2000);
    await page.waitForSelector('th:nth-child(2) p:nth-child(3) .btn--primary')             
    await page.focus('th:nth-child(2) p:nth-child(3) .btn--primary')                       
    await page.click('th:nth-child(2) p:nth-child(3) .btn--primary')       

    //Switching to iframe
    await page.waitForSelector("iframe");
      const elementHandle = await page.$('iframe');
      await page.waitFor(5000);
      const frame = await elementHandle.contentFrame();
      await frame.waitForSelector("#root [data-testid='authentication'] input[name='email']");
      const username = await frame.$("[name='email']");
      await username.type('myemail@email.com');

    await browser.close()
  })()
} catch (err) {
  console.error(err)
}
