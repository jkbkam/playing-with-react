import React, {Component} from 'react'
import './main.css'

class Red extends Component {
    render () {
        return (
            <div className="red">
                {this.props.number}
            </div>
        )
    }
}

export default Red;