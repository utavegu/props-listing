import React from 'react';
import PropTypes from 'prop-types';

function Offering ({item}) {

  const clippedTitle = item.title.substring(0, 50) + "...";

  const defineColorOFLabel = (count) => {
    switch (true) {
      case (count <= 10):
        return "item-quantity level-low";
      case (count <= 20):
        return "item-quantity level-medium";
      case (count > 20):
        return "item-quantity level-high";
      default:
        console.log("Ошибка входных данных!");
    }
  }

  const textToSymol = {
    'USD': '$',
    'EUR':  '€',
  };

  const generateCurrencyRepresentation = (currency) => {
    if ((currency !== 'USD') && (currency !== 'EUR')) {
      return `${item.price} ${item.currency_code}`
    }
    return `${textToSymol[item.currency_code]}${item.price}`
  }
    
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="Изображение не загрузилось"/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{clippedTitle}</p>
        <p className="item-price">{generateCurrencyRepresentation(item.currency_code)}</p>
        <p className={defineColorOFLabel(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  );
}

Offering.propTypes = {
  item: PropTypes.object,
};

export default Offering;