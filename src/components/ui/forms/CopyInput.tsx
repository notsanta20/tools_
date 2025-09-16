import { useState } from "react";
import copy from "../../../assets/copy.svg";
import copyToClipboard from "../../../utils/copyToClipboard";

function CopyInput({
  label,
  placeholder,
  value,
  copyValue,
}: {
  label: string;
  placeholder: string;
  value: string;
  copyValue: string;
}) {
  const [copyText, setCopyText] = useState("copy");

  return (
    <div className="flex flex-col gap-2 text-xs">
      <label htmlFor={label}>{label}</label>
      <div className="relative">
        <input
          type="text"
          name={label}
          id={label}
          placeholder={placeholder}
          disabled
          className="border-1 border-(--gray-dark) p-1.5 outline-none w-full"
          value={value}
        />
        <div className="absolute flex gap-1 justify-end w-[20px] h-[20px] top-[50%] translate-y-[-50%] right-[5px]">
          <img
            src={copy}
            alt="copy"
            className="w-[20px] h-[20px] hover:cursor-pointer"
            onClick={async () => {
              if (copyValue != "") {
                await copyToClipboard(copyValue);
                setCopyText("copied");
                setInterval(() => {
                  setCopyText("copy");
                }, 3000);
              }
            }}
          />
          <p className="hover:cursor-default">{copyText}</p>
        </div>
      </div>
    </div>
  );
}

export default CopyInput;
