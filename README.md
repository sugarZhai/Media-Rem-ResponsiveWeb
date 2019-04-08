## 关于css样式
使用目前react领域css最佳实践[styled-components](https://www.styled-components.com/)

## CSS Media媒体查询
本次作业主要考查在不使用第三方框架的情况，通过 @media 多媒体查询来适配不同屏幕分辨率下样式布局
@media screen and (max-width:768px)
@media screen and (min-width:768px) and (max-width:1024px)
@media screen and (min-width:1024px) and (max-width:1200px)
@media screen and (min-width:1200px)
### 关于rem单位计算
head引入计算html元素font-size的脚本，html标签会自动设置fontize属性，具体就是 1rem = CSS屏幕宽度的1/10，
为提高开发效率px2rem工具，可以安装vs code插件*px to rem*来实现

## Jslint规范
整个项目遵循Jslint规范，请务必安装对应的编辑器插件来支持代码校验,vscode可以使用 *JSLint* 插件， webStorm自带但需要配置

## 状态管理 Mobx
使用 Mobx 进行状态管理，注册 store 位置 /src/store/index.js，开发工具:可安装谷歌插件 => Mobx Developer Tools

## 关于性能优化
media媒介查询适配不同宽度
rem根据font-size等比例自适应布局
静态资源进行无损压缩
如有cdn资源加载，可使用懒加载模式进行渲染

## 使用步骤
npm install
npm run dev
localhost:3000

## 在线预览
https://homework.zhaishuang.now.sh/
不同设备刷新页面

