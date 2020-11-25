import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { CgTimer } from 'react-icons/cg';
import '../Home.css';

import PropTypes from 'prop-types';

const Filter = ({ liking, commenting, dating }) => {
  const [rSelected, setRSelected] = useState(false);

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
          className="mr-3 rounded-circle btn-orange-filter btn-orange-filter:hover"
          color="outline-light"
        >
          <CgTimer
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={handleClickDate}
            active={rSelected ? 1 : undefined}
          >
            +
          </CgTimer>
        </Button>
        <Button
          className="mr-3 rounded-circle btn-orange-filter btn-orange-filter:hover btn-orange-filter:not(:disabled):not(.disabled):active"
          color="outline-light"
        >
          <FiHeart
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={handleClickLike}
            active={rSelected ? 2 : undefined}
          >
            +
          </FiHeart>
        </Button>
        <Button
          className="rounded-circle btn-orange-filter btn-orange-filter:hover btn-orange-filter:not(:disabled):not(.disabled):active"
          color="outline-light"
        >
          <FaRegComment
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={handleClickComments}
            active={rSelected ? 3 : undefined}
          >
            +
          </FaRegComment>
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
