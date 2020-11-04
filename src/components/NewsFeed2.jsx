import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';

const NewsFeed2 = (id, userId, title, body) => {
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
          <CardTitle>{title}</CardTitle>
          <CardText>{body}</CardText>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NewsFeed2;
