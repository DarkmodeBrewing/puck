import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppShell } from "@puck/ui";
import "@puck/ui/styles.css";
import { desktopCapabilities } from "./platform";

// Tauri commands will be bound only when each native feature is implemented.
void desktopCapabilities;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppShell platform="desktop" />
  </StrictMode>,
);
