import React, { Component } from 'react';
import History from '../history/History';
import './calculater.css'

class Calculater extends Component {
    constructor() {
        super();
        this.state = {
            data: "",
            result: "",
            value1: "",
            value2: "",
            operator: "",
            user: false,
            history: [],
            updown: false,
            items: "",
            historyStatus: true
        }
    }

    getValue(x) {
        if (!this.state.user) {
            this.setState({ data: this.state.data + x });
            if (Number.isInteger(parseInt(x)) || "." === x) {
                if (this.state.operator === "") {
                    this.setState({ value1: this.state.value1 + x });
                } else {
                    this.setState({ value2: this.state.value2 + x });
                }
            }
            if (!Number.isInteger(parseInt(x)) && "." !== x) {
                this.setState({ operator: x });
            }
        }
    }

    getClear() {
        this.setState({ data: "" });
        this.setState({ value1: "" });
        this.setState({ value2: "" });
        this.setState({ operator: "" });
        document.getElementById("result").style.display = "none";
        this.setState({ user: false });
    }

    getBack() {
        if (!this.state.user) {
            if (this.state.data) {
                this.setState({ data: this.state.data.slice(0, -1) });
            }
        }
    }

    componentDidMount() {
        if (localStorage.getItem("data")) {
            let localDa = localStorage.getItem("data");
            this.setState({ history: [...this.state.history, localDa] });
        }
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.value1 !== this.state.value1) {
            console.log("value1 = "+this.state.value1);
        }
        if (previousState.value2 !== this.state.value2) {
            console.log("value2 = "+this.state.value2);
        }
        if (previousState.operator !== this.state.operator) {
            console.log("operator = "+this.state.operator);
        }
        if (previousState.result !== this.state.result) {
            this.setState({ history: [...this.state.history, `${this.state.data}=${this.state.result}`] });
        }
        if (previousState.history !== this.state.history) {
            console.log("store data x");
            localStorage.setItem("data", this.state.history);
        }
        if (previousState.user !== this.state.user) {
            this.setState({ value2: "" });
            this.setState({ operator: "" });
        }
        if (previousState.historyStatus !== this.state.historyStatus) {
            console.log("remove data");
            this.setState({ history: [] });
            this.setState({ historyStatus: true });
        }

    }

    getResult() {
        if (this.state.value1 && this.state.value2 && !this.state.user) {
            if (this.state.operator === "%") {
                this.setState({ result: parseFloat(this.state.value1) % parseFloat(this.state.value2) });
            } else if (this.state.operator === "/") {
                this.setState({ result: parseFloat(this.state.value1) / parseFloat(this.state.value2) });
            } else if (this.state.operator === "*") {
                this.setState({ result: parseFloat(this.state.value1) * parseFloat(this.state.value2) });
            } else if (this.state.operator === "-") {
                this.setState({ result: parseFloat(this.state.value1) - parseFloat(this.state.value2) });
            } else if (this.state.operator === "+") {
                this.setState({ result: parseFloat(this.state.value1) + parseFloat(this.state.value2) });
            }
            document.getElementById("result").style.display = "block";
            this.setState({ user: true });
        } else if (this.state.user) {
            console.log("2nd time");
            this.setState({ user: false });
            document.getElementById("result").style.display = "none";
            this.setState({ data: this.state.result });
            this.setState({ value1: this.state.result });
        }
    }

    getHistory() {
        if (localStorage.getItem("data")) {
            this.setState({ items: localStorage.getItem("data") });
            this.setState({ updown: true });
        }
    }

    hideHistory() {
        this.setState({ updown: false });
    }

    clearHistory() {
        localStorage.removeItem("data");
        this.setState({ updown: false });
        this.setState({ user: false });
        this.setState({ historyStatus: false });
    }

    render() {
        return (
            <div className='container'>
                <div className="main-box">
                    <div className="cal-box">
                        <h3 className='head'>Calculator</h3>
                        <div className="input-box">
                            <div className="inputValue">
                                <p className='text-style text'>{this.state.data}</p>
                                <p className='text-style text' id='result'>={this.state.result}</p>
                                <p id='historyResult'>{this.state.data}={this.state.result}</p>
                            </div>
                        </div>
                        <div className="btn-box">
                            <div>
                                <button className="btnb" onClick={() => this.getClear()}><span className='text-style'>c</span></button>
                                <button className="btnb" onClick={() => this.getValue("%")}><span className='text-style'>%</span></button>
                                <button className="btnb" onClick={() => this.getBack()}><span className='text-style'>←</span></button>
                                <button className="btnb" onClick={() => this.getValue("/")}><span className='text-style'>/</span></button>
                            </div>
                            <div>
                                <button className="btnb" onClick={() => this.getValue("1")}><span className='text-style'>1</span></button>
                                <button className="btnb" onClick={() => this.getValue("2")}><span className='text-style'>2</span></button>
                                <button className="btnb" onClick={() => this.getValue("3")}><span className='text-style'>3</span></button>
                                <button className="btnb" onClick={() => this.getValue("*")}><span className='text-style'>*</span></button>
                            </div>
                            <div>
                                <button className="btnb" onClick={() => this.getValue("4")}><span className='text-style'>4</span></button>
                                <button className="btnb" onClick={() => this.getValue("5")}><span className='text-style'>5</span></button>
                                <button className="btnb" onClick={() => this.getValue("6")}><span className='text-style'>6</span></button>
                                <button className="btnb" onClick={() => this.getValue("-")}><span className='text-style'>-</span></button>
                            </div>
                            <div>
                                <button className="btnb" onClick={() => this.getValue("7")}><span className='text-style'>7</span></button>
                                <button className="btnb" onClick={() => this.getValue("8")}><span className='text-style'>8</span></button>
                                <button className="btnb" onClick={() => this.getValue("9")}><span className='text-style'>9</span></button>
                                <button className="btnb" onClick={() => this.getValue("+")}><span className='text-style'>+</span></button>
                            </div>
                            <div>
                                <button className="btnb" onClick={() => this.getValue("00")}><span className='text-style'>00</span></button>
                                <button className="btnb" onClick={() => this.getValue("0")}><span className='text-style'>0</span></button>
                                <button className="btnb" onClick={() => this.getValue(".")}><span className='text-style'>.</span></button>
                                <button className="btnb" onClick={() => this.getResult()}><span className='text-style'>=</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="history-box">
                    <History items={this.state.items} showData={() => this.getHistory()} clearData={() => this.clearHistory()} hideData={() => this.hideHistory()} updown={this.state.updown} />
                </div>
            </div>
        )
    }
}

export default Calculater;
