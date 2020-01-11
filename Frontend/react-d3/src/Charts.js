import React, { Component } from 'react';
import './Charts.css'
class Charts extends Component {
    render() {
        return (
            <div className="Charts">
                <div className="lineChart">
                    <p>Line Chart</p>
                </div>
                <div className="barChart">
                    <p>Bar Chart</p>
                </div>
            </div>
        )
    }
}

export default Charts;