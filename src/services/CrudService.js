const db = require('../db');

module.exports = {
    buscarTodos: ()=>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM dbapicrud.cadastro', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM dbapicrud.cadastro WHERE id = ?', [id], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results,length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);    
                }
            });
        });
    },
    inserir: (nome, email, cidade, nascimento, sexo) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO dbapicrud.cadastro (nome, email, cidade, nascimento, sexo) VALUES (?, ?, ?, ?, ?', 
            [nome, email, cidade, nascimento, sexo],
            (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.inserirId);  
                }
            );    
        });
    }
};