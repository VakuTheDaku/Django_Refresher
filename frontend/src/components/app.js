import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./homepage";
import CreateRoom from "./createroom";
import JoinRoom from "./roomjoin";
import { BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";
export default class App extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        return(
        <BrowserRouter>
           
            <Switch>
                <Route exact path="/" ><h1>{this.props.name}'s first React code</h1></Route>
                <Route path="/homepage" component={Homepage} />
                <Route path="/createroom" component={CreateRoom} />
                <Route path="/joinroom" component={JoinRoom} />
            </Switch>
        </BrowserRouter>
        );
    }
}
const appDiv= document.getElementById('app')
render (<App name="VAKU"/>, appDiv)