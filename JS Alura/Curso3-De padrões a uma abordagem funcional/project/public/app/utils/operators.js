
export const partialize = (fn, ...params) => fn.bind(null, ...params);

//reduzir a lista de funções a um valor apenas no final da direita para esquerda
export const compose = (...fns) => value =>
    fns.reduceRight((previousValue, fn) =>
        fn(previousValue), value);    

export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) =>
        fn(previousValue), value);  