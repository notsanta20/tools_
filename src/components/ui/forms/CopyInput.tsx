import Checkbox from "./CheckBox";

function CopyInput({
  label,
  placeholder,
  checkBox,
}: {
  label: string;
  placeholder: string;
  checkBox: boolean;
}) {
  return (
    <div className="text-white flex flex-col gap-2 text-xs">
      <div className="flex items-center gap-2">
        <label htmlFor={label}>{label}</label>
        <Checkbox label={label} />
      </div>
      <input
        type="text"
        name={label}
        id={label}
        placeholder={placeholder}
        disabled
        className="border-1 border-(--gray-dark) p-1.5 outline-none"
      />
    </div>
  );
}

export default CopyInput;
