import type { ExecutionStatus } from "@puck/domain";

const sections = ["Chat", "Agents", "Memory"] as const;

interface AppShellProps {
  platform: "web" | "desktop";
}

const statusLabel: Record<ExecutionStatus, string> = {
  ACTIVE: "Active",
  WAITING: "Waiting",
  REVIEW: "Review",
  COMPLETED: "Completed",
  FAILED: "Failed",
  CLOSED: "Closed",
};

export function AppShell({ platform }: AppShellProps) {
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <span className="brand-symbol" aria-hidden="true">✳</span>
          <span>Puck</span>
        </div>
        <span className="platform-label">{platform === "desktop" ? "Desktop" : "Web"}</span>
      </header>

      <div className="app-body">
        <nav aria-label="Primary navigation" className="navigation">
          {sections.map((section) => (
            <span aria-current={section === "Chat" ? "page" : undefined} className="navigation-item" key={section}>
              {section}
            </span>
          ))}
        </nav>

        <main className="main-content">
          <p className="eyebrow">Gremlin client · initial scaffold</p>
          <h1>A place to talk to the creature.</h1>
          <p className="intro">
            This shared shell runs in the browser and inside the desktop app.
            Conversations, agent sessions, and native actions will connect here in later slices.
          </p>
          <section aria-labelledby="scaffold-title" className="panel">
            <div className="panel-heading">
              <h2 id="scaffold-title">Integration status</h2>
              <span className="status">Not connected</span>
            </div>
            <p>No Gremlin API or local device capability is connected yet.</p>
            <p className="fine-print">Execution states reserved in the shared domain: {Object.values(statusLabel).join(" · ")}.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
