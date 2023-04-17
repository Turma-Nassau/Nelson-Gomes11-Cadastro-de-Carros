const CrudService = require('../services/CrudService');

module.exports = {
    buscarTodos: async (req, res)=> {
        let json = {error:'', result:[]};

        let crud = await CrudService.buscarTodos();

        for(let i in crud){
            json.result.push({
                id: crud[i].id,
                nome: crud[i].nome,
                email: crud[i].email,
                cidade: crud[i].cidade,
                nascimento: crud[i].nascimento,
                sexo: crud[i].sexo
            });
        }
        res.json(json);
    }
}
