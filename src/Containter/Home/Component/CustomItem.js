import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class CustomItem extends Component {

    clickDelete = () => {
        this.props.clickDelete(this.props.item)
    }
    render() {
        const item = this.props.item
        return (
            <tr id="load1" className="odd">
                <td>{item.idbv}</td>
                <td><a href="http://fb.com/100001419418560" target="_blank" id="link1"
                       className="check1">{item.name}</a></td>
                <td>{item.tit}</td>
                <td>{item.date}</td>
                <td>{item.theloai}</td>
                <td><Link to={{
                    pathname: '/Detail',
                    state: 'abc'
                }}  id="link1"
                          className="check1">Detail</Link> | <a onClick={this.clickDelete} href="#" id="link1"
                                                       className="check1">xóa</a></td>
            </tr>
        );
    }
}

export default CustomItem
