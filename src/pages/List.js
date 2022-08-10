import React from "react";

const User = ({userData}) =>{
  return (
    <tr>
      <td>{userData.name}</td>
      <td>{userData.email}</td>
    </tr>
  );
}

const UserList = () => {
  const users = [
    {email: 'kim@gmail.com', name: '김하늘'},
    {email: 'park@gmail.com', name: '박민호'},
    {email: 'ji@gmail.com', name: '지수'},
    {email: 'gag@gmail.com', name: '강하나'}
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>이름</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <User userData={user}/>)}
      </tbody>
    </table>
  );
}

export default UserList;