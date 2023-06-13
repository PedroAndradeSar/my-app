import React from 'react' ;

const UserInfo = (props) => {

  return (
    <div>
      <h4 >Usuários</h4>
      <table >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.birthday}</td>
            <td>{props.email}</td>
          </tr>

        
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;
