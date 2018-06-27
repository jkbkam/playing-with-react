import React, {Component} from 'react'

export const ThemeContext = React.createContext()

export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends Component {
    state = {
        number: 10,
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


