import { FC } from "react";
import Row from "react-bootstrap/Row";
import MyCard from "./Card";
import { MyWorkerType } from "../../shared/type";

export type CardListProps = {
  cardsArr: MyWorkerType[] | undefined;
};

const CardList: FC<CardListProps> = ({ cardsArr }) => {
  return (
    <Row className="gap-3">
      {cardsArr
        ? cardsArr.map((card) => <MyCard key={card.id} card={card} />)
        : "No workers"}
    </Row>
  );
};

export default CardList;
