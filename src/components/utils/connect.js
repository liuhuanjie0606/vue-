import React, { Component } from 'react';
import Context from '../utils/context'
const connect = (getStore) => {
    return (WrappendComponent) =>{
        return class extends Component {
            render () {
                return (
                    <div>
                       <Context.Consumer>
                           {
                               (store) =>{
                                     let items= getStore(store)
                                     //this.props 如果不写 前面的那个 sex 在props里面打印会打印不到
                                    return <WrappendComponent {...items} {...this.props}/>
                               }    
                           }
                       </Context.Consumer>
                    </div>
                )
            }
        }
    }
}
export default connect;