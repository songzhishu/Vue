# Vue

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

```html
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

```html
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

```html
<div v-for="(value, key) in object" :key="key">
  {{ key }}: {{ value }}
</div>
```

注意哦：

​		:key="item.id"，可以保证遍历出来的数据的唯一性

##### 1.1.4.6、v-model

​		`v-model`是Vue.js框架中的一个指令，用于在表单输入和应用状态之间创建双向数据绑定。这意味着当用户在表单输入中输入数据时，Vue.js会自动更新数据模型，反之亦然。

## 2、DAY2

### 2.1、指令修饰符

​		指令修饰符是Vue.js中用于修饰指令的一种特殊语法，它允许你以更细粒度的方式控制指令的行为。以下是一些常见的指令修饰符：

1. **`.stop`**：调用`event.stopPropagation()`，阻止事件冒泡。
2. **`.prevent`**：调用`event.preventDefault()`，阻止默认事件行为。
3. **`.capture`**：以捕获模式触发事件处理程序。
4. **`.self`**：只当事件是从监听器绑定的元素本身触发时才触发回调。
5. **`.once`**：事件只触发一次。
6. **`.left`、`.right`、`.middle`**：根据鼠标按钮触发事件处理程序。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .father {
      width: 200px;
      height: 200px;
      background-color: pink;
      margin-top: 20px;
    }
    .son {
      width: 100px;
      height: 100px;
      background-color: skyblue;
    }
  </style>
</head>
<body>
  <div id="app">
    <h3>v-model修饰符 .trim .number</h3>
    姓名：<input v-model="username" type="text"><br>
    年纪：<input v-model="age" type="text"><br>

    
    <h3>@事件名.stop     →  阻止冒泡</h3>
    <div @click="fatherFn" class="father">
      <div @click="sonFn" class="son">儿子</div>
    </div>

    <h3>@事件名.prevent  →  阻止默认行为</h3>
    <a href="http://www.baidu.com">阻止默认行为</a>
  </div>
  <script src="./vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        username: '',
        age: '',
      },
      methods: {
        fatherFn () {
          alert('老父亲被点击了')
        },
        sonFn () {
          alert('儿子被点击了')
        }
      }
    })
  </script>
</body>
</html>
```

### 2.2、v-bind的样式增强

class增强

```html
<div id="app">
    <ul>
      <li v-for="(item,index) in list" :key="item.id" @click="change(item.id)">
        <a :class="{active:index ===activeIndex}" href="#">{{item.name}}</a>
      </li>
    </ul>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        activeIndex: 0,
        list: [
          { id: 1, name: '京东秒杀' },
          { id: 2, name: '每日特价' },
          { id: 3, name: '品类秒杀' },
          { id: 4, name: '手机秒杀' },
          { id: 5, name: '电脑秒杀' },
        ]
      },
      methods: {
        change(id) {
          this.activeIndex = id - 1
        }
      }
    })
  </script>
```

style：样式增强

```html
 <div id="app">
    <div class="box" :style="{ width: '400px', height: '400px', backgroundColor: 'green' }"></div>
    <div class="box" :style="{ width: '400px', height: '400px', backgroundColor: 'red' }"></div>
  </div>
```

​		注意：设置属性的时候要使用单引号，然后对于复杂类型的数据来说可以使用带引号来表示其特殊，或者使用驼峰的方式来。

- **使用场景**：`:class`主要用于绑定CSS类，而`:style`主要用于绑定内联样式。
- **灵活性**：`:class`的值可以是动态的，可以根据Vue实例的数据动态地切换CSS类。而`:style`的值也是动态的，可以根据Vue实例的数据动态地切换内联样式。

### 2.3、v-model的其他表单元素

​		`v-model`是Vue.js框架中的一个指令，用于在表单输入和应用状态之间创建双向数据绑定。除了`<input>`元素，`v-model`还可以用于其他一些表单元素，包括`<textarea>`、`<select>`和`<checkbox>`。

```html
<div id="app">
    <h3>小黑学习网</h3>
    姓名：
    <input type="text" v-model="username">
    <br><br>
    是否单身：
    <input type="checkbox" v-model="isSingle">
    <br><br>
    <!-- 
      前置理解：
        1. name:  给单选框加上 name 属性 可以分组 → 同一组互相会互斥
        2. value: 给单选框加上 value 属性，用于提交给后台的数据
      结合 Vue 使用 → v-model
    -->
    性别:
    <input v-model="gender" type="radio" name="gender" value="1">男
    <input v-model="gender" type="radio" name="gender" value="0">女
    <br><br>
    <!-- 
      前置理解：
        1. option 需要设置 value 值，提交给后台
        2. select 的 value 值，关联了选中的 option 的 value 值
      结合 Vue 使用 → v-model
    -->
    所在城市:
    <select v-model="cityId">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">成都</option>
      <option value="104">南京</option>
    </select>
    <br><br>
    自我描述：
    <textarea v-model="desc"></textarea>
    <button>立即注册</button>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        username: '',
        isSingle: true,
        gender: '1',
        cityId: '102',
        desc: ""
      }
    })
  </script>
```

### 2.4、计算属性

​		计算属性（Computed Properties）是Vue.js中的一种特殊类型的属性，它可以基于其他属性计算得出。计算属性具有缓存特性，只有当依赖的属性发生变化时，计算属性才会重新计算。

​		计算属性的主要优点是它们可以简化模板中的逻辑，使模板更清晰易读。此外，由于计算属性具有缓存特性，当依赖的属性没有发生变化时，计算属性会直接返回缓存的结果，这可以提高应用的性能。

```js
new Vue({
  el: '#app',
  data: {
    firstName: 'John',
    lastName: 'Doe'
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  }
}) 
```

​		对于计算属性的使用的话，只能正向的读取，然后计算结果，但是对于改变后的结果应该有解析的能力。

```js
computed: {
        fullName: {
          get() {
            return this.lastName + this.firstName
          },
          set(value) {
            console.log(value);
            this.lastName = value.substring(0, 1);
            this.firstName = value.substring(1);
          }
        }
      },
      methods: {
        changeName() {
          console.log("dianji1");
          this.fullName = "张以德"
    }
}
```

### 2.5、watch监视器

​		在Vue.js中，`watch`是一个监视器，用于监听Vue实例的数据变化。当被监视的数据发生变化时，会触发指定的回调函数。`watch`主要用于响应数据的变化，从而执行一些操作，例如更新DOM、发送请求等。

```js
// 使用watch监视message的变化
watch: {
  message (newVal, oldVal) {
    console.log('message changed from', oldVal, 'to', newVal);
  },
  'obj.name' (newVal, oldVal) {
    console.log('message changed from', oldVal, 'to', newVal);
  },
}



```

复杂用法：

```js
watch: {
     obj: {
        deep: true, // 深度监视
        immediate: true, // 立刻执行，一进入页面handler就立刻执行一次
        handler (newValue) {
        	//业务逻辑
        }
      }
}

```

## 3、DAY3

### 3.1、生命周期

​		Vue 的生命周期指的是 Vue 实例从创建到销毁的一系列过程，包括创建、挂载、更新、销毁等阶段。在 Vue.js 中，钩子函数（Hook function）是 Vue 生命周期中的一些特殊函数，它们在 Vue 实例的生命周期的不同阶段被调用。这些函数可以让我们在 Vue 实例的生命周期中执行一些特定的操作。

1. beforeCreate 和 create：在实例被创建之后，数据观测和事件配置之前被调用。
2. beforeMount：在挂载开始之前被调用，相关的 render 函数首次被调用。
3. mounted：在实例被插入到 DOM 之后被调用，这时 Vue 实例已经准备好进行数据渲染和页面交互。
4. beforeUpdate 和 update：在数据更新之前和之后被调用，这时 Vue 实例的 DOM 已经更新。
5. beforeDestroy ：在实例销毁之前调用，这个钩子可以访问到 DOM 元素和数据。
6. destroy：在实例销毁之后调用，这个钩子不能访问到 DOM 元素和数据。

```html
<div id="app">
    <h3>{{ title }}</h3>
    <div>
      <button @click="count--">-</button>
      <span>{{ count }}</span>
      <button @click="count++">+</button>
    </div>
  </div>
  <script src="../JS/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        count: 100,
        title: '计数器'
      },
      /* 生命周期钩子 */
      beforeCreate() {
        console.log("响应式数据准备号之前！", this.count);
      },
      created() {
        /* 最早获取数据，然后赋值给响应式数据 */
        console.log("响应式数据准备好之后!", this.count);
      },
      beforeMount() {
        /* 也面里没有数据，想操作dom要等等 */
        console.log("模板渲染好之前", document.querySelector('h3').innerHTML);
      },
      mounted() {
        console.log("模板渲染之后", document.querySelector('h3').innerHTML);
      },
      beforeUpdate() {
        /* 修改数据的时候触发 */
        console.log('beforeUpdate 数据更新之前==》数据修改 视图没有更新',document.querySelector('span').innerHTML);
      },
      updated() {
        console.log('update 数据更新之后 数据修改 视图更新',document.querySelector('span').innerHTML);
      },
      beforeDestroy () {
        console.log('beforeDestroy, 卸载前')
        console.log('清除掉一些Vue以外的资源占用，定时器，延时器...')
      },
      destroyed () {
        console.log('destroyed，卸载后')
      }
    })
  </script>
```

### 3.2、工程化开发

vue项目的开发模式可以分为两种：

- 一种式基于html、css、js文件，然后导入核心的包，开发vue
- 工程化开发模式：基于构建工具，webpack的环境中开发vue项目

使用步骤：

```shell
1、全局安装
npm i @vue/cli -g

2、查看版本
vue --version

3、创建项目架子
vue create project-name

4、启动项目
npm sun serve
```

#### 3.2.1、目录结构

1. `src`目录：这是Vue项目的主要工作目录，包含了项目的源代码，包括Vue组件、JavaScript文件、样式文件等。在这个目录中，可能包含以下子目录和文件：
   - `assets`：用于存放项目中需要导入的静态资源，如图片、字体文件等。
   - `components`：用于存放Vue组件文件，通常按照功能或页面进行组织。
   - `views`：用于存放页面级别的Vue组件，通常每个组件对应一个路由页面。
   - `router`：用于存放Vue Router的配置文件。
   - `store`：用于存放Vuex状态管理的相关文件。
   - `App.vue`：Vue项目的根组件，通常包含整个应用的布局和路由视图。
   - `main.js`：Vue项目的入口文件，用于初始化Vue应用、导入全局样式和配置等2。
2. `public`目录：这个目录包含了不需要经过构建就可以直接使用的静态资源，如`index.html`、`favicon`等。通常用于放置一些不需要被webpack处理的文件2。
3. `config`目录：这个目录包含了项目配置，如开发环境变量、生产环境变量等3。
4. `mock`目录：这个目录用于存放本地模拟数据的目录，详见本地Mock方案说明1。
5. `test`目录：这个目录用于存放测试文件（unit&e2e），包括单元测试和端到端测试3。
6. `node_modules`目录：这个目录存放了项目的所有依赖包，由npm或yarn自动生成和管理6。
7. `.gitignore`文件：这个文件指定了哪些文件和目录不被包含在版本控制中6。
8. `babel.config.js`文件：这个文件是Babel配置文件，指定Babel的编译规则6。
9. `package.json`文件：这个文件是Node项目的清单文件，用于提供给如npm或yarn工具使用26。
10. `README.md`文件：这个文件是项目的说明文档，markdown格式5。
11. `vue.config.js`文件：这个文件是Vue CLI的配置文件，用于修改默认配置6。

### 3.3、组件化开发

​		组件化开发是一种前端开发方法，它将用户界面分解为独立、可重用的模块或组件。每个组件都包含自己的HTML、CSS和JavaScript，以及可能的其他资源。组件的设计目标是提供一种独立且封装良好的解决方案，可以在不同的页面和项目中重复使用，从而提高开发效率和减少代码冗余。

​		在实际项目中，组件应该具有高度的内聚性和低耦合性。这意味着每个组件应该只关注自己的功能，并且可以独立地进行测试和部署。设计良好的组件应该提供清晰的接口和文档，以便其他开发者可以轻松地集成和使用。

​		  在Vue.js中，组件化是一种开发方法，它将用户界面分解为独立、可重用的模块或组件。每个组件都包含自己的HTML、CSS和JavaScript，以及可能的其他资源。在Vue中，可以通过Vue.extend()方法创建组件，然后使用Vue.component()方法注册全局组件，或者在Vue实例的components配置项中注册局部组件。在使用组件时，需要在模板中通过标签名使用组件。

#### 3.3.1、普通组件

- 局部注册：只能再注册的组件内使用，创建一个vue文件，然后在使用组件内导入并注册创建.vue文件是在`components`中，然后再使用组件的文件中导入组件，并且局部注册。

```js
import { 组件对象 } from "./vue文件";
export default {
  components: {
    组件名: 组件对象
  },
};
```

​		注册完毕之后，可以直接将注册的组件当成html标签使用`<组件名></组件名>`，此外组件的命名规范要遵循大驼峰的命名法。

- 全局注册：在所有的组件内都能够使用，一旦注册成功，所有的组件都可以使用，注册的化要到main.js中进行全局注册。

```js
//导入核心包
import Vue from 'vue'
//导入根组件
import App from './App.vue'

/* 全局组件 */
import MyButton from './components/MyButton.vue'

//当前的环境  生产还是开发
Vue.config.productionTip = false

/* 全局注册 */
Vue.component('MyButton', MyButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
/* .$mount('#app')等价 el 挂载到页面中 */
```

vscode快捷键:

```
/* 所有都折叠 ctrl + k , ctrl + 0 */
/* 所有都展开 ctrl + k , ctrl + J */
```

## 4、DAY4

### 4.1、组件的样式冲突

​		在Vue中，当使用scoped属性给组件的style标签添加scoped属性时，其内部的CSS样式会作用于当前组件，而不会影响到其他组件。这是通过给HTML的DOM节点添加一个不重复的data属性来表示它的唯一值，然后在每句css选择器的末尾加一个当前组件的data属性选择器来私有化样式。如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性4。

​		但是，如果在组件中使用了第三方组件库（如Element Plus或Vant），并且需要修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染，可以采用样式穿透的方法。在Vue 2中，可以使用/deep/操作符，在Vue 3中，可以使用::v-deep伪类。这些操作符可以让你穿透组件的作用域，修改其内部元素的样式

```html
<template>
  <div>baseone</div>
</template>

<script>
export default {};
</script>

<style>
    div {
      border: 3px solid salmon;
      margin: 30px;
    }
</style>
```

只在baseone中设置了div标签样式，但是其他的div标签获得了同样的样式。

![image-20240725185332115](C:\Users\Doudouxia\AppData\Roaming\Typora\typora-user-images\image-20240725185332115.png)

### 4.2、data为一个函数

​		在Vue中，`data()`方法被定义成一个函数，而不是一个对象，是因为Vue的组件是可以复用的，如果`data()`返回的是一个对象，那么在每次创建一个新的组件实例时，对于同一个组件，Vue会共用同一个对象，这会导致新的组件实例不会拥有自己的响应式数据，而是会共用同一个响应式数据，这显然不是我们期望的结果。因此，Vue使用了函数来返回一个新的数据对象，这样每个组件实例都会拥有自己的响应式数据，不会互相影响。

​		说人话：对象的话多个组件公用一个，导致数据乱套，但是函数的话，一个个组件之间是相互隔离开的。

```js
export default {
  /*  */
  data() {
    return {
      count: 100,
    }
  },
}
```

### 4.3、组件之间通信

​		在Vue.js中，组件之间的通信方式有很多种，每种方式都有其特定的适用场景。以下是一些常见的Vue组件通信方式：

1. 父子组件通信：父组件可以通过props向子组件传递数据，子组件可以通过emit事件向父组件发送消息。
2. 兄弟组件通信：可以使用Event Bus或者Vuex。Event Bus通过创建一个中央事件总线，让兄弟组件通过监听和触发事件来实现通信。Vuex通过全局状态管理库Vuex，可以在任意组件之间共享状态。
3. 跨层级组件通信：Vue3提供了provide和inject API，使得跨层级组件通信变得简单。
4. 其他通信方式：Vue3对v-model进行了改进，现在可以在自定义组件上使用，实现双向绑定。此外，通过Teleport API可以将子组件的内容移动到DOM的另一部分，实现组件内容与逻辑的分离。

#### 4.3.1、父子间

```html
<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>
<script>
import Son from "./components/Son.vue";
export default {
  data() {
    return {
      myTitle: "你好呀狗屎！",
    };
  },
  components: {
    Son,
  },
  methods: {
    handleChange(newValue) {
      console.log(newValue);
      this.myTitle=newValue
    },
  },
};
</script>
<style>
</style>
```

```html
<template>
  <div class="son" style="border: 3px solid #000; margin: 10px">
    <!-- 3.直接使用props的值 -->
    我是Son组件{{ title }}

    <button @click="change">点击</button>
  </div>
</template>

<script>
export default {
  name: "Son-Child",
  // 2.通过props来接受
  props: ["title"],
  methods: {
    change() {
      /* 通过$emit去发送消息,通知父组件去修改数据
       */
      this.$emit('changeTitle',"你才是狗屎")
    },
  },
};
</script>
<style>
</style>
```

#### 4.3.2、prop是什么

​		组件上注册的一些自定义属性，向组件传递一些数据，不限制传递数据的数量和不限制传递数据类型。

```js
<template>
  <div class="app">
    <UserInfo
      :username="username"
      :age="age"
      :isSingle="isSingle"
      :car="car"
      :hobby="hobby"
    ></UserInfo>
  </div>
</template>

<script>
import UserInfo from "./components/UserInfo.vue";
export default {
  data() {
    return {
      username: "小帅",
      age: 28,
      isSingle: true,
      car: {
        brand: "宝马",
      },
      hobby: ["篮球", "足球", "羽毛球"],
    };
  },
  components: {
    UserInfo,
  },
};
</script>

<style>
</style>
```

```js
<template>
  <div class="userinfo">
    <h3>我是个人信息组件</h3>
    <div>姓名：{{ username }}</div>
    <div>年龄：{{ age }}</div>
    <div>是否单身：{{ isSingle?"是":"否" }}</div>
    <div>座驾：{{ car.brand }}</div>
    <div>兴趣爱好:{{ hobby.join(', ') }}</div>
  </div>
</template>

<script>
export default {
  props: ["username", "age", "isSingle", "car", "hobby"],
};
</script>

<style>
.userinfo {
  width: 300px;
  border: 3px solid #000;
  padding: 20px;
}
.userinfo > div {
  margin: 20px 10px;
}
</style>
```

##### 4.3.2.1、数据校验

​		组件之间通过prop来传递数据，也不是乱传递的，可以组件的prop指定验证要求，不符合要求的，控制台就会有错误提示。

- 类型校验
- 非空校验
- 默认值
- 自定义校验

```js
export default {
  // 1.基础写法（类型校验）
  /* props: {
    w: Number,//类型校验
  }, */

  // 2.完整写法（类型、是否必填、默认值、自定义校验）
  props: {
    w: {
      type: Number,
      required: true,
      default: 50,
      validator(value) {
        /* 对value进行数据处理 */
        return true; /* 处理判断 */
      },
    },
  },
};
```

#### 4.3.3、data和prop的区别

​		虽然说他们都可以为组件提供数据，但是data的数据是自己的然后它可以随便改动，prop的话数据是外部传递过来的，不能直接改动，要遵循**单项数据流**。

#### 4.3.4、非父子间的通信

##### 4.3.4.1、事件总线

​		在Vue中，非父子组件间的通信可以通过中央事件总线（event Bus）实现，这种方法不使用props和Vuex，它是实现非父子组件通信的一种解决方案。其原理是创建一个Vue实例，通过一个空的Vue实例作为桥梁实现Vue组件间的通信。

**事件总线：**

```js
import Vue from 'vue'

const Bus  =  new Vue()

export default Bus
```

**消息发送端：**

```html
<template>
  <div class="base-b">
    <div>我是B组件（发布方）</div>
    <button @click="sendMsgFn">发送消息</button>
  </div>
</template>

<script>
//这里导入事件总线中
import Bus from '../utils/EventBus'

export default {
  methods: {
    sendMsgFn() {
      //发送消息
      Bus.$emit('sendMsg', '今天天气不错，适合旅游')
    },
  },
}
</script>
```

**消息接收端：**

```html
<template>
  <div class="base-a">
    我是A组件（接受方）
    <p>{{msg}}</p>  
  </div>
</template>

<script>
import Bus from '../utils/EventBus'
export default {
  data() {
    return {
      msg: '',
    }
  },
  created() {
    Bus.$on('sendMsg', (msg) => {
      this.msg = msg
    })
  },
}
</script>

```

##### 4.3.4.2、provide和inject（跨层级）

​		在Vue中，provide和inject是一种实现跨层级组件通信的方式。这种方式主要用于父组件与子组件之间跨多层级进行通信。

​		provide是一个返回对象的选项，可以在祖先组件中定义，返回的对象中的属性可以在所有子孙组件的inject选项中接收。

```js
// 祖先组件
export default {
  provide: {
    name: 'Vue',
    car：{
    	color："green",
    	price:1000
    }
  },
  // ...
}
```

​		inject是一个数组或对象，可以在子孙组件中定义，用于接收祖先组件通过provide选项提供的属性。

```js
// 子孙组件
export default {
  inject: ['name'],
  mounted() {
    console.log(this.name);  // 输出 'Vue'
  }
  // ...
}

```

​		这种方式可以实现跨多个层级组件的通信，但需要注意的是，provide和inject并不是响应式的，如果在组件内部的数据发生变化时，需要通过其他方式（如事件总线）来通知子孙组件更新数据。

注意：简单数据类型的话不是响应式的，但是对于复杂数据类型的话是响应式的！

### 4.4、v-model原理

​		我们都知道，`v-model`可以双向绑定，就是视图变<==>数据变，`:属性`呐只是对数据进行渲染，但是没有对数据的双向绑定。

```html
<input type="text" v-model="msg1">

<input type="text" :value="msg2">  这个要想达到上面的效果，还要加一些东西

<input type="text" :value="msg2" @input="msg2 = $event.target.value">

```

​		是这样的，父传递一个数据给子，然后子现在向修改这个数据，但是子无法在使用v-model去对数据进行双向的数据绑定，那么对于这种数据跨组件的传递后如何进行双向的绑定？

#### 4.4.1、原始双向

父组件：

```html
<template>
  <div class="app">
  //这里就是双向绑定咯！！！ 你改我也改 我改你也要改
    <BaseSelect :cityId="selectId" @changeCity="selectId = $event"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(value) {
      this.selectId = value;
      //和上面的写法实现的功能一致
    },
  },
};
</script>

<style>
</style>
```

子组件：

```html
<template>
  <div>
    <select :value="cityId" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    cityId: String,
  },
  methods:{
    handleChange(e){
      /* 获取事件触发的事件源 */
      this.$emit('changeCity',e.target.value)
    }
  }
};
</script>

<style>
</style>
```

这里实现起来数据双向其实还是比骄傲复杂的，那么有没有简化的方式去实现呐

#### 4.4.2、简化双向

父组件：

```
<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>
```

子组件：

```html
<template>
  <div>
    <select :value="value" @change="handleChange">
      <option value="101">北京</option>
      <option value="102">上海</option>
      <option value="103">武汉</option>
      <option value="104">广州</option>
      <option value="105">深圳</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleChange(e) {
      /* 获取事件触发的事件源 */
      this.$emit("input", e.target.value);
    },
  },
};
</script>
```

#### 4.4.3、sync修饰符

父组件:

```html
<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- isShow.sync  => :isShow="isShow" @update:isShow="isShow=$event" -->
    <BaseDialog :isShow.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
      // console.log(document.querySelectorAll('.box')); 
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>
```

子组件：

```html
<!--
 * @Author: 宋之树 2334304096@qq.com
 * @Date: 2024-07-26 17:51:25
 * @LastEditors: 宋之树 2334304096@qq.com
 * @LastEditTime: 2024-07-26 17:54:10
 * @FilePath: \Vue\day04\vue-project\src\components\BaseDialog.vue
 * @Description: 
-->
<template>
  <div class="base-dialog-wrap" v-show="isShow">
    <div class="base-dialog">
      <div class="title">
        <h3>温馨提示：</h3>
        <button class="close" @click="closeDialog">x</button>
      </div>
      <div class="content">
        <p>你确认要退出本系统么？</p>
      </div>
      <div class="footer">
        <button @click="closeDialog">确认</button>
        <button @click="closeDialog">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: Boolean,
  },
  methods:{
    closeDialog(){
      this.$emit('update:isShow',false)
    }
  }
}
</script>

<style scoped>
.base-dialog-wrap {
  width: 300px;
  height: 200px;
  box-shadow: 2px 2px 2px 2px #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 10px;
}
.base-dialog .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
}
.base-dialog .content {
  margin-top: 38px;
}
.base-dialog .title .close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  line-height: 10px;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
}
.footer button {
  width: 80px;
  height: 40px;
}
.footer button:nth-child(1) {
  margin-right: 10px;
  cursor: pointer;
}
</style>
```

### 4.5、ref和$refs

​		`ref` 是 Vue.js 中的一个特殊属性，用于创建一个对一个 DOM 元素的引用。当你需要在 Vue 实例中访问一个 DOM 元素时，可以使用 `ref`。`ref` 的值是一个字符串，用于标识该 DOM 元素。

```html
<template>
  <div>
    <input ref="myInput" type="text" />
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$refs.myInput.value);
    },
  },
};
</script>
```

​		在这个例子中，我们为 `input` 元素添加了一个 `ref` 属性，值为 `myInput`。然后，在 `handleClick` 方法中，我们可以通过 `this.$refs.myInput` 访问该 `input` 元素。

​		为什么要引入这个概念呐，是这样的我们之前操作dom，一般是使用功能querySelector到整个页面范围内去查找所需要的元素，但是用了Vue后，我们的页面是组件化的，为了查找更加准确，我们的查找范围可以限定在当前的组建中。

​		当然ref不光是可以可以标记标签，还可以标记组件，然后或者组件对象实例后可以访问到一系列的数据，实例中的数据，方法等等。

**父组件：**

```html
<template>
  <div class="app">
    <h4>父组件</h4>
    <BaseForm ref="baseForm"></BaseForm>
    <button @click="getFormData">获取数据</button>
    <button @click="resetFormData">重置数据</button>
  </div>
</template>
<script>
import BaseForm from "./components/BaseForm.vue";
export default {
  components: {
    BaseForm,
  },
  methods: {
    getFormData() {
      this.$refs.baseForm.getData();
    },
    resetFormData() {
      this.$refs.baseForm.resetData();
    },
  },
};
</script>
```

**子组件：**

```html
<template>
  <div class="app">
    <div>
      账号: <input v-model="username" type="text">
    </div>
     <div>
      密码: <input v-model="password" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: '123456',
    }
  },
  methods: {
    getData() {
      console.log('获取表单数据', this.username, this.password);
    },
    resetData() {
      this.username = ''
      this.password = ''
    },
  }
}
</script>

<style scoped>
.app {
  border: 2px solid #ccc;
  padding: 10px;
}
.app div{
  margin: 10px 0;
}
.app div button{
  margin-right: 8px;
}
</style>
```

### 4.6、$nextTick

​		$nextTick 是 Vue.js 中的一个方法，它是一个异步函数，用于在下一次 DOM 更新循环结束之后执行延迟回调。在 Vue.js 中，当你更改了一些数据，例如更新了某个 DOM 元素的属性或样式，然后希望在这个元素更新后执行一些操作，这时就可以使用 $nextTick。

​	这是因为 Vue.js 的响应式系统会在数据更改后更新 DOM，但是如果你在数据更改后立即执行一个依赖于 DOM 的操作，可能会因为 DOM 还没有更新而出现错误。

```html
<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input ref="inp" type="text" v-model="editValue" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大标题",
      isShowEdit: false,
      editValue: "",
    };
  },
  methods: {
    handleEdit() {
      this.isShowEdit = true;
      
      this.$nextTick(()=>{
        this.$refs.inp.focus();
      })

    },
  },
};
</script>
```

## 5、DAY5

### 5.1、自定义指令

​	Vue.js 中的自定义指令是指在 Vue 实例的 `directives` 对象中定义的指令。指令是一种特殊类型的 DOM 属性，它可以让你在 Vue 模板中更灵活地操作 DOM。

​	要创建一个自定义指令，你需要在 Vue 实例的 `directives` 对象中定义一个属性，该属性的值是一个对象，其中包含两个方法：`bind` 和 `inserted`。`bind` 方法在指令第一次绑定到元素时调用，`inserted` 方法在元素插入父节点时调用。

全局注册:

```
//全局注册指令
Vue.directive('focus',{
  //当绑定的元素添加到页面的时候会触发inserted函数
  inserted(el){
    console.log(el);
    el.focus()
  }
})
```

局部注册：

```
directives:{
//指令名 指令的配置项
focus:{
  inserted(el){
    el.focus()
  }
}
},
```

自定定义指令传递值：

```html
<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      color1: 'red',
      color2: 'orange'
    }
  },
  directives: {
    color: {
      // 1. inserted 提供的是元素被添加到页面中时的逻辑
      inserted (el, binding) {
        // console.log(el, binding.value);
        // binding.value 就是指令的值
        el.style.color = binding.value
      },
      // 2. update 指令的值修改的时候触发，提供值变化后，dom更新的逻辑
      update (el, binding) {
        console.log('指令的值修改了');
        el.style.color = binding.value
      }
    }
  }
}
</script>
<style>

</style>
```

​		上面的这种方式，可以实现don元素添加的时候，去对dom元素进行操作，但是对于数据传递的化，只能是单向的，要想双向，那么就要监听元素数据是变化。

### 5.2、插槽

​		插槽（Slots）是 Vue.js 中的一个特性，它允许你在父组件中为子组件提供默认的内容。插槽允许你在父组件中定义一段模板，然后子组件可以根据需要决定如何使用这个模板。

​		在 Vue.js 2.x 中，插槽主要通过 `<slot>` 标签实现。在父组件中，你可以使用 `<slot>` 标签来定义一段模板，然后子组件可以通过 `<slot>` 标签来决定如何使用这个模板。

​		例如，假设你有两个组件：`parent.vue` 和 `child.vue`。`parent.vue` 中有一个 `<slot>` 标签，`child.vue` 中也有一个 `<slot>` 标签。当 `child.vue` 被渲染到 `parent.vue` 中时，`parent.vue` 中的 `<slot>` 标签会被替换为 `child.vue` 中的内容。

```html
<!-- parent.vue -->
<template>
  <div>
    <slot>
      这是默认内容
    </slot>
  </div>
</template>
```

```html
<!-- child.vue -->
<template>
  <div>
    <slot>
      这是子组件的内容
    </slot>
  </div>
</template>
```

在这个例子中，当 `child.vue` 被渲染到 `parent.vue` 中时，`parent.vue` 中的 `<slot>` 标签会被替换为 `child.vue` 中的 `<slot>` 标签的内容，即 `这是子组件的内容`。

#### 5.2.1、插槽后备内容

​		什么是后备内容，就是设置一个默认值，如果没有传递数据，那么这时候就可以显示插槽默认的数据。用户体验相对友好。

#### 5.2.2、具名插槽

​		当我们需要设置的内容比较复杂，就是比较定制化的时候，之前一个萝卜一个坑的情况已经不存在了，现在就是很多个萝卜很多个坑。所以就要使用到具名插槽，拿着身份证去找对应的坑。

```html
<template>
  <div>
    <MyDialog>
      <template v-slot:head>
        <div>
          <h3>友情提示</h3>
          <span class="close">✖️</span>
        </div>
      </template>
      <template v-slot:content> </template>
      <template v-slot:footer>
        <button>确认</button>
      </template>
    </MyDialog>
  </div>
</template>
```

```html
<template>
  <div class="dialog">
    <div class="dialog-header">
        <slot name="head"></slot>
    </div>

    <div class="dialog-content">
      <!-- 1. 在需要定制的位置，使用slot占位 -->
      <slot name="content"> 我是默认值</slot>
    </div>
    <div class="dialog-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
```

#### 5.2.3、作用域插槽

​		是这样的，定义插槽的时候是可以传值的，给插槽上可以绑定数据，将来组件可以使用，比如表格数据组件。

```html
<template>
  <table class="my-table">
    <thead>
      <tr>
        <th>序号</th>
        <th>姓名</th>
        <th>年纪</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item.id">
        <td>{{ index+1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>
          <!-- 插槽 -->
           <slot :row="item" msg="车市" name="btn"> </slot>
           <!-- 相当于传递参数 
           {
              row:itme,
              msg:'测试数据'
           } -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
```

```html
<template>
  <div>
    <MyTable :data="list">
      <template #btn="obj">
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>

    <MyTable :data="list2">
      <template #btn="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "./components/MyTable.vue";
export default {
  data() {
    return {
      list: [
        { id: 1, name: "张小花", age: 18 },
        { id: 2, name: "孙大明", age: 19 },
        { id: 3, name: "刘德忠", age: 17 },
      ],
      list2: [
        { id: 1, name: "赵小云", age: 18 },
        { id: 2, name: "刘蓓蓓", age: 19 },
        { id: 3, name: "姜肖泰", age: 17 },
      ],
    };
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      console.log("点击删除" + id);
      this.list = this.list.filter((item) => item.id !== id);
    },
    show(row) {
      console.log(row);
    },
  },
};
</script>

```

## 6、DAY6

### 6.1、单页应用

​		单页应用（Single-page Application，SPA）是一种基于Web的现代应用程序，它将整个应用程序加载到一个HTML页面中，然后通过JavaScript动态地更新页面内容。这种应用程序通常具有以下特点：

1. 响应式设计：单页应用通常采用响应式设计，可以在不同设备和浏览器中正常显示。
2. 动态加载内容：单页应用通过JavaScript动态地加载和显示内容，这使得用户在浏览过程中不需要重新加载整个页面。
3. 状态管理：单页应用通常使用客户端状态管理库（如React、Vue.js等）来管理应用程序的状态。这使得应用程序可以在不刷新页面的情况下更新状态。
4. 路由：单页应用通常使用路由库（如React Router、Vue Router等）来管理页面导航。这使得用户可以在不刷新页面的情况下导航到不同的页面。
5. 性能优化：单页应用通常采用性能优化技术，如代码分割、懒加载等，以提高应用程序的性能。

### 6.2、路由

​		vue中的路由，就是组件和路径之间的映射关系，传统意义上的路由是一种映射关系。Vue Router 是 Vue.js 官方的路由管理器。它用于构建单页面应用的应用程序内部路由。下面是一些关于 Vue Router 的基本信息：

1. 安装：

   使用 npm 或 yarn 安装 Vue Router：

   ```
   npm install vue-router
   ```

1. 基本使用：

   在你的 Vue 项目中创建一个名为 `router.js` 的文件。在这个文件中，你需要导入 Vue 和 Vue Router，然后使用 Vue Router 的方法来配置路由。

   ```js
   import Vue from 'vue';
   import Router from 'vue-router';
   
   Vue.use(Router);
   
   export default new Router({
     mode: 'history',
     routes: [
       {
         path: '/',
         name: 'home',
         component: () => import('@/components/Home.vue')
       },
       {
         path: '/about',
         name: 'about',
         component: () => import('@/components/About.vue')
       }
     ]
   });
   ```

   在 `main.js` 文件中，你需要导入 `router.js` 文件，并将其添加到 Vue 实例中。

   ```js
   import Vue from 'vue';
   import App from './App.vue';
   import router from './router';
   
   Vue.config.productionTip = false;
   
   new Vue({
     router,
     render: h => h(App),
   }).$mount('#app');
   ```

2. 路由视图：

   在 `App.vue` 或其他父组件中，你可以使用 `<router-view>` 组件来显示当前路由对应的组件。

   ```html
   <template>
     <div id="app">
       <router-view></router-view>
     </div>
   </template>
   ```

3. 导航：

   在 Vue 组件中，你可以使用 `<router-link>` 组件来创建导航链接。

   ```html
   <nav>
     <router-link to="/">Home</router-link>
     <router-link to="/about">About</router-link>
   </nav>
   ```

   你也可以在组件的 `<script>` 标签中使用 `this.$router` 对象来导航到其他路由。

   ```
   this.$router.push('/about');
   ```

这就是 Vue Router 的基本用法。

#### 6.2.1、router-link

​		在 Vue.js 中，`router-link` 是用于导航的组件。当用户点击某个链接时，`router-link` 会触发导航到新的页面。在 Vue Router 中，可以通过添加 `router-link-active` 类名来标记当前激活的链接。其实本质上是和a标签是没有什么区别的。

```html
<router-link to="/find">发现音乐</router-link>
<router-link to="/my">我的音乐</router-link>
<router-link to="/friend">朋友</router-link>
```

当转换为这个的时候，打开f12后观察页面元素：

```
router-link-exact-active
router-link-active
```

​		那么问题来啦。这两个有什么区别吗，第一个是精准匹配，`to="my"`就只能匹配my，但是第二个就不是了，他可以匹配`/my`、`/my/a`、`/my/b`等等。桥豆麻袋那只能叫上面的类名吗，不能自定义吗？自定义的话这样！

```js
const router = new VueRouter({
    routes: [
        { path: '/my', component: My },
        { path: '/friend', component: Friend },
        { path: '/find', component: Find },
    ],
    /* 一个精准 一个模糊匹配 */
    linkActiveClass:'自定义类名',
    linkExactActiveClass:'自定类名'
})
```

### 6.3、声明式导航跳转传参

#### 6.3.1、查询参数传参

传递值：

```
to="/path?参数名=值"
```

获取值：

```
$rout.query.参数名
```

#### 6.3.2、动态路由传参

配置：

```
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/search/:words', component: Search }
  ]
})
```

配置导航链接

```
to="/path/参数值"
```

获取数据

```
$route.params.参数名
```

总结：

​		对于查询参数来说比较适合需要传递多个参数的场景，对于动态路由传参来说，传递单个参数比较方便。

注意：使用动态路由参数去传递参数时，如果参数正常传递的话其是没有什么问题的，但是如果传递的参数是空值的话，那么会导致匹配不到组件，如何解决这个问题呐------在参数名之后添加一个问号就可以!

```
#匹配规则
path: '/search/:words?', component: Search
```

### 6.4、路由重定向

​		重定向是一种网页跳转的方式，是指用户在浏览网页时，网页会自动跳转到另一个网页。重定向通常用于用户登录后跳转到首页、用户访问一个不存在或需要跳转的页面时自动跳转到正确的页面等场景。

```
const router = new VueRouter({
  routes: [
  	/* 匹配规则  重定向的路径 */
  	{ path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:words', component: Search }
  ]
})
```

**404页面**

```
// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    /* 匹配规则  重定向的路径 */
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:words', component: Search },
    {
        path:'*',
        component: NotFound
    }
  ]
})
```

​		为什么要写在最后一个，没有发现页面，因为匹配路由从上往下，所以匹配到最后一个的时候，那么前面配置的路由规则一定不适用，大概率要访问的页面时不存在的。

### 6.5、路由-模式设置

在 Vue.js 中，路由模式主要有两种：`hash` 模式和 `history` 模式。

- `hash` 模式：路由通过 URL 的 `#` 符号进行分割，例如 `http://www.example.com/#/home`。`hash` 模式不改变 URL 的 `http` 协议部分，只改变 `#` 后面的部分，因此刷新页面不会重新发起请求。
- `history` 模式：路由通过 URL 的 `/` 进行分割，例如 `http://www.example.com/home`。`history` 模式会改变 URL 的整个协议部分，因此刷新页面会重新发起请求。

​		在 Vue.js 2.x 中，默认使用 `hash` 模式。从 Vue.js 3.x 开始，默认使用 `history` 模式。如果需要更改路由模式，可以在创建 `VueRouter` 实例时，通过 `mode` 属性进行设置：

```
const router = new VueRouter({
  	routes: [...],
    mode: 'history'
})
```

### 6.6、编程式导航

#### 6.6.1、路由跳转

通过路径：path

```
 goSearch(){
      //简写 
      //this.$router.push('/search')
      this.$router.push({
        path:'/search'
      })
 }
```

通过命名路由跳转：name

```
const router = new VueRouter({
  routes: [
    /* 匹配规则  重定向的路径 */
    { name: '/', path: '/', redirect: '/home' },
    { name: 'zhangsan', path: '/home', component: Home },
    { name: 'xiaoli', path: '/search/:words?', component: Search },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})


this.$router.push({
     name: 'xiaoli'
})
```

#### 6.6.2、跳转传参

- path路径

**传参：**

```
#查询参数传参
this.$router.push('/search?name=xiaoli&age=18')

this.$router.push({
        path:'/search',
        query:{
          name:"xiaoli",
          age:20
     }
})

#动态参数传参
this.$router.push('/search/xiaoli')
```

**接收：**和之前的声明式传参接收一样

```
$route.query.参数名

$route.params.参数名
```

- name路径

**传参：**

```
#查询参数传参
this.$router.push({
        name:'路由规则名',
        query:{
          name:"xiaoli",
          age:20
     }
})

#动态参数传参
this.$router.push({
        name:'路由规则名',
        params:{
          name:"xiaoli",
        }
})
```

