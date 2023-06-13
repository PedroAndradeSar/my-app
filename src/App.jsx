import './App.css';
import UserInfo from './UserInfo';
import React from 'react' ;


function App() {

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
    <div className="App">
      <header className="App-header">
        {
          arrayItens.map((index) => {
            return(
            <UserInfo name={index.name} birthday={index.birthday} email={index.email}/>
          )
        })
      }
      </header>
    </div>
  );
}

export default App;
