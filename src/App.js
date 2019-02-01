import React, { Component } from 'react';
import{ BrowserRouter as Router,Route} from'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Filter from './components/Filter';
//import uuid from 'uuid';
import axios from 'axios';
import './App.css';


class App extends Component {
  state={
    todos:[],
    title:[]
  }
    
    /*todos:[
      {
        id:uuid.v4(),
        title:'Take out the trash',
        completed:false

      },
      {
        id:uuid.v4(),
        title:'Dinner with wife',
        completed:true

      },
      {
        id:uuid.v4(),
        title:'Meeting with boss',
        completed:false

      }
      
    ]*/
    /*componentWillMount() {
      this.setState({
        todos: this.todos,
        title: this.todos
      })
    }*/
  
    componentDidMount()
    {
      //axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      //.then(res=>console.log(res.data))
     // axios.get('http://localhost:4003/api')
     //axios.get(`https://cors-anywhere.herokuapp.com/http://todoapi-api-todo-list.1d35.starter-us-east-1.openshiftapps.com/api`)
     axios.get(`https://reactapitodo.herokuapp.com/api`)
      .then(res=>this.setState({todos:res.data,
      title : res.data }))
    }
  
  //toggle complete
  markComplete=(id)=>{
    //console.log(id)
    //axios.put(`http://localhost:4003/api/update/task/${id}`) 

    axios.put(`https://reactapitodo.herokuapp.com/api/update/task/${id}`)
    //axios.put(`https://cors-anywhere.herokuapp.com/http://todoapi-api-todo-list.1d35.starter-us-east-1.openshiftapps.com/api/update/task/${id}`)
     .then(res=> {
      this.setState({todos:this.state.todos.map(todo=>{
        if(todo.id===id)
        {
          todo.isDone=!todo.isDone 
        }
        return todo;
      })
        });
     })

  }
  //delete todo
  /*delTodo=(id)=>{
    //console.log(id)
      this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
  }*/
  delTodo=(id)=>{
   // axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
  // axios.delete(`http://localhost:4003/api/delete/task/${id}`)
   //axios.delete(`https://cors-anywhere.herokuapp.com/http://todoapi-api-todo-list.1d35.starter-us-east-1.openshiftapps.com/api/delete/task/${id}`)
   axios.delete(`https://reactapitodo.herokuapp.com/api/delete/task/${id}`)
    
   .then(res=>{
        this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]});
        this.title("");

      })
  }
  //add todo
  /*addTodo=(title)=>
  {
    //console.log(title);
    /*const newTodo={
      id:uuid.v4(),
      title,
      completed:false
    }
    axios.post('https://jsonplaceholder.typicode.com/todos'{
      title,
      completed:false
    });
    this.setState({todos:[...this.state.todos,newTodo]});
}*/
addTodo=(title)=>
  {
    //axios.post('https://jsonplaceholder.typicode.com/todos',{
      //axios.post('http://localhost:4003/api/add/task',{
        //axios.post(`https://cors-anywhere.herokuapp.com/http://todoapi-api-todo-list.1d35.starter-us-east-1.openshiftapps.com/api/add/task`,{
          axios.post(`https://reactapitodo.herokuapp.com/api/add/task`,{
        taskName : title
    })
    .then(
      
      res=> {
        const newTodo={
          id: res.data.id,
          taskName : title,
          isDone:false
        }
        this.setState({todos:[...this.state.todos,newTodo]})
        this.title("");
    
      });
}

title = (query) => {
  this.setState({
    todos:this.state.todos,
    title: query === "" ? this.state.todos : this.state.todos.filter((todo) => {
      return todo.taskName.startsWith(query);
    })
  })

  console.log(this.state.todos);
  console.log(this.state.title);
}


  render() {
    //console.log(this.state.todos)
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <div className="container">
        <Header/>
        <Route exact path="/" render={ props=>(
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <br/>
            <Filter onChange={this.title}/>
            <br/>
           <Todos todos={this.state.title} markComplete={this.markComplete} delTodo={this.delTodo}  />
          </React.Fragment>
        )}/>
        <Route path="/about" component={About}/>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
