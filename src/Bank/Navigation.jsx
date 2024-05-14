import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NotFound from "./Errors";
import { createContext, useState } from "react";
import Info from "./Info";

export const DataUser = createContext({})

export default function Navigate(){
    
    const [ListUser , setListUser] = useState([
        {NumberUser : '1235561' , Password : 'Azerty212' , Montant : 1500}
    ])

    const [user , setUser] = useState(null);

    const [RetirerArg , setRetirer] = useState(0);

    return <>
        <DataUser.Provider value={{ ListUser , setListUser , user , setUser , RetirerArg , setRetirer}}>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}/>
                <Route path="/SignUp" element={<SignUp />}/>
                <Route path="/info" element={<Info />}/>
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
        </DataUser.Provider>
    </>
}