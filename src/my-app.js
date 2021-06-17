import React from 'react';
import Form from './Form';
import Header from './Header';
import { If, Then, Else,When } from 'react-if';
import History from './History.js';
import Results from './Result';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './home-page.js';
import HelpPage from './help-page.js';
import HistoryPage from './history-page.js'; 

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
          initialPage: true,
          isDataVisible: false
         
        };
    }
    toggleMenu = () => {
      this.setState({ isDataVisible: !this.state.isDataVisible });
    }
    updateResults = async (userInput) => {
        this.setState({
          isLoading: true,
          urls: [this.state.urls, userInput.urls],
          methods: [this.state.methods, userInput.methods],
        })
    
        const request = await fetch(userInput.urls, {methods: userInput.methods });
        const data = await request.json();

        if (data) {
          this.toggleMenu();
        }
        //const headers = request.headers;
    
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
        let history = JSON.parse(localStorage.getItem('queryHistory')) || []; //in case there is nothing in the local storge
        this.setState({ history });
      }
    
      render() {
        return (
          <div className="App">
             <BrowserRouter>
          <Header />
          <Route exact path="/history" component={HistoryPage}>
            { /*<HistoryPage history={this.state.history} /> */}
            {/* <h1>History</h1>
            <History history={this.state.history} /> */}
          </Route>
          <Route exact path="/help" component={HelpPage}>
            {/* <h1>Help</h1> */}
          </Route>
          {/* <Route exact path="/">  */}
             {/* <h1>Home</h1> 
            { <Home data={this.state} /> }
             <Home /> 
           </Route>  */}

        </BrowserRouter>
          <div>
          </div>
          <Form updateResults={this.updateResults} />
          <main>
          <History history={this.state.history} />
          <When condition={!this.state.initial}>
            <If condition={this.state.isLoading}>
              <Then>
                <p>Loading...</p>
              </Then>
              <Else>
                <Results show={this.state.isDataVisible} data={this.state} />
              </Else>
            </If>
          </When>
          </main>
        
           
          </div>
        )
      }
}

export default App;