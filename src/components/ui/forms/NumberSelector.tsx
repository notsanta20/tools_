function NumberSelector({
  label,
  min,
  max,
  value,
  changeFunc,
}: {
  label: string;
  min: number;
  max: number;
  value: number;
  changeFunc: Function;
}) {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <label htmlFor={label}>{label}</label>
      <input
        type="number"
        min={min}
        max={max}
        id={label}
        className="outline-none border-1 border-(--gray-dark) p-1"
        value={value}
        onChange={(e) => {
          changeFunc(e.target.value);
        }}
      />
    </div>
  );
}

export default NumberSelector;
