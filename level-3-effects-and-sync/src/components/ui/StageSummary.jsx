export function StageSummary({ items }) {
  return (
    <ul className="summary-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
