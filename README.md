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

```
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

```
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

