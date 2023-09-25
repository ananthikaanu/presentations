import React from "react";

export const AppContext = React.createContext  

class ContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:"i am context api"
        }
    }
    render(){
        return(
             <AppContext.Provider value={this.state.name}>
                {this.props.children}
             </AppContext.Provider>
        )
    }
}
export default ContextProvider