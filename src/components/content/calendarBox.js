import React, { Component } from 'react'

export default class CalendarBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
            color: "white"
        }

        this.handleTextUpdate = this.handleTextUpdate.bind(this)
        this.handleTextSubmit = this.handleTextSubmit.bind(this)
    }

    handleTextUpdate(event) {
        this.setState({ 
            text: event.target.value,
            color: "orangered" 
        })
    }

    handleTextSubmit() {
        console.log(`Sending data: ${this.state.text}`)
        this.setState({ color: "lightgreen" })
    }

    render() {
        return (
            <div className={`calendar-box ${this.props.inactive ? "overflow" : ""}`}>
                <div className="date">
                    {this.props.date}
                </div>

                <textarea 
                    disabled={this.props.inactive ? true : false} 
                    value={this.state.value}
                    onChange={this.handleTextUpdate}
                    onBlur={this.handleTextSubmit}
                    style={{backgroundColor: this.state.color}}
                ></textarea>
            </div>
        )
    }
}