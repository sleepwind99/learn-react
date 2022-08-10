import React, {useState} from "react";

const Input = () =>{
  const [txtValue, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" value={txtValue} onChange={onChange}/>
      <br />
      <p>{txtValue}</p>
    </div>
  );
}
export default Input;
