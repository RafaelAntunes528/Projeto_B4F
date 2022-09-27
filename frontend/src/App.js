import './App.css';
import Formulario from './components/formulario';
import UsersBoard from './components/users';
/* function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
      </div>

  } */
function App() {
  return (
    <>
    <div className='Mae'>
    <div className='A'>
      <input className='input'></input>
      <select className='select'>
        <option value="0"></option>
      <option value="1">Aprovado</option>
      <option value="2">Reprovado</option>
    </select>
    </div>
    <div className='container'>
    <div className='P'>
      <div className="App">
        <UsersBoard nome="Rafa Gostoso" idade="19 anos" nif="123456789" status="Aprovado"/>
      </div>
      <div className="App">
        <UsersBoard nome="Ginger" idade="18 anos" nif="123456789" status="Reprovado"/>
      </div>
    </div>
    <div className='P'>
      <div className="App">
        <UsersBoard nome="Maria" idade="21 anos" nif="123456789" status="Reprovado"/>
      </div>
      <div className="App">
        <UsersBoard nome="Babs" idade="22 anos" nif="123456789" status="Aprovado"/>
      </div>
    </div>
    </div>
    </div>
    </>
    
    
  );
}

export default App;
