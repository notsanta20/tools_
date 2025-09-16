import type { FieldError } from "react-hook-form";

function TextArea({
  label,
  placeholder,
  value,
  setValue,
  register,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: Function;
  register: Function;
  error: FieldError | undefined;
}) {
  return (
    <div className="text-white flex flex-col gap-2 text-xs">
      <div className="flex gap-2">
        <label htmlFor={label}>{label}</label>
        <div className="text-red-700">
          {typeof error == "undefined" ? "" : error.message}
        </div>
      </div>
      <textarea
        {...register(label)}
        placeholder={placeholder}
        className="border-1 border-(--gray-dark) p-1.5 outline-none"
        rows={3}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default TextArea;
