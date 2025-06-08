import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  const foodItems = [
    "Sabji",
    "Green vegetable",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
