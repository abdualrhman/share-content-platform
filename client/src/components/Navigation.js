import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css'


 export default class Navigation extends React.Component{

   constructor(props){
     const newPath = window.location.pathname.substr(1);
     super(props)
     this.state={
       class: newPath
     }
     this.clickHandler=this.clickHandler.bind(this)
   }
   clickHandler(e){
     console.log(e.target.name)
     this.setState({
       class : e.target.name
     }, ()=>{window.location.href = `/${this.state.class}`;})
   }
  render(){
    return(
        <div>
        <nav className="navbar navbar-expand-lg brand">
        <a className="navbar-brand" href="bla">Navbar</a>
        <ul className='' >
        <div className='nav-link-container'>
        <a className={this.state.class=== 'add-contents' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='add-contents'>add contents</a>
        <a className={this.state.class=== 'categories' ? 'active nav-item' : 'nav-item'}  onClick={this.clickHandler} name='categories'>categories</a>
        <a className={this.state.class=== 'about' ? 'active  nav-item' : 'nav-item'}  onClick={this.clickHandler} name='about'>about</a>
        </div>
        </ul>
        </nav>
        {console.log(window.location.pathname )}
        </div>
    );
  }
};
// <a className='' onClick={this.clickHandler}>bla2</a>
// <a className='' onClick={this.clickHandler}>bla3</a>
