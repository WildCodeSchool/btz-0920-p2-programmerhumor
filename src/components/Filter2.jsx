import { useState } from 'react';
import { ButtonGroup } from 'reactstrap';
import { FaComments, FaHeart, FaHourglass } from 'react-icons/fa';

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
      <ButtonGroup className="filterbox">
        <FaComments
          size="3rem"
          className="Top Comments"
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        />
        <FaHeart
          size="3rem"
          className="Top Like"
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        />
        <FaHourglass
          size="3rem"
          className="Top Date"
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        />
      </ButtonGroup>
    </div>
  );
};

export default Filter2;
