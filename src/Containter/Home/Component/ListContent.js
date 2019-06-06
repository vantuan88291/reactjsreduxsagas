import React, {Component} from 'react'
import CustomItem from './CustomItem'
import '../../../App.css'
import Spinner from 'react-spinner-material'

class ListContent extends Component {
    renderItem = () => {
        if (this.props.data != null) {
            return (
                <tbody>
                    {this.props.data.map((item) => {
                        return <CustomItem key={item.idbv} item={item}/>
                    })}
                </tbody>
            )

        } else {
            return (
                null
            )
        }
    }
    render() {
        return (
            <fieldset className="listContent">
                <table width="100%" id="tablesorter1" className="tablesorter">
                    <thead>
                    <tr>
                        <th width="5%" className="header">&nbsp;</th>
                        <th className="header">tên fb</th>
                        <th className="header">tên món</th>
                        <th className="header">thời gian</th>
                        <th className="header">tên thể loại</th>
                        <th className="header">Hành động</th>
                    </tr>
                    </thead>
                    {this.renderItem()}
                </table>
                <div className="textLoading">
                    <Spinner size={50} spinnerColor={"#f64493"} spinnerWidth={4} visible={this.props.loading} />

                </div>
            </fieldset>
        );
    }

}

export default ListContent
