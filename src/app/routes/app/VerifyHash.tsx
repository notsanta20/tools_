import { useState } from "react";
import { useForm } from "react-hook-form";
import type { verifyHashType } from "../../../types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { verifyHashSchema } from "../../../schema/schema";
import { verifyHash } from "../../../utils/hashGenerator";
import TextArea from "../../../components/ui/forms/TextArea";
import Input from "../../../components/ui/forms/Input";
import SubmitButton from "../../../components/ui/forms/SubmitButton";
import ClearButton from "../../../components/ui/forms/ClearButton";

function VerifyHash() {
  const [hash, setHash] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [verify, setVerify] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<verifyHashType>({
    resolver: zodResolver(verifyHashSchema),
  });

  async function onFormSubmit(formData: verifyHashType) {
    try {
      setLoad(true);
      const verify = await verifyHash(formData.text, formData.hash);

      verify ? setVerify("Matching") : setVerify("Not matching");
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }

  function clearGenerator() {
    setText("");
    setHash("");
  }

  return (
    <section className="p-2 flex flex-col gap-3 border-1 border-(--gray-dark)">
      <h3 className="font-medium">verify hash</h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextArea
          label="text"
          placeholder="add text to verify"
          register={register}
          error={errors.text}
          value={text}
          setValue={setText}
        />
        <TextArea
          label="hash"
          placeholder="add hash to verify"
          register={register}
          error={errors.hash}
          value={hash}
          setValue={setHash}
        />
        <Input label="verify hash" placeholder="verify hash" value={verify} />
        <div className="grid grid-cols-2 gap-2">
          <SubmitButton label={load ? "loading" : "verify hash"} />
          <ClearButton label="clear" func={clearGenerator} />
        </div>
      </form>
    </section>
  );
}

export default VerifyHash;
