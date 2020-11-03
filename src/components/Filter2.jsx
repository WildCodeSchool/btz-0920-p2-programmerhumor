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
    <div>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Recent +
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Like +
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Comment +
        </Button>
      </ButtonGroup>
      <p>Selected: {rSelected}</p>
    </div>
  );
};

export default Filter2;
