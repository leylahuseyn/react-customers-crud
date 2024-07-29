import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function addCustomer() {

    const [companyname, setCompanyName] = useState<string>('')
    const [contacttitle, setContactTitle] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')


    const handleSubmit = (e: any) => {

        e.preventDefault();
        if (companyname.trim() === '' || contacttitle.trim() === '' || city.trim() === '' || country.trim() === '') {
            alert('All fields must be filled out!');
            setCompanyName('')
            setContactTitle('')
            setCity('')
            setCountry('')
            return;
        }

        const userData = {
            companyName: companyname,
            contactTitle: contacttitle,
            address: {
                city: city,
                country: country
            }

        }

        axios.post('https://northwind.vercel.app/api/customers', userData)
            .then(response => {
                console.log('Data submitted', response.data);
                setCompanyName('')
                setContactTitle('')
                setCity('')
                setCountry('')

            }).catch(error => {
                console.log('error');

            })
    }
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
                                    <Link className="nav-link active text-danger" style={{textDecoration: 'underline'}} aria-current="page" to="/add-customer">Add Customer
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
            <hr />
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <form onSubmit={handleSubmit} className="w-50">
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="companyName" className="col-sm-4 col-form-label">
                            <span className="text-danger fs-5">* </span>Company Name:
                        </label>
                        <div className="col-sm-8">
                            <input value={companyname} onChange={(e) => setCompanyName(e.target.value)} type="text" className="form-control" id="companyName" />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="contactTitle" className="col-sm-4 col-form-label">
                            <span className="text-danger fs-5">* </span>Contact Title:
                        </label>
                        <div className="col-sm-8">
                            <input value={contacttitle} onChange={(e) => setContactTitle(e.target.value)} type="text" className="form-control" id="contactTitle" />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="city" className="col-sm-4 col-form-label">
                            <span className="text-danger fs-5">* </span>City:
                        </label>
                        <div className="col-sm-8">
                            <input value={city} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="city" />
                        </div>
                    </div>
                    <div className="mb-3 row align-items-center">
                        <label htmlFor="country" className="col-sm-4 col-form-label">
                            <span className="text-danger fs-5">* </span>Country:
                        </label>
                        <div className="col-sm-8">
                            <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" className="form-control" id="country" />
                        </div>
                    </div>
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </header>

    )
}


export default addCustomer