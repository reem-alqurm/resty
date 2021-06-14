import React from 'react';
import Footer from './Footer';
import JSONPretty from 'react-json-pretty';


class Result extends React.Component {

  
        render() {
            return(
           <>
                         <div id ="mainp"> <JSONPretty id="json-pretty" data={this.props.results.headers}></JSONPretty> 
                          <JSONPretty id="json-pretty" data={this.props.results.data}></JSONPretty></div> 

                          <Footer/> 
    
           </>
        )
    }
}

export default Result;