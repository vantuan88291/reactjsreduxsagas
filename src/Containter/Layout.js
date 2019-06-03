import React, { Component } from 'react'
import '../App.css';
import { connect } from "react-redux";
import { HomesTypes } from '../Redux/HomeRedux'

class Layout extends Component{

    constructor(props) {
        super(props);

    }
    clickButton = () => {
        console.log('dhsbhbhdsbf')
        this.props.request()
    }
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>{this.props.name.error}</code>
                    </p>
                    <a className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer">
                        Learn React
                    </a>
                    <button onClick={this.clickButton}>click to change</button>
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
