const TemplateExpressions = () => {
    const name = "Rei do heiditi";
    const data = {
        age: 20,
        job: "Estagiário",
    }

    return (
        <div>
            <h1>Bem-vindo {name}.</h1>
            <p>Um {data.job} que tem {data.age} anos.</p>
        </div>
    );
};

export default TemplateExpressions;