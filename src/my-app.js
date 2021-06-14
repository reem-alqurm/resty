import React from 'react';
import Form from './Form';
import Header from './Header';

import Result from './Result';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data : [],
          headers: {},
            count: 0
        };
    }

    handleForm = (data, headers) => {
        this.setState({
          data: data.results,
           count:data.count,
           headers:headers
          });
    }

    render() {
        return (
            <>
             <Header/>
    
   
                <Form handler={this.handleForm}/>
                <Result results={this.state}/> 
            </>
        )
    }
}

export default App;