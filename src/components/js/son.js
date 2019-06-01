import React, { Component } from 'react';
import GrandSon from './grandSon'
import connect from '../utils/connect'
class Son extends Component {
    render() {
        return (
            <div>
                <GrandSon sex={'女'}/>
            </div>
        );
    }
}

export default connect(
    (store) =>{
        return store.son
    }
)(Son);