// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

// eslint-disable-next-line no-unused-vars
const NewsFeed2 = (props) => {
  return (
    <div className="w-50 h-50 p-3 mx-auto">
      <Card>
        <CardImg
          top
          width="100%"
          src="https://via.placeholder.com/318x180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </CardText>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsFeed2;
