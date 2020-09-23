import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        //-------------------------------
        // //____________if/else
        //         if (this.state.isLoggedIn) {
        //             return (
        //                 <div>welcome akrem</div>
        //             )
        //         } else {
        //             return (
        //                 <div>welcome guest</div>
        //             )
        //         }
        //-----------------------------------------

        //-----------------------------------------
        //______element-varible
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>welcome akrem</div>
        // } else {
        //     message = <div>welcome guest</div>
        // }
        // return <div>{message}</div>
        //-----------------------------------------

        //-----------------------------------------
        //_________teneray-cond-operator
        // return (
        //     this.state.isLoggedIn ? <div>welcome akrem</div> : <div>welcome guest</div>
        // )
        //-----------------------------------------

        //-----------------------------------------
        //_________short-circuit-operator
        return this.state.isLoggedIn && <div>welcome akrem</div>

    }
}





export default UserGreeting
