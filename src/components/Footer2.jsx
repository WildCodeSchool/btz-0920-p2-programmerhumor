import { Card, Button, CardFooter, NavLink } from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const Footer2 = (props) => {
  return (
    <div>
      <Card>
        <CardFooter>
          <NavLink href="/components/">Contact</NavLink>

          <Button>Up</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Footer2;
