import React from 'react';
import axios from 'axios';
import Slider from './components/slider.jsx';
import Heading from './components/heading.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
    };
  }

  componentDidMount() {
    const url = document.URL;
    const parseURL = url.split('/');
    const itemID = parseURL[parseURL.length - 1];
    // axios.get('/api/products/1/suggestions/')
    axios.get(`/api/products/${itemID || 1}/suggestions/`)
      .then((res) => {
        console.log(res.data.rows);
        this.setState({ suggestions: res.data.rows });
      })
      .catch((err) => {
        console.log('Unable to fetch data from db: ', err);
      });
  }

  render() {
    return (
      <div>
        <Heading />
        <Slider list={this.state.suggestions}/>
      </div>
    );
  }
}

export default App;
