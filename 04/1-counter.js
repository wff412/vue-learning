Vue.component("my-counter",{
    //大多数属性同new Vue()
    //1. 定义可反复使用的组件的HTML片段模板
    template:`<div>
      <button @click="change(-1)">-</button>
      <span>{{count}}</span>
      <button @click="change(+1)">+</button>
    </div>`,
    //2. 定义data()函数，可返回一个新的数据对象
    data: function () {
      return {
        count: 0
      }
    },
    //3. 之后的内容和new Vue()中就完全一样了
    methods:{
      change(i){
        this.count+=i;
        this.count<0&&(this.count=0)
      }
    }
  })