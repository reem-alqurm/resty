import React from 'react';
import Form from './Form';
import Header from './Header';
import { If, Then, Else } from 'react-if';
import History from './History.js';
import Result from './Result';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data : {}, 
          body: [],
          headers: {},
          history: [],
          count: 0,
          isLoading: false,
         
        };
    }
    updateResults = async (userInput) => {
        this.setState({
          isLoading: true,
          urls: [this.state.urls, userInput.urls],
          methods: [this.state.methods, userInput.methods],
        })
    
        const request = await fetch(userInput.urls, {methods: userInput.methods });
        const data = await request.json();
        const headers = request.headers;
    
        let dataInstance = {
          url: userInput.urls,
          method: userInput.methods,
          body: data,
        }
    
        let updateHistory = [...this.state.history, dataInstance];
        localStorage.setItem('queryHistory', JSON.stringify(updateHistory));
    
        await this.setState({
          body: data,
          isLoading: false,
          history: updateHistory,
        })
      
      }
    
      componentDidMount() {
        let history = JSON.parse(localStorage.getItem('queryHistory')) || [];
        this.setState({ history });
      }
    
      render() {
        return (
          <div className="App">
            <Header />
            <div>
            </div>
            <Form updateResults={this.updateResults}/>
            <History history={this.state.history} />
            <If condition={this.state.isLoading}>
              <Then>
                <p>Loading...</p>
              </Then>
              <Else>
                <Result data={this.state}/>
              </Else>
            </If>
           
          </div>
        )
      }
}

export default App;