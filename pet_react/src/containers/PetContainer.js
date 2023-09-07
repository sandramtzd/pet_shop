import { useEffect, useState } from "react";
import PetList from "../components/PetList";
const SERVER_URL = "http://localhost:8080";

const PetContainer = () => {
    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch(`${SERVER_URL}/pets`);
        const data = await response.json();
        setPets(data)
    }

    useEffect(() => {
        fetchPets()
    }, []);



    return (
        <>
            <h1>Pet Adoption</h1>
            <p><em>Your next friend is here</em></p>
            <PetList pets={pets}/>
        
        </>
    )

}
export default PetContainer;