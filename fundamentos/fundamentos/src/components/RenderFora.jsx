const RenderFora = () => {
    const renderizandoFora = (x) => {
        if (x) {
            return <h1>Primeiro caso para a renderização fora.</h1>;
        } else {
            return <h1>Segundo caso para a renderização fora.</h1>;
        }
    };

    return (
        <div>
            {renderizandoFora(true)}
        </div>
    );

};

export default RenderFora;