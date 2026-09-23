import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppShell } from "@puck/ui";
import "@puck/ui/styles.css";
import { browserCapabilities } from "./platform";

// Keep the browser adapter explicit even before device workflows use it.
void browserCapabilities;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppShell platform="web" />
  </StrictMode>,
);
