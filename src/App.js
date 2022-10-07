import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navigation from './component/Navigation'
import Slide from './component/Slide'
import {useReducer, useState, useEffect} from 'react'
import reducer from "./reducers/reducer";
import initialState from "./reducers/initialState";
import StateContext from "./contexts/state";
import NotFound from './Pages/NotFound'
import MenuContext from './contexts/menu'
import useHttp from "./hooks/useHttp";
import MealItem from './component/MealItem';


function App(){

    const [meals, setMeals] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { request } = useHttp();

  useEffect(() => {
		async function fetchMeals() {
			const data = await request({ url: "https://react-http-9470a-default-rtdb.firebaseio.com/meals.json" });
			setMeals(data || []);
		}

		fetchMeals();
	}, [request]);


    return(
        <MenuContext.Provider value={meals}>
        <StateContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Navigation />
                <div>
                <Slide />
                </div>
                <Routes>
                    <Route path="/menu" element={<MealItem/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </StateContext.Provider>
        </MenuContext.Provider>
    )
}
export default App