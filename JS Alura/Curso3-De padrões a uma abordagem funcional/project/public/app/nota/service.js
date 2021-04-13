import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose, pipe } from '../utils/operators.js';

const API = `http://localhost:3000/notas`;

const getItemsFromNotas = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo === code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);

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

    async sumItems(code) {
        const filterItems = partialize(filterItemsByCode, code);
        const sumItems = pipe(sumItemsValue, filterItems, getItemsFromNotas);
        return this.listAll().then(sumItems);
    }
};