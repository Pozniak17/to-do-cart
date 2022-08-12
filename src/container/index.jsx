import "../App.css";
import CardInputForm from "../components/CardInputForm/index.jsx";
import CardItemList from "../components/CardItemList/index.jsx";
import Loader from "../components/Loader/index.jsx";
import TotalAmount from "../components/TotalAmount/index.jsx";

const initialState = [
  { id: 1, name: "printer", price: 110, count: 2 },
  { id: 2, name: "RAM", price: 30, count: 1 },
  { id: 3, name: "motherboard", price: 150, count: 2 },
];

const Card = () => {
  return (
    <div className="card">
      <CardInputForm />
      <Loader />
      <CardItemList />
      {/* передаємо в TotalAmount масив об'єкту, щоб порахувати дані всередині загальну суму */}
      <TotalAmount items={initialState} />
    </div>
  );
};

export default Card;
