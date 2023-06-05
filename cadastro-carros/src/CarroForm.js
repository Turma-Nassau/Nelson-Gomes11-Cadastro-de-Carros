import React, { useState } from 'react';
import { createCarro } from './api';

const CarroForm = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCarro({ marca, modelo, ano });
      alert('Carro salvo com sucesso!');
      setMarca('');
      setModelo('');
      setAno('');
    } catch (error) {
      alert('Ocorreu um erro ao salvar o carro.');
    }
  };
  return (
    <div className="container">
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
          className="input-form"
        />
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
          className="input-form"
        />
        <input
          type="number"
          placeholder="Ano"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          required
          className="input-form"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );  
};

export default CarroForm;
