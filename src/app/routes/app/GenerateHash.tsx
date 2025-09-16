import { useState } from "react";
import { useForm } from "react-hook-form";
import type { generateHashType } from "../../../types/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { generatorSchema } from "../../../schema/schema";
import { generateHash } from "../../../utils/hashGenerator";
import TextArea from "../../../components/ui/forms/TextArea";
import CopyInput from "../../../components/ui/forms/CopyInput";
import SubmitButton from "../../../components/ui/forms/SubmitButton";
import ClearButton from "../../../components/ui/forms/ClearButton";
import copyToClipboard from "../../../utils/copyToClipboard";

function GenerateHash() {
  const [hash, setHash] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<generateHashType>({
    resolver: zodResolver(generatorSchema),
  });

  async function onFormSubmit(formData: generateHashType) {
    try {
      setLoad(true);
      const getHash: string = await generateHash(formData.text);
      setHash(getHash);
      setLoad(false);
    } catch (e) {
      console.log(e);
    }
  }

  function clearGenerator() {
    setText((t) => (t = ""));
    setHash((h) => (h = ""));
  }

  function copyHash() {
    copyToClipboard(hash);
  }

  return (
    <section className="p-2 flex flex-col gap-3 border-1 border-(--gray-dark)">
      <h3 className="font-medium">generate hash</h3>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <TextArea
          label="text"
          placeholder="add text to hash"
          register={register}
          error={errors.text}
          value={text}
          setValue={setText}
        />
        <CopyInput
          label="hashcode"
          placeholder="hashcode"
          value={hash}
          copyValue={hash}
        />
        <div className="grid grid-cols-2 gap-2">
          <SubmitButton label={load ? "loading" : "generate hash"} />
          <ClearButton label="clear" func={clearGenerator} />
        </div>
      </form>
    </section>
  );
}

export default GenerateHash;
