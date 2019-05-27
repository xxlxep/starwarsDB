import React, { Component } from 'react';
import './item-details.css';
import Spinner from '../spinner/spinner';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button/error-bitton';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    loading: true,
  };
  componentDidMount() {
    this.updateitem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId != prevProps.itemId) {
      this.updateitem();
    }
  }

  updateitem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, loading: false });
    });
  }
  render() {
    const { item } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }
    const { id, name, gender, birthYear, eyeColor } = item;
    return (
      <div className="item-details card">
        <img
          className="item-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="r2-d2"
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
