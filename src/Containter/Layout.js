import React, {Component} from 'react'
import {connect} from "react-redux";
import {HomesTypes} from '../Redux/HomeRedux'
import {Link} from 'react-router-dom';
import Header from './Header'
import ListContent from './ListContent'

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tex: this.getTime(),
            data: null,
            page: 1
        }
        this.input = React.createRef();
        this.handleScroll = this.handleScroll.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps', nextProps)

        if (nextProps.data.data != null) {
            return {
                data: nextProps.data.data
            }
        }
        return null
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.props.request(1)
        // this.timerID = setInterval(
        //     () => this.setState({tex: this.getTime()}),
        //     1000
        // );
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = async () => {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight && !this.props.data.fetching && !this.props.data.error) {
           console.log('at bottom')
            await this.setState({page: this.state.page + 1})
            await this.props.request(this.state.page)
        } else {
            console.log('not at bottom')
        }
    }
    getTime = () => {
        let date = new Date()
        return `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
    }

    render() {
        return (
            <div>
            <Header page={this.state.page}/>
            <div className="container-fluid" style={{display: 'block', overflow: 'hidden'}}>
                <div className="container-fluid">
                    <div id="content" className="clearfix row-fluid">
                        <div id="main" className="span9 clearfix" role="main">
                            <ListContent data={this.state.data} loading={this.props.data.fetching}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        request: (page) => {
            let requestAction = {
                type: HomesTypes.HOMES_REQUEST,
                page
            }
            dispatch(requestAction)
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.home
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout)
