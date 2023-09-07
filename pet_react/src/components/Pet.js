const Pet = ({pet}) => {
    
    return (
        <div>
            <h3>{pet.name}</h3>
            <p>{pet.type}</p>
            <p>Age: {pet.age}</p>

            <div>
                <button>Show</button>
                <button>Delete</button>
            </div>

        </div>
    );
};

export default Pet;
