import Header from "./Header";

function Home() {
  return (
    <main className="flex flex-col gap-2 h-full">
      <Header />
      <section className="p-2 flex-auto flex justify-center items-center">
        home of tools
      </section>
    </main>
  );
}

export default Home;
