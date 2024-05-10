export const Button = ({ label, id, onClick, cor, tamanho }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`p-4 rounded-md m-0.5 hover:bg-zinc-700 ${cor === 'orange' ? 'bg-orange-600/85 hover:bg-orange-500/50' : 'bg-zinc-800'} ${tamanho === 'biggest' ? 'col-span-2'  :'col-span-1'} ${cor === 'lightgray' ? 'bg-zinc-700 hover:bg-zinc-500/50' : 'bg-zinc-800'}` }

    >
      {label}
    </button>
  );
};
