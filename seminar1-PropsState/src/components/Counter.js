
import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"anu",
            age:0
        }
    }
// handleClick(){
//     console.log('clicked me')
// }

handleAdd = () =>{
    this.setState({
        age:this.state.age +1
    })
}
handleReduce = () =>{
    this.setState({
        age:this.state.age -1
    })
}

render(){
    return(
        <div>
            {/* <h1>{this.state.name}</h1> */}
            {/* <button onClick={this.handleClick}>click me</button> */}
            <h1>{this.state.age}</h1>
            <button onClick={this.handleAdd} style={{backgroundColor:"green",height:"50px",justifyContent:"space-between"}}>Add</button>
            <button onClick={this.handleReduce}style={{backgroundColor:"red",height:"50px"}}>Reduce</button>
        </div>
    )
}
}
export default Counter

//every class component has inbuilt object ie state we can acess it by this.state
//this.setState takes an object
// if we are using arrow fn no need to bind it to this fn other wise need to bind between the class component and handleadd - like [ this.hanldeAdd=this.handleAdd.bind(this)]