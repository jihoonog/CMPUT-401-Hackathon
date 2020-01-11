import React, { Component } from 'react';
import './Charts.css'
import BarChart from './BarChart';

class Charts extends Component {
    state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 1000,
        height: 500,
        id: "root"
    }

    render() {
        return (
            <div className="Charts">
                <div className="lineChart">
                    <p>Line Chart</p>
                </div>
                <div className="barChart">
                    <BarChart 
                        data={this.state.data} 
                        width={this.state.width} 
                        height={this.state.height} 
                    />
                </div>
            </div>
        )
    }
}

export default Charts;