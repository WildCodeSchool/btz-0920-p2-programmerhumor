import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { FiHeart } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { CgTimer } from 'react-icons/cg';

const Filter2 = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div className="p-4">
      <ButtonGroup className="mt-2">
        <Button className="mr-3 rounded-circle btn-orange-filter btn-orange-filter:hover btn-orange-filter:not(:disabled):not(.disabled):active">
          <FiHeart
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={() => setRSelected(1)}
            active={rSelected === 1}
          >
            +
          </FiHeart>
        </Button>
        <Button className="mr-3 rounded-circle btn-orange-filter btn-orange-filter:hover btn-orange-filter:not(:disabled):not(.disabled):active">
          <FaRegComment
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={() => setRSelected(2)}
            active={rSelected === 2}
          >
            +
          </FaRegComment>
        </Button>
        <Button className="rounded-circle btn-orange-filter btn-orange-filter:hover btn-orange-filter:not(:disabled):not(.disabled):active">
          <CgTimer
            size="2.5rem"
            className="mr-3 mx-auto"
            onClick={() => setRSelected(3)}
            active={rSelected === 3}
          >
            +
          </CgTimer>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filter2;
