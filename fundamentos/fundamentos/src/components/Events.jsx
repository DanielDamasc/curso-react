const Events = () => {
    const handleConsoleLog = () => {
        console.log('Clicou!');
    }

    return (
        <div>
            <div>
                <button className="btn" onClick={handleConsoleLog}>Dispare algo no console</button>
            </div>
        </div>
    );
};

export default Events;