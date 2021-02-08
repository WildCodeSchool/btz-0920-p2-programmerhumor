import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { CgTimer } from 'react-icons/cg';
import '../Home.css';

import PropTypes from 'prop-types';

const Filter = ({ liking, commenting, dating }) => {
  const [rSelected, setRSelected] = useState(null);

  const handleClickDate = () => {
    setRSelected(1);
    dating();
  };

  const handleClickLike = () => {
    setRSelected(2);
    liking();
  };

  const handleClickComments = () => {
    setRSelected(3);
    commenting();
  };

  return (
    <div className="p-4">
      <ButtonGroup className="mt-2">
        <Button
          className={`mr-5 rounded-circle btn-orange-filter ${
            rSelected === 1 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickDate}
          title="Most recent posts"
        >
          <CgTimer size="2.5rem" className="mx-auto" />
        </Button>
        <Button
          className={`mr-5 rounded-circle btn-orange-filter ${
            rSelected === 2 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickLike}
          title="Most liked posts"
        >
          <FiHeart size="2.5rem" className="mx-auto" />
        </Button>
        <Button
          className={`rounded-circle btn-orange-filter ${
            rSelected === 3 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickComments}
          title="Most commented posts"
        >
          <FaRegComment size="2.5rem" className="mx-auto" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

Filter.propTypes = {
  liking: PropTypes.func.isRequired,
  commenting: PropTypes.func.isRequired,
  dating: PropTypes.func.isRequired,
};

export default Filter;
