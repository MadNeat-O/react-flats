import React, { Component } from 'react';

class Marker extends Component {
  style = () => {
    console.log(this.props);
    const style = {
      backgroundImage: `url(${this.props.imageUrl})`,
    }
    return style;
  }

  render() {
    return (
      <div className="card" style={this.style()}>
        <div className="card-category">{this.props.price} EUR</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Marker;