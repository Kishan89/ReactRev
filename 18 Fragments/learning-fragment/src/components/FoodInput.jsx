import styles from "./FoodInput.module.css";
function FoodInput({ handleKeyDown }) {
  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      className={styles.FoodInput}
      onKeyDown={handleKeyDown}
    />
  );
}

export default FoodInput;
