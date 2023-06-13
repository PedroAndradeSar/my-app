import React from 'react' ;

const UserInfoProps = () => {
  const arrayItens = [
    {
      name: "Teste nome",
      birthday: "10/10/10",
      email: "teste@teste.com",
    },
    {
      name: "Teste nome 2",
      birthday: "10/10/10",
      email: "teste2@teste.com",
    },
    {
      name: "Teste nome 3",
      birthday: "10/10/10",
      email: "teste3@teste.com",
    },
  ];

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
          {arrayItens.map((item, index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{item.name}</td>
              <td>{item.birthday}</td>
              <td>
                <a>{item.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInfoProps;