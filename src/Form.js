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
  
    // addurl = e => {
    //     e.preventDefault();
    //     const url = e.target.url.value;
    //     const method = e.target.method.value;
    //     const newState = {url : url , method : method};
    //     this.setstate(newState);
    // }
    handleSubmit = async e => {
      e.preventDefault();

      await this.setState({
        urls: e.target.url.value, 
        methods: e.target.method.value
      });
  
      this.props.updateResults({...this.state});
      // this.props.updateResults(data, headers, e.target);

      // this.props.handler(data);
  }

  // changeMethod = (e) => {
  //   e.preventDefault();
  //   this.setState({ method: e.target.value });
  // };

  render() {
    return (
      <section className="App-form">
        <form onSubmit={this.handleSubmit}>
          <label>URL:</label>
          <input id="input-text" name="url" type='text' />
          <button type="submit">GO!</button>
          <div id="rest-buttons">
            <div className="method-buttons">
              <label>
                <input name="method" type="radio" value="GET" />
                GET
              </label>
              <label>
                <input name="method" type="radio" value="POST" />
               POST
              </label>
              <label>
                <input name="method" type="radio" value="PUT" />
                PUT
              </label>
              <label>
                <input  name="method" type="radio" value="DELETE" />
               DELETE
              </label>
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default Form;
