function SubmitButton({ label }: { label: string }) {
  return (
    <input
      type="submit"
      id={label}
      value={label}
      className="border-1 border-(--gray-dark) py-2 px-4 bg-black hover:bg-(--gray-dark) hover:cursor-pointer text-sm"
    />
  );
}

export default SubmitButton;
