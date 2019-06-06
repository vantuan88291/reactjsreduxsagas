import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import icCancel from '../Themes/Images/cancel.png'

class CustomPopup extends Component {
    clickClose = () => {
        this.props.clickClose()
    }
    render() {
        if (this.props.show) {
            return (
                <div onClick={this.clickClose} className="Popup">
                    <div className="contentPopup">
                        <p className="txtContent">Xóa item?</p>
                        <div className="divAction">
                            <button onClick={this.clickClose} className="buttonCl">Xóa</button>
                            <button onClick={this.clickClose} className="buttonll">Hủy</button>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }
}

export default CustomPopup
