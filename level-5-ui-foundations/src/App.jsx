import './styles/app.css';
import { SectionCard } from './components/ui/SectionCard.jsx';
import { StageSummary } from './components/ui/StageSummary.jsx';
import { ArchitectureNotes } from './components/ui/ArchitectureNotes.jsx';

const focusTopics = [
  "reusable UI primitives",
  "component API design",
  "composition",
  "shared form wrappers"
];
const buildTargets = [
  "Button",
  "Input",
  "Card",
  "Modal",
  "Badge"
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Level 5 - Reusable UI System</p>
        <h1>Internal design system starter</h1>
        <p className="hero-copy">
          This starter follows a production-minded React structure with feature-first folders,
          reusable UI, and clear boundaries for future Node.js integration.
        </p>
      </header>

      <section className="grid">
        <SectionCard title="Focus Topics">
          <StageSummary items={focusTopics} />
        </SectionCard>

        <SectionCard title="Build Targets">
          <StageSummary items={buildTargets} />
        </SectionCard>
      </section>

      <ArchitectureNotes />
    </main>
  );
}
