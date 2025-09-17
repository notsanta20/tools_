function Footer() {
  const date: Date = new Date();
  const year: number = date.getFullYear();

  return (
    <footer className="border-t-2 border-(--gray-dark) p-2 flex">
      <h2 className="text-xs font-medium flex-auto text-(--gray-light)">
        Copyright (c) {year} made by santhosh.dev
      </h2>
    </footer>
  );
}

export default Footer;
