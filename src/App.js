import React, {Component} from 'react';
import './main.css';
import Green from './Green'
import {ThemeProvider, ThemeContext} from "./Theme";

class App extends Component {


    render() {
        return (
            <ThemeProvider>

                <div className="yellow">
                    <Green/>
                    <ThemeContext.Consumer>
                    {(context) => context.number}
                    </ThemeContext.Consumer>
                </div>

            </ThemeProvider>
        );
    }
}

export default App;
