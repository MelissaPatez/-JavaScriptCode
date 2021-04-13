import { handleStatus } from '../utils/promise-helpers.js';

const API = `http://localhost:3000/notas`;

const sumItems = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0)

export const notasService = {
    async listAll() {
        try {
            const res = await fetch(API);
            return handleStatus(res);
        } catch (err) {
            // a responsável pelo logo é do serviço
            console.log(err);
            return await Promise.reject('Não foi possível obter as notas fiscais');
        }
    },
    sumItems(code) {

        return this.listAll().then(sumItems(code));
    }
};