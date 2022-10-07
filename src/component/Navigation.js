
import StateContext from '../contexts/state';
import {useContext} from 'react'
import actions from "../reducers/actions"
import { Link } from "react-router-dom";

function Navigation(){

    const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
    <> 
    <nav class="navbar navbar-dark bg-danger fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">REACTMEALS APP</a>
            <div className="d-flex " >
                {/* <span class="btn btn-primary">Carrito</span>
                <span class="badge text-bg-secondary">1</span> */}
                <button type="button" class="btn btn-primary text-bg-dark p+10 rounded-pill">
                    Carrito <span class="badge text-bg-secondary text-bg-light p+10 rounded-circle ">{total}</span>
                </button>
                <form class="d-flex " role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-success" type="submit">Search</button>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <Link to="/menu" className="nav-link">
                        <a class="nav-link" href="#">Menu</a>
                    </Link>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                
            </div>
            </div>
        </div>
    </nav>
    </>
        
    )
}
export default Navigation