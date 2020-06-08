import React from 'react';
import './App.css';
import offices from './data.js';

import parse from 'html-react-parser';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      regionFilter: '',
      cityFilter: '',
      locations: offices
    }
  }
  
  componentDidMount() {
    this.setState({ locations: offices })
  }

  setRegionFilter = (event) => {
    this.setState({
      regionFilter: event.target?.value
    });
  }

  setCityFilter = (event) => {
    this.setState({
      cityFilter: event.target?.value
    });
  }

  filterParent = () => {
    return this.state.locations.filter(
      office => office.location.name.includes(this.state.regionFilter) && 
      office.children.some(child => child.location.name.includes(this.state.cityFilter)));
  }

  generateOfficeList = () => {
    return this.filterParent().map(office => office.children.map(child => {
      if (child.location.name.includes(this.state.cityFilter)) {
        return `<li>${child.name}</li>`;
      }
    }).join('')).join('');
  }

  render() {
    return (
    <div>
      <label>Region:</label>
      <input onChange={event => this.setRegionFilter(event)} type="text" value={this.state.regionFilter}></input>
      <label>Location:</label>
      <input onChange={event => this.setCityFilter(event)} type="text" value={this.state.cityFilter}></input>
      {parse(this.generateOfficeList() || `<h3>No locations found.</h3>`)}
    </div>
    )
  }
}

export default App;
