#!/usr/bin/env node

const yargs = require("yargs");

const { argv } = yargs(process.argv)

const printFiveMoves = async (pokemonName)=> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const pokemon = await res.json()
    const moves = pokemon.moves.map(({move}) => move.name)
    console.log(moves.slice(0, 5))
};

printFiveMoves(argv.pokemon)

/** charles-pokedex --pokemon=charmander
 * outputs:
 * [
  'mega-punch',
  'fire-punch',
  'thunder-punch',
  'scratch',
  'swords-dance'
]
 *
 * charles-pokedex --pokemon=mew
 * outputs:
 * [ 'pound', 'mega-punch', 'pay-day', 'fire-punch', 'ice-punch' ]
**/