//  import React from 'react';
import propTypes from 'prop-types';
import './Filter.css';

function Filter({ like, comment, recent }) {
  return (
    <div className="filter">
      <button type="button" className="like">
        {' '}
        {like}{' '}
      </button>
      <button type="button" className="comment">
        {' '}
        {comment}{' '}
      </button>
      <button type="button" className="date">
        {' '}
        {recent}{' '}
      </button>
    </div>
  );
}
Filter.propTypes = {
  like: propTypes.string.isRequired,
  comment: propTypes.string.isRequired,
  recent: propTypes.string.isRequired,
};
export default Filter;
