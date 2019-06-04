import React, { Component } from 'react'
import '../App.css';
import { connect } from "react-redux";
import { HomesTypes } from '../Redux/HomeRedux'
import { Link } from 'react-router-dom';

class Layout extends Component{

    constructor(props) {
        super(props);
        this.state = {
            tex: this.getTime(),
            style: 'App-header'
        }
        this.input = React.createRef();
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setState({tex: this.getTime()}),
            1000
        );
    }
    clickButton = () => {
        // this.props.request()

    }
    getTime = () => {
        let date = new Date()
        return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    }
    render () {
        return (
            <div className="App">
                <header className={this.state.style}>
                    <p style={{color: 'blue',
                        fontSize: '46px'
                    }}>
                        {this.state.tex}
                    </p>
                    <input type="text" ref={this.input} />
                    <button onClick={this.clickButton}>click to change</button>
                    <Link to="/scr2"><button>Show the List</button></Link>
                </header>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        request: () => {
            let requestAction = {
                type: HomesTypes.HOMES_REQUEST
            }
            dispatch(requestAction)
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        name: state.home
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
