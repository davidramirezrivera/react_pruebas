import React, { component } from "react";
import { Component } from "react/cjs/react.development";

function componentWrapper(WrapperComponent){

    class Wrapper extends Component{
        render(){
            return <WrapperComponent{...this.props} />
        }
    }
    return Wrapper;
}