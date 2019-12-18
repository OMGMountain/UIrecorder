### UIrecorder
1, 安装所有依赖  
    
    npm install 

2, 脚本录制,执行下面代码后 一路回车就可以

    uirecorder start

3, 脚本回放

    selenium-standalone start  // 开启服务 在新开个执行页面 
    mocha sample/test.spec.js 

### 云浏览器测试 在config.json 中更改地址

### 常见问题
开发过程中主要就是 因为 chromedriver 版本不匹配导致的项目启动不了
