import { useState } from 'react';
import { Dashboard, Login, Protected, About, Blog, ListKontak } from './components';


function App() {

  const [name, setname] = useState('ronny')

  return (
    <>
      <Dashboard/>
      <Login/>
      <Protected/>
      <About/>
      <Blog/>
      <ListKontak name={name}/>
    </>
  );
}

export {Dashboard,Login, Protected, About, Blog, ListKontak}
