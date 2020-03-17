 import React,{Component} from 'react';

 const withCounter= (OriginalComponent,incNumber) =>{
      class NewComponent extends Component{
            constructor(props) {
                  super(props)
            
                  this.state = {
                         count:0
                  }
            }
      
            incrementCount = ()=>{
                  this.setState(preState =>{
                        return{
                              count:preState.count+incNumber
                        }
                  })
            }      
            render(){
                  return <OriginalComponent count={this.state.count}  
                  incrementCount = {this.incrementCount} 
                  {...this.props}
                  />
            }
      }
      return NewComponent 

 }

 export default withCounter