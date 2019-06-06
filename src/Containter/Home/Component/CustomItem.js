import React, {Component} from 'react'

class CustomItem extends Component {

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
                <td><a href="/edit.php?idbv=257" target="_blank" id="link1"
                       className="check1">sửa</a> | <a href="#" id="link1"
                                                       className="check1">xóa</a></td>
            </tr>
        );
    }

}

export default CustomItem
