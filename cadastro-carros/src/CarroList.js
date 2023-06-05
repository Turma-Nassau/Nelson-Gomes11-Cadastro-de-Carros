import React, { useEffect, useState } from 'react';
import { getCarros, updateCarro } from './api';

const CarroList = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetchCarros();
  }, []);

  const fetchCarros = async () => {
    try {
      const response = await getCarros();
      setCarros(response.data);
    } catch (error) {
      alert('Ocorreu um erro ao buscar os carros.');
    }
  };

  const handleUpdateCarro = async (id, carro) => {
    try {
      await updateCarro(id, carro);
      alert('Carro atualizado com sucesso!');
      fetchCarros();
    } catch (error) {
      alert('Ocorreu um erro ao atualizar o carro.');
    }
  };

  return (
    <div className="caixa-texto">
      <h2>Carros</h2>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            <div className="caixa-carro">
              {carro.marca} - {carro.modelo} ({carro.ano})
              <button onClick={() => handleUpdateCarro(carro.id, { ...carro, marca: 'Nova Marca' })}>
                Atualizar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default CarroList;
