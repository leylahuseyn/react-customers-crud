import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg  ">
    <div className="container">
      
      <div className="collapse navbar-collapse" id="navbarText">
        <Link className="navbar-brand navbar-nav me-auto mb-2 mb-lg-0" to="/" >Logo</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <span className="navbar-text">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/add-customer">Add Customer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">Customers List</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="">Favorites</Link>
          </li> */}
        </ul>
        </span>
      </div>
    </div>
  </nav>
  <div>
    <hr />
    <p style={{textAlign:'center', marginTop:'190px', fontSize: '50px'}}>This is Home Page</p>
  </div>
  </header>
  )
}

export default header