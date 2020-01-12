import React, { Component } from 'react';
import './Charts.css'
import BarChart from './BarChart';

class Charts extends Component {
    state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 500,
        left: 500,
        height: 200,
        id: "root"
    }

    render() {
        return (
            <div className="Charts">
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