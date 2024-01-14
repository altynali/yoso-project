import { FC } from "react";
import Row from "react-bootstrap/Row";
import MyCard from "./Card";
import { MyCardType } from "../../shared/type";

export type CardListProps = {
  cardsArr: MyCardType[];
};

const CardList: FC<CardListProps> = ({ cardsArr }) => {
  return (
    <Row className="gap-3">
      {cardsArr.map((card) => (
        <MyCard key={card.id} card={card} />
      ))}
    </Row>
  );
};

export default CardList;
