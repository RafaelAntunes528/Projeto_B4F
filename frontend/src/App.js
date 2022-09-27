import './App.css';
import UsersBoard from './components/users';

function App() {
  return (
    <>
    <div className='Mae'>
    <div className='A'>
      <input className='input'></input>
      <select className='select'></select>
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
