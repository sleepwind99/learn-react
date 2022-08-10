import React, {useState} from "react";

const Input = () =>{
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    tel: ""
  });

  const {name, email, tel} = inputs;

  const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    setInputs({
      ...inputs,
      [id]: value
    })
  }

  return (
    <div>
      <div>
        <label>이름</label>
        <input type="text" id="name" value={name} onChange={onChange}/>
      </div>
      <div>
        <label>email</label>
        <input type="text" id="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>전화번호</label>
        <input type="tel" id="tel" value={tel} onChange={onChange} />
      </div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Tel: {tel}</p>
    </div>
  );
}
export default Input;
