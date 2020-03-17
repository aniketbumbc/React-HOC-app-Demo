import React, { Component } from 'react';
import withCounter from './withCounter';

 class HoverCounter extends Component {
      render() {
            const {count,incrementCount,name} = this.props;
            console.log(this.props)
            return (
                  <div>
                        <h3 onMouseOver={incrementCount}> Hover X  times {count} </h3>
                        <h4>{name}</h4>                 
                  </div>
            )
      }
}

export default withCounter(HoverCounter,10)
