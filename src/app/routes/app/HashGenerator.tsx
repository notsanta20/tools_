import Header from "../Header";
import GenerateHash from "./GenerateHash";
import VerifyHash from "./VerifyHash";

function HashGenerator() {
  return (
    <>
      <main className="font-(family-name:--font-mono) flex flex-col gap-2">
        <Header />
        <section className="p-2 flex flex-col gap-3">
          <h2 className="font-semibold">hash generator</h2>
          <GenerateHash />
          <VerifyHash />
        </section>
      </main>
    </>
  );
}

export default HashGenerator;
