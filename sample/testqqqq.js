const $ = require('jquery');
const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function () {

    let driver, testVars;

    before(function () {
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: http://127.0.0.1:8081/demo/', async function () {
        await driver.url(_(`http://127.0.0.1:8081/demo/`));
    });

    it('waitBody: ', async function () {
        await driver.sleep(500).wait('body', 30000).html().then(function (code) {
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 185', async function () {
        await driver.scrollTo(0, 185);
    });

    it('scrollTo: 0, 322', async function () {
        await driver.scrollTo(0, 322);
    });

    it('scrollTo: 0, 534', async function () {
        await driver.scrollTo(0, 534);
    });

    it('scrollTo: 0, 720', async function () {
        await driver.scrollTo(0, 720);
    });

    it('scrollTo: 0, 1454', async function () {
        await driver.scrollTo(0, 1454);
    });

    it('click: 设置单个通用属性 ( //a[text()="设置单个通用属性"], 54, 5, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="设置单个通用属性"]', 30000)
            .sleep(300).mouseMove(54, 5).click(0);
    });

    it('× expect: jscode, return $(\'upLog\').text(), equal, $registerSuperProperty: set success ({"member":"VIP"})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$registerSuperProperty: set success ({"member":"VIP"})`));
    });

    it('click: 设置多个通用属性 ( //a[text()="设置多个通用属性"], 47, 16, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="设置多个通用属性"]', 30000)
            .sleep(300).mouseMove(47, 16).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $registerSuperProperties: set success ({"age":20,"member":"VIP"})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$registerSuperProperties: set success ({"age":20,"member":"VIP"})`));
    });

    it('click: 获取单个通用属性 ( //a[text()="获取单个通用属性"], 43, 6, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="获取单个通用属性"]', 30000)
            .sleep(300).mouseMove(43, 6).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $getSuperProperty:[age] : get success. (20)', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$getSuperProperty:[age] : get success. (20)`));
    });

    it('click: 获取所有通用属性 ( //a[text()="获取所有通用属性"], 51, 8, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="获取所有通用属性"]', 30000)
            .sleep(300).mouseMove(51, 8).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $getSuperProperties:[] : get success. ({"member":"VIP","age":20})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$getSuperProperties:[] : get success. ({"member":"VIP","age":20})`));
    });

    it('scrollTo: 0, 1880', async function () {
        await driver.scrollTo(0, 1880);
    });

    it('click: 删除单个通用属性 ( //a[text()="删除单个通用属性"], 54, 9, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="删除单个通用属性"]', 30000)
            .sleep(300).mouseMove(54, 9).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $unregisterSuperProperty:(age) delete success', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$unregisterSuperProperty:(age) delete success`));
    });

    it('click: 清除所有通用属性 ( //a[text()="清除所有通用属性"], 41, 16, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="清除所有通用属性"]', 30000)
            .sleep(300).mouseMove(41, 16).click(0);
    });

    it('× expect: jscode, return $(\'#upLog\').text(), equal, ', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$clearSuperProperties:clear success`));
    });

    function _ (str) {
        if (typeof str === 'string') {
            return str.replace(/\{\{(.+?)\}\}/g, function (all, key) {
                return testVars[key] || '';
            });
        }
        else {
            return str;
        }
    }

};

if (module.parent && /mocha\.js/.test(module.parent.id)) {
    runThisSpec();
}

function runThisSpec () {
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({}, config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if (match) {
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if (fs.existsSync(hostsPath)) {
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g, '/').replace(/\.js$/, '');

    browsers.split(/\s*,\s*/).forEach(function (browserName) {
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function () {

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function () {
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                });
                if (proxy) {
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if (hosts) {
                    sessionConfig.hosts = hosts;
                }

                try {
                    self.driver = driver.session(sessionConfig).windowSize(1024, 768).config({
                        pageloadTimeout: 30000, // page onload timeout
                        scriptTimeout: 5000, // sync script timeout
                        asyncScriptTimeout: 10000 // async script timeout
                    });
                } catch (e) {
                    console.log(e);
                }

                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/reports/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/reports/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function () {
                let self = this;
                self.stepId++;
                if (self.skipAll) {
                    self.skip();
                }
            });

            afterEach(async function () {
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if (currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)) {
                    self.skipAll = true;
                }
                if (!/^(closeWindow):/.test(title)) {
                    const casePath = path.dirname(caseName);
                    const filepath = `${self.screenshotPath}/${self.caseName}_${self.stepId}`;
                    const relativeFilePath = `./screenshots/${casePath}/${self.caseName}_${self.stepId}`;
                    let driver = self.driver;
                    try {
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: ' + url + ' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                        appendToContext(self, relativeFilePath + '.png');
                    }
                    catch (e) { }
                }
            });

            after(function () {
                return this.driver.close();
            });

        });
    });
}

function getRootPath () {
    let rootPath = path.resolve(__dirname);
    while (rootPath) {
        if (fs.existsSync(rootPath + '/config.json')) {
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs (dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirs(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec (name) {
    try {
        require(rootPath + '/' + name)();
    }
    catch (e) {
        console.log(e)
        process.exit(1);
    }
}

function isPageError (code) {
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function appendToContext (mocha, content) {
    try {
        const test = mocha.currentTest || mocha.test;

        if (!test.context) {
            test.context = content;
        } else if (Array.isArray(test.context)) {
            test.context.push(content);
        } else {
            test.context = [test.context];
            test.context.push(content);
        }
    } catch (e) {
        console.log('error', e);
    }
};

function catchError (error) {

}
