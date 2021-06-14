import React from 'react';
import './form.scss';

class Form extends React.Component {
  
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
    handleSubmit = async e => {
      e.preventDefault();
      let raw = await fetch(e.target.url.value);
      let data = await raw.json();
      console.log('this is data from api', data);
      const header = raw.headers;
      console.log('this is data from api', header);

      this.props.handler(data, header);
  }

  changeMethod = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value });
  };

   
    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
          <label>URL :</label>
          <input onChange={this.handelurl}type="text" name="url" placeholder="http://reem.url.com"/>
          <button >GO!</button> <br></br>
            <button value={`GET`} onClick={this.changeMethod}>GET</button>
            <button value={`POST`}onClick={this.changeMethod}> POST</button>
            <button value={`PUT`} onClick={this.changeMethod}>PUT</button>
            <button value={`DELETE`}onClick={this.changeMethod}> DELETE</button>
        </form>
           
            
          </div>
      )
    }
  }

export default Form;
