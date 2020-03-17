import React, { Component } from 'react'
import withCounter from './withCounter';

export class ClickCounter extends Component {
      render() {
            const {count,incrementCount} = this.props;
            return (
                  <div>
                        <h3>{count}</h3>
                  <button onClick={incrementCount}>Click X times </button>
                  </div>
            )
      }
}

export default withCounter(ClickCounter,5)
