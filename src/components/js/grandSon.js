import React, { Component } from 'react';
import connect from '../utils/connect';
class grandSon extends Component {
    render() {
        return (
            <div>
                {this.props.age}
                {this.props.sex}
                {/* {this.props.name.name} */}
            </div>
        );
    }
}

export default connect(
    (store)=>{
        return {
            name:store.grandSon,
            age:666
        }
    }
)(grandSon);