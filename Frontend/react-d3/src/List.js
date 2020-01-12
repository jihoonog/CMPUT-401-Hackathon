import React, { Component } from 'react';
import './List.css';

class ListComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    }
  }


  async componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/') //put address here
    .then(response => response.json())
    .then(json => {
      this.setState({
        articles: json,
      })
    })
  }

  render() {
    return (
      this.state.articles.map(row => <div className="ListComponent" key={row._id}>{row.title}</div>)
                              //modify row.title to row.<xxx>
    )
  }
}
            
export default ListComponent;

