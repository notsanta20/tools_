import Header from "./Header";

function Home() {
  return (
    <main className="bg-black text-white font-(family-name:--font-mono) flex flex-col gap-2 py-3 px-[20%] h-screen">
      <Header />
      <section className="p-2 flex-auto flex justify-center items-center">
        home of tools
      </section>
    </main>
  );
}

export default Home;
