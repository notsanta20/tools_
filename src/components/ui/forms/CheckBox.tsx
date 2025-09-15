function Checkbox({ label }: { label: string }) {
  return (
    <input
      type="checkbox"
      name={label + "check-box"}
      id={label + "check-box"}
    />
  );
}

export default Checkbox;
