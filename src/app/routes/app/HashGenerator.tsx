import Header from "../Header";
import TextArea from "../../../components/ui/forms/TextArea";
import CopyInput from "../../../components/ui/forms/CopyInput";

function HashGenerator() {
  return (
    <>
      <main className="bg-black text-white font-(family-name:--font-mono) flex flex-col gap-2 py-3 px-[20%]">
        <Header />
        <section className="p-2 flex flex-col gap-3">
          <h2>hash generator</h2>
          <form action="" className="flex flex-col gap-2">
            <TextArea label="Text" placeholder="input string to hash" />
            <CopyInput label="salt" placeholder="random salt" checkBox={true} />
            <CopyInput
              label="hashcode"
              placeholder="hashcode"
              checkBox={false}
            />
          </form>
        </section>
      </main>
    </>
  );
}

export default HashGenerator;
