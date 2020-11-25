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
          className={`mr-3 rounded-circle btn-orange-filter ${
            rSelected === 1 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickDate}
          title="Les posts les plus récents"
        >
          <CgTimer size="2.5rem" className="mr-3 mx-auto" />
        </Button>
        <Button
          className={`mr-3 rounded-circle btn-orange-filter ${
            rSelected === 2 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickLike}
          title="Les posts les plus likés"
        >
          <FiHeart size="2.5rem" className="mr-3 mx-auto">
            +
          </FiHeart>
        </Button>
        <Button
          className={`rounded-circle btn-orange-filter ${
            rSelected === 3 && 'btn-active'
          }`}
          color="outline-light"
          onClick={handleClickComments}
          title="Les posts les plus commentés"
        >
          <FaRegComment size="2.5rem" className="mr-3 mx-auto">
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
