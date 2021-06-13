import React from 'react';
import './main.scss';

class Main extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        url : '',
        method: ''
      };
    }
  
    addurl = e => {
        e.preventDefault();
        const url = e.target.url.value;
        const method = e.target.method.value;
        const newState = {url : url , method : method};
        this.setstate(newState);
    }
  handelurl = e=>{
    e.preventDefault();

      this.setState({url : e.target.value})
  }
  changeMethod = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value });
  };

   
    render() {
      return (
          <div>
            <form>
          <label>URL :</label>
          <input onChange={this.handelurl}type="text" name="url" placeholder="http://reem.url.com"/>
          <button type="button" onClick={this.addUrl}>GO!</button> <br></br>
            <button value={`GET`} onClick={this.changeMethod}>GET</button>
            <button value={`POST`}onClick={this.changeMethod}> POST</button>
            <button value={`PUT`} onClick={this.changeMethod}>PUT</button>
            <button value={`DELETE`}onClick={this.changeMethod}> DELETE</button>
        </form>
             <section>
            <p id ="mainp"> {this.state.method} &nbsp;
            
            {this.state.url} </p>
            </section>
            
          </div>
      )
    }
  }
  
  export default Main;