function Input({
  label,
  placeholder,
  value,
}: {
  label: string;
  placeholder: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-xs">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        disabled
        className="border-1 border-(--gray-dark) p-1.5 outline-none"
        value={value}
      />
    </div>
  );
}

export default Input;
