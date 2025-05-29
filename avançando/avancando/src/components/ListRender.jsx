import { useState } from "react"

const ListRender = () => {
    const [List] = useState(["Maria", "Pedro", "João", "Marta"]);

  return (
    <div>
        <ul>
            {List.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender