import React, {Component} from 'react'
import '../../App.css';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../../Component/Header";

class DetailScreen extends Component {

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('item from', nextProps)

        return null
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="listContent">
                <Header/>
                <div className="srt_wrapper">
                    <div className="succes">
                        đăng nhập
                    </div>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {}
}
const mapStateToProps = (state, ownProps) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen)
