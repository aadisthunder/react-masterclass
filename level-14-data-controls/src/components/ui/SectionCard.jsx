export function SectionCard({ title, children }) {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <h2>{title}</h2>
      </div>
      <div className="section-card__body">{children}</div>
    </section>
  );
}
