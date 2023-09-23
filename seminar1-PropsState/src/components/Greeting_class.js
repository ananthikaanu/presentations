import React from "react";

class Greeting_class extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.age}
            </div>
        )
    }
}
export default Greeting_class


// (state = condition inside our components

//fuctional component- representational , stateles(but hook there)
//class component - stateful() )