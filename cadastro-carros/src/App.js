import React from 'react';
import CarroForm from './CarroForm';
import CarroList from './CarroList';

const App = () => {
    return (
      <div className="container">
        <h1 className="titulo">Cadastro de Carros</h1>
      <CarroForm />
      <CarroList />
    </div>  
  );
};

export default App;
