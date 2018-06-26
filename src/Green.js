import React, {Component} from 'react'
import './main.css';
import Red from './Red'

class Green extends Component {
    render() {
        return (
            <div className="green">
                {this.props.number}
                <Red number={this.props.number}/>
            </div>
        )
    }
}

export default Green;