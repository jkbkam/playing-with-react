import React, {Component} from 'react'
import './main.css';
import Red from './Red'

class Green extends Component {
    render() {
        return (
            <div className="green">
                <Red/>
            </div>
        )
    }
}

export default Green;