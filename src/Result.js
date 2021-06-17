import React from "react";
import Footer from "./Footer";
// import JSONPretty from "react-json-pretty";
import ReactJson from "react-json-view";

class Result extends React.Component {
  render() {
    console.log(this.props.data.headers);
    return (
      
      <>
        <div id="mainp">
          {/* <JSONPretty id="json-pretty" src={this.props} /> */}
          {/* <ReactJson id="json-pretty" src={this.props.results.headers} /> */}
          <ReactJson id="json-pretty" src={this.props.data.headers} />

          <ReactJson id="json-pretty" src={this.props} />


        </div>

        <Footer />
      </>
    );
  }
}

export default Result;
