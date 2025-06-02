import { useState } from "react"

const ListRender = () => {
    const [List] = useState(["Maria", "Pedro", "João", "Marta"]);

    const [Users] = useState([
      {id: 1, nome: "Daniel", age: 20},
      {id: 2, nome: "Jeff", age: 50},
    ]);

  return (
    <div>
        <ul>
            {List.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
          {Users.map((item) => (
            <li key={item.id}>{item.nome} - {item.age}</li>
          ))}
        </ul>
    </div>
  )
}

export default ListRender