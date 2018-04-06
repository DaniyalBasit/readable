import React, {Component} from "react"
import PropTypes from 'prop-types'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

class OrderPost extends Component {
    static propTypes = {
        changeOrder: PropTypes.func.isRequired
    }
    _onSelect(event){
        this.props.changeOrder(event.value)
    }
    render(){
        const options = [
            'Newest Post', 'Oldest Post', 'Most Votes', 'Least Votes'
        ]
        return (
            <div className="col-xs-12">
                <div className="order col-xs-4 col-xs-push-4">
                    <Dropdown 
                        options={options}
                        onChange={this._onSelect.bind(this)}
                        value={this.props.defaultOption}
                        placeholder="Select to order posts"
                    />
                </div>
            </div>
        )
    }
}

export default OrderPost