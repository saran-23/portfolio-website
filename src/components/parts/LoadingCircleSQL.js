import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleSQL extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

  }


  render() {
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#4BC39B' }]}
          reveal={25}
          lineWidth={20}
          background="#bfbfbf"
          lengthAngle={270}
          rounded
          animate
        />
      </div>
    )
  }
}

export default LoadingCircleSQL