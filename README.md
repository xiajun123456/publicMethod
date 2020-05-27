## 注释规范

``` bash
例:
/*
* @params {date} 传入时间
*/

@module

标明当前文件模块，在这个文件中的所有成员将被默认为属于此模块，除非另外标明

@submodule

针对模块的划分，处于@module之下

@class

标示一个类或者一个函数

@constructor

当使用对象字面量形式定义类时，可使用此标签标明其构造函数

@callback

标明此方法是一个回调函数

@event

标明一个可触发的事件函数，一个典型的事件是由对象定义的一组属性来表示。

@constant

常量标识

@member/@var

记录一个基本数据类型的成员变量

@method

标记一个方法或函数

@param

标记方法参数及参数类型

@property

标明一个对象的属性

@readonly

只读

@return

标明返回值、类型及描述

@type

描述代码变量的类型

@description

如果在注释开始描述可省略此标签

@enum

一个类中属性的类型相同时，使用此标签标明

@example

示例，代码可自动高亮

@exports

标识此对象将会被导出到外部调用

@ignore

忽略此注释块

@link

内联标签，创建一个链接，如 `{@link How people build software Github}`

@name

指定一段代码的名称，强制 JSDoc 使用此名称，而不是代码里的名称

@namespace

指定一个变量为命名空间变量

@static

描述一个不需实例即可使用的变量

@summary

对描述信息的短的概述

@throws

描述方法将会出现的错误和异常

@todo

描述函数的功能或任务

@tutorial

插入一个指向向导教程的链接
```

## git commit 规范
> 例: feat: 2.1版本报表功能
``` bash
feat: 新增feature
fix: 修复bug
docs: 仅仅修改了文档，如readme.md
style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
refactor: 代码重构，没有新增功能或修复bug
perf: 优化相关，如提升性能、用户体验等。
test: 测试用例，包括单元测试、集成测试。
chore: 改变构建流程、或者增加依赖库、工具等。
revert: 版本回滚
```
