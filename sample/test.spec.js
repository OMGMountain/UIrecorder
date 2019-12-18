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

    it('mouseDown: 活动页 ( //a[text()="活动页"], 24.6875, 11, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="活动页"]', 30000)
            .sleep(300).mouseMove(24.6875, 11).mouseDown(0);
    });

    it('scrollTo: 0, 506', async function () {
        await driver.scrollTo(0, 506);
    });

    it('mouseUp: 活动页 ( //a[text()="活动页"], 25, 11, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="活动页"]', 30000)
            .sleep(300).mouseMove(25, 11).mouseMove(25, 11).mouseUp(0);
    });

    it('scrollTo: 0, 282', async function () {
        await driver.scrollTo(0, 282);
    });

    it('url: http://127.0.0.1:8081/demo/', async function () {
        await driver.url(_(`http://127.0.0.1:8081/demo/`));
    });

    it('waitBody: ', async function () {
        await driver.sleep(500).wait('body', 30000).html().then(function (code) {
            isPageError(code).should.be.false;
        });
    });

    it('scrollTo: 0, 511', async function () {
        await driver.scrollTo(0, 511);
    });

    it('click: 活动页 ( //a[text()="活动页"], 25, 15, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="活动页"]', 30000)
            .sleep(300).mouseMove(25, 15).click(0);
    });

    it('scrollTo: 0, 454', async function () {
        await driver.scrollTo(0, 454);
    });

    it('url: http://127.0.0.1:8081/demo/', async function () {
        await driver.url(_(`http://127.0.0.1:8081/demo/`));
    });

    it('waitBody: ', async function () {
        await driver.sleep(500).wait('body', 30000).html().then(function (code) {
            isPageError(code).should.be.false;
        });
    });

    it('click: 活动页 ( //a[text()="活动页"], 28, 10, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="活动页"]', 30000)
            .sleep(300).mouseMove(28, 10).click(0);
    });

    it('expect: jscode, return $(\'#upLog2\').text(), contain, $pagename', async function () {
        await driver
            .eval('return $(\'#upLog2\').text()')
            .should.not.be.a('error')
            .should.contain(_(`$pagename`));
    });

    it('scrollTo: 0, 896', async function () {
        await driver.scrollTo(0, 896);
    });

    it('click: 添加事件 ( //a[text()="添加事件"], 43, 9, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="添加事件"]', 30000)
            .sleep(300).mouseMove(43, 9).click(0);
    });

    it('scrollTo: 0, 316', async function () {
        await driver.scrollTo(0, 316);
    });

    it('scrollTo: 0, 811', async function () {
        await driver.scrollTo(0, 811);
    });

    it('scrollTo: 0, 940', async function () {
        await driver.scrollTo(0, 940);
    });

    it('expect: jscode, return JSON.parse($(\'#upLog2\').text()).xwhat, equal, buttonClick', async function () {
        await driver
            .eval('return JSON.parse($(\'#upLog2\').text()).xwhat')
            .should.not.be.a('error')
            .should.equal(_(`buttonClick`));
    });

    it('scrollTo: 0, 1475', async function () {
        await driver.scrollTo(0, 1475);
    });

    it('click: 设置单个通用属性 ( //a[text()="设置单个通用属性"], 52, 38, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="设置单个通用属性"]', 30000)
            .sleep(300).mouseMove(52, 38).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $registerSuperProperty: set success ({"member":"VIP"})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$registerSuperProperty: set success ({"member":"VIP"})`));
    });

    it('scrollTo: 0, 1496', async function () {
        await driver.scrollTo(0, 1496);
    });

    it('click: 设置多个通用属性 ( //a[text()="设置多个通用属性"], 54, 13, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="设置多个通用属性"]', 30000)
            .sleep(300).mouseMove(54, 13).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $registerSuperProperties: set success ({"age":20,"member":"VIP"})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$registerSuperProperties: set success ({"age":20,"member":"VIP"})`));
    });

    it('scrollTo: 0, 1838', async function () {
        await driver.scrollTo(0, 1838);
    });

    it('scrollTo: 0, 2278', async function () {
        await driver.scrollTo(0, 2278);
    });

    it('click: 获取单个通用属性 ( //a[text()="获取单个通用属性"], 77, 5, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="获取单个通用属性"]', 30000)
            .sleep(300).mouseMove(77, 5).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $getSuperProperty:[age] : get success. (20)', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$getSuperProperty:[age] : get success. (20)`));
    });

    it('scrollTo: 0, 2331', async function () {
        await driver.scrollTo(0, 2331);
    });

    it('click: 获取所有通用属性 ( //a[text()="获取所有通用属性"], 66, 13, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="获取所有通用属性"]', 30000)
            .sleep(300).mouseMove(66, 13).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $getSuperProperties:[] : get success. ({"member":"VIP","age":20})', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$getSuperProperties:[] : get success. ({"member":"VIP","age":20})`));
    });

    it('scrollTo: 0, 2016', async function () {
        await driver.scrollTo(0, 2016);
    });

    it('click: 删除单个通用属性 ( //a[text()="删除单个通用属性"], 43, 4, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="删除单个通用属性"]', 30000)
            .sleep(300).mouseMove(43, 4).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $unregisterSuperProperty:(age) delete success', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$unregisterSuperProperty:(age) delete success`));
    });

    it('click: 清除所有通用属性 ( //a[text()="清除所有通用属性"], 48, 9, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="清除所有通用属性"]', 30000)
            .sleep(300).mouseMove(48, 9).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $clearSuperProperties:clear success', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$clearSuperProperties:clear success`));
    });

    it('click: 用户ID设置 ( //a[text()="用户ID设置"], 57, 12, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="用户ID设置"]', 30000)
            .sleep(300).mouseMove(57, 12).click(0);
    });

    it('expect: jscode, return $(\'#upLog\').text(), equal, $identify: set success (userName)', async function () {
        await driver
            .eval('return $(\'#upLog\').text()')
            .should.not.be.a('error')
            .should.equal(_(`$identify: set success (userName)`));
    });

    it('scrollTo: 0, 3015', async function () {
        await driver.scrollTo(0, 3015);
    });

    it('click: 关联 ( //a[text()="关联"], 19, 9, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="关联"]', 30000)
            .sleep(300).mouseMove(19, 9).click(0);
    });

    it('expect: jscode, return JSON.parse($(\'#upLog2\').text()).xcontext.$is_login, equal, true', async function () {
        await driver
            .eval('return JSON.parse($(\'#upLog2\').text()).xcontext.$is_login')
            .should.not.be.a('error')
            .should.equal(_(true));
    });

    it('scrollTo: 0, 3321', async function () {
        await driver.scrollTo(0, 3321);
    });

    it('scrollTo: 0, 3586', async function () {
        await driver.scrollTo(0, 3586);
    });

    it('click: 设置单个属性 ( //a[text()="设置单个属性"], 36, 8, 0 )', async function () {
        await driver.sleep(300).wait('//a[text()="设置单个属性"]', 30000)
            .sleep(300).mouseMove(36, 8).click(0);
    });

    it('× expect: jscode, return JSON.parse(\'#upLog2\').text()).xcontext.Email, equal, yonghu@163.com', async function () {
        await driver
            .eval('return JSON.parse($(\'#upLog2\').text()).xcontext.Email')
            .should.not.be.a('error')
            .should.equal(_(`yonghu@163.com`));
    });

    it('scrollTo: 0, 3617', async function () {
        await driver.scrollTo(0, 3617);
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
