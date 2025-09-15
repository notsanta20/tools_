function TextArea({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className="text-white flex flex-col gap-2 text-xs">
      <label htmlFor={label}>{label}</label>
      <textarea
        name={label}
        id={label}
        placeholder={placeholder}
        className="border-1 border-(--gray-dark) p-1.5 outline-none"
        rows={3}
      />
    </div>
  );
}

export default TextArea;
