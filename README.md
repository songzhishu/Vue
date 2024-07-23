# Vuex

## 1、DAY1

### 1.1、特性

#### 1.1.1、插值表达式

```
${}类似这个可以解析数据,然后渲染到页面中
```

```
{{ message }}
```

**注意：**

- 使用的数据要存在
- 支持表达式，不是语句 if for
- 不能再标签属性中使用{{}}

#### 1.1.2、响应式

​	什么是响应式？就是可以动态的修改数据后然后，可以实时的读取到数据的状态，数据一边变化就渲染到最新的数据。

```
 <div id="app">
        {{ message }}
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        let app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })

        /* 定时去修改message app.data.message是获取不到数据的,data是app中的一个属性 */
        setTimeout(function () {
            app.message = "臭狗屎"
            console.log(app.message);
        }, 1000); // 每秒执行一次
    </script>
```

#### 1.1.3、开发者工具

​		可以开梯子，然后去搜索Vue.js devtools，也可以使用其他的浏览器，如果实在想使用谷歌的话，可以到极简插件中下载，下载解压后将文件拉到谷歌浏览器中。

#### 1.1.4、Vue指令

​		Vue.js提供了许多内置指令，这些指令可以在模板中使用，用于绑定数据和实现各种功能。带有v-前缀的特殊的标签属性。

##### 1.1.4.1、v-show和v-if

​		都可以控制元素的显示和隐藏，

- `v-if`：条件为假时，元素及其子元素不会被渲染到DOM中，因此不会占用任何性能。当条件变为真时，元素及其子元素会被渲染到DOM中，可能会消耗一些性能。适用于条件不经常改变的情况，因为每次条件改变时，元素及其子元素都会被重新渲染。
- `v-show`：无论条件是否为真，元素及其子元素都会被渲染到DOM中，因此会占用一些性能。条件为假时，元素会被添加一个`display: none`的样式，使其不可见，但不会销毁元素及其子元素。采用的是以css的方式去控制元素的显示和隐藏，所以比较适用于对于频繁切换显示和隐藏的元素

```
  <div id="app">
    <div v-show="flag" class="box">我是v-show控制的盒子</div>
    <div v-if="flag" class="box">我是v-if控制的盒子</div>
  </div>
  <script src="./vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        flag: false
      }
    })
  </script>
```

![image-20240723184830497](C:\Users\Doudouxia\AppData\Roaming\Typora\typora-user-images\image-20240723184830497.png)

上面是为true的渲染页面，当flag为false时看渲染的页面，以及元素

![image-20240723185450878](C:\Users\Doudouxia\AppData\Roaming\Typora\typora-user-images\image-20240723185450878.png)

##### 1.1.4.2、v-else和v-else-if

`v-else`和`v-else-if`是Vue.js中的条件渲染指令，它们通常与`v-if`或`v-show`一起使用，用于处理多个条件分支。

1. **v-else**:

   - `v-else`指令用于表示`v-if`或`v-else-if`指令的"else"分支。当`v-if`或`v-else-if`指令的条件为假时，`v-else`指令的元素会被渲染。
   - `v-else`指令必须紧跟在`v-if`或`v-else-if`指令之后，不能有其他元素或指令在它们之间。

2. **v-else-if**:

   - `v-else-if`指令用于表示`v-if`或`v-else-if`指令的"else if"分支。当`v-if`指令的条件为假，并且`v-else-if`指令的条件为真时，`v-else-if`指令的元素会被渲染。
   - `v-else-if`指令可以连续使用，但必须紧跟在`v-if`或`v-else-if`指令之后，不能有其他元素或指令在它们之间。

   其实可以看成v-if的延申，在多分的选择基础进行数据的渲染。

##### 1.1.4.3、v-on

- 内联方式：

  ```js
  <div id="app">
      <button @click="count--">-</button>
      <span>{{count}}</span>
      <button v-on:click="count++">+</button>
    </div>
    <script src="../JS/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          count: 0
        }
      })
    </script>
  ```

  一种是v-on:事件，还有另外的一种简写方式@事件，内联方式的话一般是对于一些简单的语句，但是对于一些复杂的业务处理的话，就要写一些具体的代码了。

- 函数方式（我也不知道怎么叫）

```js
  <div id="app">
    <button @click="fn">切换显示隐藏</button>
    <h1 v-show="flag">程序员</h1>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        flag: true
      },
      methods: {
        fn() {
          console.log("切换隐藏");
          app.flag = !app.flag
        }
      }
    })
  </script>
```

- v-on调用传参

```js
  <div id="app">
    <div class="box">
      <h3>小黑自动售货机</h3>
      <button @click="buy(5)">可乐5元</button>
      <button @click="buy(10)">咖啡10元</button>
    </div>
    <p>银行卡余额：{{balance}}元</p>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        balance: 1000
      },
      methods: {
        buy(x) {
          app.balance = app.balance - x
        }
      }
    })
  </script>
```

##### 1.1.4.4、v-bind

​		v-bind是Vue.js中的一个指令，用于动态地绑定一个或多个属性。它可以用于绑定HTML元素的属性、组件的属性、甚至是Vue实例的属性。

1. **HTML元素的属性**:
   - `src`：用于绑定图像、视频、音频等资源的URL。
   - `href`：用于绑定链接的URL。
   - `class`：用于绑定CSS类名。
   - `style`：用于绑定内联样式。
   - `id`：用于绑定元素的ID。
   - `title`：用于绑定元素的标题。
   - `alt`：用于绑定图像的替代文本。
   - `value`：用于绑定表单元素的值。
   - `disabled`：用于绑定表单元素的禁用状态。
   - `checked`：用于绑定复选框或单选按钮的选中状态。
   - `selected`：用于绑定下拉列表的选中状态。
2. **组件的属性**:
   - 组件的属性可以用于传递数据给子组件。例如，`<custom-component :prop="value"></custom-component>`。
3. **Vue实例的属性**:
   - Vue实例的属性可以用于在模板中访问和显示数据。例如，`{{ message }}`。

案例：

别人写的：

```js
<div id="app">
    <button v-show="index > 0" @click="index--">上一页</button>
    <div>
      <img :src="list[index]" alt="">
    </div>
    <button v-show="index < list.length - 1" @click="index++">下一页</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        index: 0,
        list: [
          './imgs/11-00.gif',
          './imgs/11-01.gif',
          './imgs/11-02.gif',
          './imgs/11-03.gif',
          './imgs/11-04.png',
          './imgs/11-05.png',
        ]
      }
    })
  </script>
```

我写的：

```js
 <div id="app">
    <button @click="last()" v-if="!(index === 0)">上一页</button>
    <div>
      <img :src="Imgurl" alt="">
    </div>
    <button @click="next()" v-if="!(index === list.length-1)">下一页</button>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        list: [
          '../imgs/11-00.gif',
          '../imgs/11-01.gif',
          '../imgs/11-02.gif',
          '../imgs/11-03.gif',
          '../imgs/11-04.png',
          '../imgs/11-05.png',
        ],
        Imgurl: '../imgs/11-00.gif',
        index: 0
      },
      methods: {
        last() {
          console.log("点击喽,上一页");
          app.Imgurl = app.list[app.index - 1]
          app.index--
        },
        next() {
          console.log("点击喽,下一页");
          app.Imgurl = app.list[app.index + 1]
          app.index++
        }
      }
    })
  </script>
```

果然像屎一样！

##### 1.1.4.5、v-for

​		`v-for` 是 Vue.js 中的一个指令，用于在模板中基于一个数组来渲染一个列表。它允许你遍历数组，并为每个元素生成一个模板副本。`v-for` 指令的基本语法如下：

```js
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```

- 遍历对象的属性名和属性值：

```
<div v-for="(value, key) in object" :key="key">
  {{ key }}: {{ value }}
</div>
```

