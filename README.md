# vue-starter

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 注意事项
1. vue文件中<script>参考`HelloWorld.vue`文件，使用ts以及class风格。
2. 异步请求与本地存储操作放在vuex中。
3. 单文件不超过200行。
4. <style>必须加scope。
5. eslint代码风格主观性较强，可增减规则。
6. 注释风格统一。末尾单行使用`//`,函数及类的注释放在前部，使用`/**注释文字*/`。
7. components里面的文件夹以views的单个文件名来命名。
8. vue文件首字母大写，其他均小写。
9. 复杂类型均须有类型定义，写在vuex中的state里。
10. 碰到warn与error及时解决。
11. 按需在main.ts里引入antd组件。
12. 通用方法写在utils里。
13. 不要让组件做太多事！！

## vuex使用规范（重点）
1. 每个module使用一个文件夹，state、getters、mutations、actions均写成单独文件
2. 每个module的index.ts加上`namespaced: true`，代表成立一个命名空间，组件使用
`const someModule = namespace(moduleName)`才可以访问到。
3. 组件使用`vuex-class`库，先得到模块命名空间，然后使用
`@someModule.State personName!: string  (简写）` 或者
`@someModule.State('personName') name!: string  （使用别名）`.
同样对于getters、mutations、actions如下。
`@someModule.Getter getterProp1!: number`
`@someModule.Mutation mutationFunc1: any`
`@someModule.Action actionFunc1: any`
于是，接下来即可使用上述得到的东西。
```
this.personName 相当于 this.$store.state.moduleName.personName
this.getterProp1 相当于 this.$store.getters.moduleName.getterProp1
this.mutationFunc1(2) 相当于 this.$store.commit('moduleName/mutationFunc1', 2)
this.actionFunc1('123') 相当于 this.$store.dispatch('moduleName/actionFunc1', '123)
```