
import StateContext from "../contexts/state"
import {useContext} from 'react'
import actions from "../reducers/actions"

function Navigation(){

    const { state, dispatch } = useContext(StateContext);
	const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
    <> 
        <nav className="navbar navbar-dark  bg-danger d-flex justify-content-evenly">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">REACTMEALS APP</a>
                <div className="d-flex " >
                    {/* <span class="btn btn-primary">Carrito</span>
                    <span class="badge text-bg-secondary">1</span> */}
                    <button type="button" class="btn btn-primary text-bg-danger p+10 rounded-pill">
                     Carrito <span class="badge text-bg-secondary text-bg-light p+10 rounded-circle ">{total}</span>
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </div>
        </nav>
    </>
        
    )
}
export default Navigation