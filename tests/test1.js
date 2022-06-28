describe('ProtoCommerce Demo', function() {
    
    var Form=browser.page.Form();

    before(browser => browser.navigateTo(Form.url));
  
    it('Demo test ProtoCommerce', function(browser) {
      browser
        .waitForElementVisible('body')
        .assert.titleContains('Your store. Login')
       // .assert.visible('input[type=search]')
        Form.entervalue('admin@yourstore.com','admin')
       // .setValue('input[type=search]', 'nightwatch')
        .assert.titleContains('Dashboard / nopCommerce administration')
        
        //.click('button[type=submit]')
        //Form.butoon()
       // .assert.textContains('.layout__content', 'Nightwatch.js');
    });
    after(browser => browser.end())
  
  });
  