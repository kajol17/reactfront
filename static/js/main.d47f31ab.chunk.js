(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,a){t.exports=a(55)},52:function(t,e,a){},55:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(21),l=a.n(r),c=a(14),i=a(5),s=a(6),u=a(8),d=a(7),p=a(9),m=a(58),h=a(57),f=a(56);var b={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},g={color:"#fff",textDecoration:"none"},v=function(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"TODOList"),o.a.createElement(f.a,{style:g,to:"/"},"Home"),"|",o.a.createElement(f.a,{style:g,to:"/about"},"About"))},E=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).itemStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.isDone?"line-through":"none"}},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.taskName;return o.a.createElement("div",{style:this.itemStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",checked:this.props.todo.isDone,onChange:this.props.markComplete.bind(this,e)})," ",a,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:y},"x")))}}]),e}(n.Component),y={background:"#ff0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},O=E,j=function(t){function e(){return Object(i.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props),this.props.todos.map(function(e){return o.a.createElement(O,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})})}}]),e}(n.Component),k=a(22),C=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:""},a.onSubmit=function(t){t.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a.onChange=function(t){return a.setState(Object(k.a)({},t.target.name,t.target.value))},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo..",required:"required",style:{flex:10,padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"Submit",defaultValue:"Submit",className:"btn",style:{flex:1}}))}}]),e}(n.Component);function x(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is TodoList app v1.0.0. It is amazing."))}var S=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(u.a)(this,Object(d.a)(e).call(this,t))).handleChange=function(t){a.setState({title:t.target.value}),a.props.onChange(t.target.value)},a.state={title:""},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"filter"},"Search "),o.a.createElement("input",{type:"text",id:"filter",value:this.state.title,onChange:this.handleChange}))}}]),e}(n.Component),T=a(11),D=a.n(T),w=(a(52),function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[],title:[]},a.markComplete=function(t){D.a.put("http://localhost:4003/api/update/task/".concat(t)).then(function(e){a.setState({todos:a.state.todos.map(function(e){return e.id===t&&(e.isDone=!e.isDone),e})})})},a.delTodo=function(t){D.a.delete("http://localhost:4003/api/delete/task/".concat(t)).then(function(e){a.setState({todos:Object(c.a)(a.state.todos.filter(function(e){return e.id!==t}))}),a.title("")})},a.addTodo=function(t){D.a.post("http://localhost:4003/api/add/task",{taskName:t}).then(function(e){var n={id:e.data.id,taskName:t,isDone:!1};a.setState({todos:[].concat(Object(c.a)(a.state.todos),[n])}),a.title("")})},a.title=function(t){a.setState({todos:a.state.todos,title:""===t?a.state.todos:a.state.todos.filter(function(e){return e.taskName.startsWith(t)})}),console.log(a.state.todos),console.log(a.state.title)},a}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;D.a.get("http://localhost:4003/api").then(function(e){return t.setState({todos:e.data,title:e.data})})}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(v,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{addTodo:t.addTodo}),o.a.createElement("br",null),o.a.createElement(S,{onChange:t.title}),o.a.createElement("br",null),o.a.createElement(j,{todos:t.state.title,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(h.a,{path:"/about",component:x}))))}}]),e}(n.Component));l.a.render(o.a.createElement(w,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.d47f31ab.chunk.js.map