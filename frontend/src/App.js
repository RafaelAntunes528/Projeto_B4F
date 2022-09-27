import './App.css';
<<<<<<< HEAD
import Formulario from './components/formulario';

function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
=======
import UsersBoard from './components/users';

function App() {
  return (
    <>
    <div className='Mae'>
    <div className='A'>
      <input className='input'></input>
      <select className='select'></select>
>>>>>>> e7750e488027610788d11d256af94a1d9ef170ba
    </div>
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
    </>
    
    
  );
}

export default App;
