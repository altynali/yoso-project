import { FC } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { MyCardType } from "../../shared/type";

export type MyCardProps = {
  card: MyCardType;
};

const MyCard: FC<MyCardProps> = ({ card }) => {
  const { email, fullName, jobPosition, workingTime } = card;
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{jobPosition}</Card.Text>
          <Card.Text>{workingTime}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default MyCard;
