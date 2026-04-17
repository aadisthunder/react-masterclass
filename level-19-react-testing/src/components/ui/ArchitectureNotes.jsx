const notes = [
  'Keep page-level orchestration in features, not in App.jsx.',
  'Move API calls into services before the project grows.',
  'Build reusable UI in components/ui and keep feature UI local.',
  'Handle loading, empty, success, and error states explicitly.',
];

export function ArchitectureNotes() {
  return (
    <section className="notes">
      <div className="notes__header">
        <p className="eyebrow">Architecture Notes</p>
        <h2>Production rules for this level</h2>
      </div>
      <ul className="summary-list">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
