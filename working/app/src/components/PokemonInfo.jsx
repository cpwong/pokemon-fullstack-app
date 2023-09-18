import { PlusIcon, MinusIcon } from '@heroicons/react/outline';


export default function PokemonInfo({ pokemon }) {
  return (
    <div className='border rounded-lg text-center cursor-pointer transition hover:border-x-cyan-200 hover:border-y-purple-200 hover:shadow-lg'>
      <div className='p-1'>
        <div className='flex flex-row justify-center'>
          <img className='w-1/2' src={pokemon.imagefront} />
          <img className='w-1/2' src={pokemon.imageback} />
        </div>
        <h2 className='text-lg font-bold mb-1'>{pokemon.name}</h2>
        <small className='block mb-4'>{pokemon.quantity}</small>
      </div>
      <div className="border-t flex flex-row">
        <button className='flex items-center justify-center w-1/2 py-2 border-r font-bold transition hover:bg-slate-200'>
          <PlusIcon className='h-3 w-3' />
        </button>
        <button className='flex items-center justify-center w-1/2 py-2 font-bold transition hover:bg-slate-200'>
          <MinusIcon className='h-3 w-3' />
        </button>

      </div>
    </div>
  );
}
