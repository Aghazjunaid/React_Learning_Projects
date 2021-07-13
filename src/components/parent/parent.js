import React from "react";
import Child from "../child/child";

class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : "Naz",
            phone : 9525887776,
            flag : false
        }
    }

    render(){
        return(
            <div>
                <h2>Hello Aghaz</h2>
                <Child name = {this.state.name} phone = {this.state.phone}/>
            </div>
        )
    }
}

export default Parent