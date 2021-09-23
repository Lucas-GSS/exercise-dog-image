import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImage: undefined,
    };
    this.requestApi = this.requestApi.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const endPoint = 'https://dog.ceo/api/breeds/image/random';
    const request = await fetch(endPoint);
    const requestJson = await request.json();
    this.setState({ dogImage: requestJson });
  }

  render() {
    const { dogImage } = this.state;
    const loading = <div>Loading...</div>;
    return (
      <div className="App">
        { dogImage === undefined ? loading
          : <img src={ dogImage.message } alt="Cachorro aleatório" /> }
        <button type="button" onClick={ this.requestApi }>
          Buscar outro Cachorro
        </button>
      </div>
    );
  }
}

export default App;
