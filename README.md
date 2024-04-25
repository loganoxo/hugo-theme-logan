# hugo博客 配置baseUrl的坑

## 本地启动
* 不管配置文件怎么改，默认的`baseUrl`都为`localhost`，bind的ip为`127.0.0.1`;
* 生成的public里的html中的url都不会是你配置文件里的`baseUrl`
* -D包含草稿

```shell
hugo server -D
```

## 除非在后面加上 --baseURL

```shell
hugo server -D --baseURL http://www.xxx.com/
```

## 启动局域网连接

```shell
hugo server -D --bind=0.0.0.0 --port=1313
```

* 所以本地开发测试时，不需要关心`baseUrl`，server启动时就一定是`localhost`

## 本地或服务器打包

* 打包时，hugo会严格按照配置文件中的`baseUrl`创建静态页面，与`--environment`无关
* `--gc`构建站点时会自动执行垃圾回收;`--minify`对输出的 HTML、CSS 和 JavaScript 进行压缩和优化

```shell
hugo -D --gc --minify
```



## 服务器多环境打包

我的博客，同一套代码在`github pages`和`vercel`上都有部署,分别是不同的域名，所以就需要区分两个环境的`baseUrl`,我是这样做的：

* 把原本的`hugo.yaml`当作是`vercel` 的配置，复制原本的配置为`hugo_git.yaml`当作`github pages`的配置
* 两个文件只有`baseUrl`不同
* 在启动Hugo打包的时候，需要加具体的配置文件名参数

```shell
hugo -D --gc --minify --config hugo.yaml # 在vercel上使用，默认为vercel
hugo -D --gc --minify --config hugo_git.yaml #在github action中使用
```













