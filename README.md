

## Build Setup
cd到你的目录

``` bash
# install dependencies
npm install
修改package.json
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 192.168.0.102 ",#此ip为你本的IP

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


