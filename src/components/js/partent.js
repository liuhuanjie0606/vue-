import React, { Component } from 'react';
import Context from '../utils/context'
import Son from './son'
class Partent extends Component {
    render() {
        console.log(this.props.store,'parent')
        return (
            <div>
                <Context.Provider value={this.props.store}>
                    <Son/>
                </Context.Provider>
            </div>
        );
    }
}

export default Partent;