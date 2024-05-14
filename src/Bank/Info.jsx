import { useContext } from "react"
import { DataUser } from "./Navigation"
import { useState } from "react"

export default function Info() {
    const { user } = useContext(DataUser)
    const { ListUser , setListUser } = useContext(DataUser)
    const { RetirerArg , setRetirer } = useContext(DataUser)

    const [displayInput, setDisplayInput] = useState(false);

    const Retirer = () => {
        setDisplayInput(true);
    };

    const Annuler=()=>{
        setDisplayInput(false)
    }

    const handlechangevalue=(e)=>{
        e.preventDefault()
        const input = e.target.value
        setRetirer(input)
    }


    const handleRetirer = (e) => {
        e.preventDefault();
        console.log(RetirerArg);
        const updatedListUser = ListUser.map(item => {
            if (item.NumberUser === user) {
                return {
                    ...item,
                    Montant: item.Montant - RetirerArg
                };
            }
            return item;
        });
        setRetirer("");
        setDisplayInput(false); 
        setListUser(updatedListUser); 
        console.log('Retirer argent is successful');
    }

    const detailuser = () => {
        const details = ListUser.find(item => item.NumberUser === user)
        return (
            <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 style={{ textAlign: 'center' , color:'blue' }}>Bienvenue Monsieux</h1>
                <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                    <li style={{ width: '100%', border: '1px solid black', padding: '0.5em' }}>Number of User: {details.NumberUser}</li>
                    <li style={{ width: '100%', border: '1px solid black', padding: '0.5em' }}>Montant: {details.Montant}</li>
                </ul>
                <button onClick={Retirer}>Retirer de l'argent</button>
                {displayInput && (
                        <div>
                            <form onSubmit={handleRetirer} style={{ margin: '20px auto 0' }}>
                                <input type="number" name="argent" onChange={handlechangevalue} style={{ padding: '10px', border: '2px solid #ccc', borderRadius: '8px', fontSize: '16px', outline: 'none', transition: 'border-color 0.3s ease', width: '200px' }} />
                                <button>Valider</button>
                            </form>
                            <button onClick={Annuler} style={{ display: 'block', margin: '20px auto 0', width: 'fit-content' }}>Annuler</button>
                        </div>
                )}
            </div>
        )
    }

    return (
        <>
            {detailuser()}
        </>
    )
}
