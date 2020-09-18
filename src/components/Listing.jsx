import React from 'react';
import PropTypes from "prop-types";
import Offering from "./Offering";

function Listing ({items}) {
  return (
    <div className="item-list">
      {items.map(item => (item.state !== "removed") && (<Offering item = {item} key = {item.listing_id} />))}
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array,
};

Listing.defaultProps = {
  items: [],
};

export default Listing;