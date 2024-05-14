import { useContext, useEffect, useRef, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { DataUser } from "./Navigation";

export default function Login(){
    const { ListUser } = useContext(DataUser)
    const { setUser } = useContext(DataUser)

    const NumberUserRef = useRef(null)
    const PasswordRef = useRef(null)

    useEffect(()=>{
        console.log(...ListUser)
    } , [])

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const valider = ListUser.find(item => item.NumberUser === NumberUserRef.current.value && item.Password === PasswordRef.current.value)

        if (valider) {
            setUser(NumberUserRef.current.value)
            navigate('/info')
        }else{
            alert('this user is Not Found !!!!')
        }

        NumberUserRef.current.value = null
        PasswordRef.current.value = null
    }
    return <>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-lg-6 col-md-8 col-sm-10">
                    <h1 className="display-4 text-center mb-4">Welcome to BMCI</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                        <label htmlFor="numbreuser">Number of Users:</label>
                        <input type="text" name="numbreuser" className="form-control" ref={NumberUserRef} />
                        </div>
                        <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" className="form-control" ref={PasswordRef} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Confirmer</button>
                    </form>
                    <button className="btn btn-link mt-3 btn-block"><Link to='/SignUp'>Sign Up</Link></button>
                    </div>
                </div>
            </div>
    </>
}