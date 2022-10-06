import { useContext, useRef } from "react";
import ExpenseDate from "./ExpenseDate.js";
import "./MealItem.css";
import StateContext from "../contexts/state.js";
import actions from "../reducers/actions.js";
import MenuContext from "../contexts/menu.js";

function MealItem(props) {
  const inputs = useRef([]);
  const meals = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);

  function addMeal(index) {
    const meal = meals[index];
    const input = inputs.current[index];

    if (input.value) {
      dispatch({
        type: actions.ADD_MEAL,
        payload: { meal, quantity: parseInt(input.value) },
      });
      input.vale("");
    }
  }

  return (
    <>
      {meals.map((item, index) => (
        <div className="container h-10 d-inline-block">
          <div className="menu">
            <h2 className="menu-group-heading "></h2>
            <div className="menu-group ">
              <div className="menu-item h-100">
                <img src={item.image} className="menu-item-image" />
                <div className="meni-item-text">
                  <h3 className="menu-item-heading">
                    <span className="menu-item-name"> {item.name}</span>
                    <span className="menu-item-price">${item.price}</span>
                  </h3>
                  <p className="menu-item-description">{item.description}</p>
                  
                    <div class = "h-25 d-inline-block">
                    <label>Cantidad</label>
                    <input 
                    type="number"
                    ></input>
                    
                  <button
                    type="button"
                    className="menu-item-button"
                    onclick={() => addMeal(props.name)}
                  >
                    + Agregar
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MealItem;
