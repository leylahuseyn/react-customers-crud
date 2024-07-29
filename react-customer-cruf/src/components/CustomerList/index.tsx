import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CircularIndeterminate from '../CircularProgress'

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";

  const getData = async (endpoint: string) => {
    try {
      setLoading(true);
      const response = await axios(`${BASE_URL}/${endpoint}`);

      setCustomers(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id:string) => {
    try {
      if (window.confirm("Are u sure to delete customer??")) {
        const response = await axios.delete(`${BASE_URL}/customers/${id}`);

        if (response.status === 200) {
          const updatedCustomers = customers.filter((person) => person.id !== id);
        
          setCustomers([...updatedCustomers]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData("customers");
  }, []);


  return (
    <>
    
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
            <Link className="nav-link text-danger" style={{textDecoration:'underline'}} to="/customers">Customers List</Link>
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
</div>
<hr />

       <div>
      {loading ? (
        <CircularIndeterminate/>
      ) : (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Contact Title</th>
              <th>Address</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 &&
              customers.map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.companyName}</td>
                    <td>{person.contactTitle}</td>
                    <td>
                      {person.address?.city}, {person.address?.country}
                    </td>
                    <td>
                      <button className="btn btn-outline-danger" onClick={() => handleDelete(person.id)}>DELETE</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div></header>
    </>
   
  );
};

export default CustomerList;
