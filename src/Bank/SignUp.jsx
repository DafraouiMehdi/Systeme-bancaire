import { useContext, useRef, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom"
import { DataUser } from "./Navigation";

export default function SignUp(){
    const {ListUser , setListUser} = useContext(DataUser)
    const { setUser } = useContext(DataUser)

    const NumberUserRef = useRef(null)
    const PasswordRef = useRef(null)
    const MontantRef = useRef(0)

    const navigate = useNavigate()
    
    const hanldeSubmit = (e) => {
        e.preventDefault();
      
        const num = NumberUserRef.current.value;
        const pass = PasswordRef.current.value;
        const montant = MontantRef.current.value;
      
        setListUser(prevListUser=>[
            ...prevListUser ,
            {
                NumberUser : num ,
                Password : pass , 
                Montant : montant
            }
        ]);
      
        NumberUserRef.current.value = '';
        PasswordRef.current.value = '';
        MontantRef.current.value = '';

        setUser(ListUser.NumberUser)

        navigate('/')
    };
    return <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                    <h1 className="display-4 text-center mb-4">Sign Up</h1>
                    <form onSubmit={hanldeSubmit}>
                        <div className="form-group">
                        <label htmlFor="numbreuser">Number of Users:</label>
                        <input type="text" name="numbreuser" className="form-control" ref={NumberUserRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className="form-control" ref={PasswordRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="number">Number:</label>
                        <input type="number" name="number" className="form-control" ref={MontantRef} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Valider</button>
                    </form>
                    <button className="btn btn-link mt-3 btn-block"><Link to='/'>Login</Link></button>
                    </div>
                </div>
            </div>
    </>
}