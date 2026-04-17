import './styles/app.css';
import { SectionCard } from './components/ui/SectionCard.jsx';
import { StageSummary } from './components/ui/StageSummary.jsx';
import { ArchitectureNotes } from './components/ui/ArchitectureNotes.jsx';

const focusTopics = [
  "lazy-loaded routes",
  "heavy component splitting",
  "render optimization",
  "large list awareness",
  "image loading awareness"
];
const buildTargets = [
  "MediaLibrary",
  "AnalyticsPanel",
  "LazyRoutes",
  "PerformanceNotes",
  "MediaDetail"
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Level 18 - Performance and Route Optimization</p>
        <h1>Media content dashboard</h1>
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
