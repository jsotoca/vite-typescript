export const pokemonids = [1,2,3,4];
pokemonids.push(5);
console.log(pokemonids)

export interface IPokemon {
    id: number,
    name: string,
    age?: number
}

export const balbusor: IPokemon = {
    id: 1,
    name: 'balbusor',
    age: 35
}

export const charmander: IPokemon = {
    id: 1,
    name: "charmander"
}

export const lista: IPokemon[] = [balbusor,charmander];
console.log(lista)

