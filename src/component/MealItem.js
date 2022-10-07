import { useContext, useRef } from "react";
import "./MealItem.css";
import StateContext from "../contexts/state";
import actions from "../reducers/actions.js";
import MenuContext from "../contexts/menu.js";

function MealItem() {
  const inputs = useRef([]);
  const meals = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);

  function addMeal(index) {
    console.log("Agregando");
    const meal = meals[index];
    const input = inputs.current[index];

    if (input.value) {
      console.log(input.value);
      dispatch({
        type: actions.ADD_MEAL,
        payload: { meal, quantity: parseInt(input.value) },
      });
      input.value = "";
    }
  }

  return (
    <>
      <div class="row">
        <div className="expenses">
          <div className="container h-10 d-inline-block">
            <div className="menu">
              <h2 className="menu-group-heading ">Principal</h2>
              <div className="menu-group ">
                {meals.map((item, index) => (
                  <div className="menu-item h-100">
                    <img src={item.image} className="menu-item-image" />
                    <div className="menu-item-body">
                      <div className="menu-item-body-text">
                        <h3 className="menu-item-heading">
                          <span className="menu-item-name"> {item.name}</span>
                          <span className="menu-item-price">${item.price}</span>
                        </h3>
                        <p className="menu-item-description">
                          {item.description}
                        </p>
                      </div>
                    
                        <label>Cantidad</label>
                        <input
                          type="number"
                          min="0"
                          ref={(el) => (inputs.current[index] = el)}
                        ></input>
                        
                        <button
                          type="button"
                          className="menu-item-button"
                          onClick={() => addMeal(index)}
                        >
                          + Agregar
                        </button>
                        
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MealItem;
