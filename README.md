## 安装依赖

安装node.js

```
npm install
```

## 打包远程组件（弹层）

```
cd rollup
npm install
npm run rollup
```

## 远程组件放到CDN

打包完成可以把rollup/dist/rollup.js放到远端CDN，
然后通过src/common/remote/Index.vue的data属性里的url，
默认使用之前构建过的//yun.tuia.cn/tuia/cdn/remote/rollup.js。

可以通过下面命令尝试一下
## 验证页面加载远程组件（弹层），启动项目
```
skin=activity/modal yarn run dev
```