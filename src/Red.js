import React, {Component} from 'react'
import './main.css'
import {ThemeContext} from "./Theme";

class Red extends Component {
    render() {
        return (
            <div className="red">
                <ThemeContext.Consumer>
                    {(context) => context.number}
                </ThemeContext.Consumer>
            </div>
        )
    }
}

export default Red;