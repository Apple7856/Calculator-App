import React, { Component } from "react";
import './history.css';

class History extends Component {

    render() {
        return (
            <div className="history-container">
                <div className="btn-container">
                    <button className="btn-history show" style={this.props.updown ? {display:"none"} : {display:"block"}} onClick={() => this.props.showData()}>Show History</button>
                    <button className="btn-history show" style={this.props.updown ? {display:"block"} : {display:"none"}} onClick={() => this.props.hideData()}>Hide History</button>
                    <button className="btn-history clear" onClick={() => this.props.clearData()}>Clear History</button>
                </div>
                <div className="history">
                    <div className="main-history">
                        {
                                this.props.items.split(",").map((item, i) => (
                                    <p className="para" style={this.props.updown ? { display: "block" } : { display: "none" }} key={i}>{item}</p>
                                ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default History;