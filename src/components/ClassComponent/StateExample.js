import React, {Component} from "react";
import EventFromProps from "./EventFromProps";

class StateExample extends Component
{
    constructor()
    {
        super();
        this.state = {
            Message : "Click the button"
        }
        this.buttonClickEvent = this.buttonClickEvent.bind(this);
    }
    buttonClickEvent(id)
    {
        let message = ''
        switch(id)
        {
            case 1:
                message = 'Button 1 Clicked';
                break;
            case 2:
                message = "Button 2 Clicked";
                break;
            default:
                message = "Other Button Clicked";
        }
        this.setState({
            Message : message
        })
    }

    GreetEvent()
    {
        alert(`Sample Test`);
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={this.buttonClickEvent(1)}>Button 1</button>
                <button onClick={this.buttonClickEvent(2)}>Button 2</button>
                <EventFromProps PropsEvent = {this.GreetEvent}/>
            </div>
        )
    }
}

export default StateExample;