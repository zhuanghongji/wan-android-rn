# wan-android-rn

WAN ANDROID 客户端 - React Native 实现版

## 概述

[WAN ANDROID](http://www.wanandroid.com/) ，一个优质的 Android 站点。

该站汇总 Android 相关的项目、知识体系、公众号文章和工具等，你可在站内看到最新的博文和发现最新的项目，同时你可以利用一些工具来提高开发效率。

本项目是利用该站的开放 API 进行开发的，待完善的相关项目还有：

* wan-android-rn
* [wan-android-kt](https://github.com/zhuanghongji/wan-android-kt)
* [wan-android-swift](https://github.com/zhuanghongji/wan-android-swift)


## 代码结构

```
├ src  
   ├ assets               资产
   ├ components           组件
      ├ ...
      └ index.js 
   ├ res                  资源
      ├ images            图片
      ├ colors            颜色
      ├ dimensions         尺寸
      ├ fontSizes          文字大小
      ├ sheets            通用样式
      └ index.js      
   ├ modules
      ├ main              首页
         ├ article        文章
         ├ explore        发现
         ├ mine           我的
         └ todo           待办
      ├ navigation        导航
      ├ project           项目
      ├ search            搜索
      ├ sites             常用网站
      └ web               通用网页
   └ routes
├ App.js
├ app.json
├ index.js
```

## 依赖

* react-native-swiper
* react-navigation
* jest
* typescript


## 截图

| 主页 | 发现
| -- | -- 
| <img src="./screenshots/1.png"/> | <img src="./screenshots/3.png"/>


## 版本信息

* [ ] **1.0.0** 
* 启动：启动页支持动画。
* 登录：支持账号密码登录功能。
* 文章：文章列表、文章详情。
* 待办：支持增删改查待办事项。
* 发现：导航、体系、项目、常用网站。
* 我的：个人信息、设置。


## License

```
Copyright (C) 2019 zhuanghongji

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```