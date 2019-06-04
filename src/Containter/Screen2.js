import React, { Component } from 'react'
import '../App.css';
import { connect } from "react-redux";
import { HomesTypes } from '../Redux/HomeRedux'
import {Link} from "react-router-dom";

class Screen2 extends Component{

    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render () {
        return (
            <div className="src2">
                hello screen 2
                <div>
                    <Link to="/">Go back</Link>
                </div>

            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Screen2)
