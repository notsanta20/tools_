function ClearButton({ label, func }: { label: string; func: Function }) {
  return (
    <input
      type="button"
      id={label}
      value={label}
      onClick={() => {
        func();
      }}
      className="border-1 border-(--gray-dark) py-2 px-4 bg-black hover:bg-(--gray-dark) hover:cursor-pointer text-sm"
    />
  );
}

export default ClearButton;
