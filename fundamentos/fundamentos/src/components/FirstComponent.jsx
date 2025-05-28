import ReuseComponent from "./ReuseComponent";

const FirstComponent = () => {
    return (
        <div>
            <h1>Primeiro Componente</h1>
            <p className="text">Meu texto</p>
            <ReuseComponent />
        </div>
    );
};

export default FirstComponent;