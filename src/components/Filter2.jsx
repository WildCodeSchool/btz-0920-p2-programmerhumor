import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const Filter2 = (props) => {
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
      <ButtonGroup>
        <Button
          className="rounded-circle p-3 m-3 btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
          color="outline-info"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Recent +
        </Button>
        <Button
          className="rounded-circle p-3 m-3 btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
          color="outline-info"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Like +
        </Button>
        <Button
          className="rounded-circle p-3 m-3 btn-orange btn-orange:hover btn-orange:not(:disabled):not(.disabled):active"
          color="outline-info"
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Comment +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filter2;
