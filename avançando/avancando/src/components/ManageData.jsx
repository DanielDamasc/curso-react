import { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(10); 

  return (
    <div>
        <p>{number}</p>
        <button onClick={() => {setNumber(20)}}>Mudar o State</button>
    </div>
  );
};

export default ManageData;