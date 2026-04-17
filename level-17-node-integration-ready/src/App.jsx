import './styles/app.css';
import { SectionCard } from './components/ui/SectionCard.jsx';
import { StageSummary } from './components/ui/StageSummary.jsx';
import { ArchitectureNotes } from './components/ui/ArchitectureNotes.jsx';

const focusTopics = [
  "request and response contracts",
  "payload shaping",
  "auth headers",
  "backend validation errors",
  "status-driven UI"
];
const buildTargets = [
  "OrdersPage",
  "OrderDetail",
  "StatusUpdateForm",
  "CustomerSummary",
  "ApiErrorMap"
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">Level 17 - Backend-Ready Integration Patterns</p>
        <h1>Order management frontend</h1>
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
