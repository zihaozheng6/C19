import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        description:'',
        keyword:'',
        commitment:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleInput3 = this.handleInput3.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        description:'',
        keyword:'',
        commitment:'',
        key:''
      }
    })
    }
  }
  handleInput(e){
    let val=e.target.value;
    let val2 = Date.now();
    let data = Object.assign({}, this.state.currentItem, { text: val ,key: val2})
    this.setState({
      currentItem: data
    })
  }
  handleInput1(e){
    let val=e.target.value;
    let data = Object.assign({}, this.state.currentItem, { description: val })
    this.setState({
      currentItem: data
    })
  }
  handleInput2(e){
    let val=e.target.value;
    let data = Object.assign({}, this.state.currentItem, { commitment: val })
    this.setState({
      currentItem: data 
    })
  }
  handleInput3(e){
    let val=e.target.value;
    let data = Object.assign({}, this.state.currentItem, { keyword: val })
    this.setState({
      currentItem: data 
    })
  }
  deleteItem(key){
    const filteredItems= this.state.items.filter(item =>
      item.key!==key);
    this.setState({
      items: filteredItems
    })

  }
  setUpdate(text,key){
    console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map(item=>{      
      if(item.key===key){
        console.log(item.key +"    "+key)
        item.text= text;
      }
    })
    this.setState({
      items: items
    })
    
   
  }
 render(){
  return (
    <div className="App">
      <header>
        <h1> Please post the job here </h1>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter title" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <input type="text" placeholder="Enter description" value= {this.state.currentItem.description} onChange={this.handleInput1}></input>
          <input type="text" placeholder="Enter commitment" value= {this.state.currentItem.commitment} onChange={this.handleInput2}></input>
          <input type="text" placeholder="Enter keyword" value= {this.state.currentItem.keyword} onChange={this.handleInput3}></input>
          <button type="submit">Add</button>
        </form>
        <h2> Here is the list of jobs: </h2>
        <p>{this.state.items.text}</p>
        
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        
      </header>
    </div>
  );
 }
}


export default App;
