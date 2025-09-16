import Header from "../Header";
import GenerateHash from "./GenerateHash";
import VerifyHash from "./VerifyHash";

function HashGenerator() {
  return (
    <>
      <main className="flex flex-col gap-4 h-full">
        <Header />
        <h2 className="px-2 font-semibold">hash generator</h2>
        <GenerateHash />
        <VerifyHash />
      </main>
    </>
  );
}

export default HashGenerator;
