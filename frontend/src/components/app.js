import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./homepage";
export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return (<h1>{this.props.name}'s first React code <Homepage></Homepage></h1>)
    }
}
const appDiv= document.getElementById('app')
render (<App name="VAKU"/>, appDiv)