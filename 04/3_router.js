var router=new VueRouter({
    mode:"hash",
    routes:[
        {path:"/",component:Index,name:"Index"},
        {path:"/details/:lid",component:Details,props:true},
        {path:"/products",component:Products},
        {path:"*",component:NotFound}
    ]
})

// //标识符
// 系统标识符
// 自定义标识符  变量，自定义的函数  形式参数   实参
// API application program interface
// function f(a,b){
//     var r,i;
// }
