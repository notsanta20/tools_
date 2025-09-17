function ErrorPage() {
  return (
    <main className="flex flex-col gap-2 h-full">
      <section className="p-2 flex-auto flex flex-col gap-2 justify-center items-center">
        <h2 className="text-4xl">error 404</h2>
        <p className="text-sm">page not found</p>
      </section>
    </main>
  );
}

export default ErrorPage;
