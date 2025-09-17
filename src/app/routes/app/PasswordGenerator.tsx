import { useEffect, useState } from "react";
import CopyInput from "../../../components/ui/forms/CopyInput";
import passwordGenerator from "../../../utils/passwordGenerator";
import NumberSelector from "../../../components/ui/forms/NumberSelector";
import type { passwordSize } from "../../../types/type";
import ClearButton from "../../../components/ui/forms/ClearButton";

function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [size, setSize] = useState<passwordSize>({
    total: 16,
    num: 0,
    symbol: 0,
  });

  useEffect(() => {
    const generatedPass: string = passwordGenerator(
      size.total,
      size.num,
      size.symbol
    );
    setPassword(generatedPass);
  }, []);

  function updateTotalSize(num: number) {
    setSize({
      ...size,
      total: num,
    });
    const generatedPass: string = passwordGenerator(num, size.num, size.symbol);
    setPassword(generatedPass);
  }

  function updateNumSize(num: number) {
    setSize({
      ...size,
      num: num,
    });
    const generatedPass: string = passwordGenerator(
      size.total,
      num,
      size.symbol
    );
    setPassword(generatedPass);
  }

  function updateSymbolSize(num: number) {
    setSize({
      ...size,
      symbol: num,
    });

    const generatedPass: string = passwordGenerator(size.total, size.num, num);
    setPassword(generatedPass);
  }

  function genPass() {
    const generatedPass: string = passwordGenerator(
      size.total,
      size.num,
      size.symbol
    );
    setPassword(generatedPass);
  }

  return (
    <>
      <main className="font-(family-name:--font-mono) flex-auto flex flex-col gap-2">
        <section className="p-2 flex flex-col gap-3">
          <h2 className="font-semibold">password generator</h2>
          <section className="p-2 flex flex-col gap-3 border-1 border-(--gray-dark)">
            <CopyInput
              label="password"
              placeholder="password"
              value={password}
              copyValue={password}
            />
            <div className="grid grid-cols-3 gap-2">
              <NumberSelector
                label="length"
                min={12}
                max={100}
                value={size.total}
                changeFunc={updateTotalSize}
              />
              <NumberSelector
                label="minimum numbers"
                min={0}
                max={4}
                value={size.num}
                changeFunc={updateNumSize}
              />
              <NumberSelector
                label="minimum symbols"
                min={0}
                max={4}
                value={size.symbol}
                changeFunc={updateSymbolSize}
              />
            </div>
            <ClearButton label="re-generate" func={genPass} />
          </section>
        </section>
      </main>
    </>
  );
}

export default PasswordGenerator;
