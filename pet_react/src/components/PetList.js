import Pet from "./Pet";
const PetList = ({pets}) => {

    const petComponents = pets.map((pet)=> {
        return (
            <Pet
                key={pet.id}
                pet={pet}

            
            />
        );
    });

    return (
        <>
            <h3>Pets</h3>
            <hr/>
            {petComponents}
        
        </>
    );
};

export default PetList;
