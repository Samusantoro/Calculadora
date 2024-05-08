export const Button = ({ label, id, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-zinc-800/100 p-4 rounded-md m-0.5 hover:bg-zinc-700"
    >
      {label}
    </button>
  );
};
