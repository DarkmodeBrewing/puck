export type ExecutionStatus =
  | "ACTIVE"
  | "WAITING"
  | "REVIEW"
  | "COMPLETED"
  | "FAILED"
  | "CLOSED";

export interface ExecutionSummary {
  id: string;
  title: string;
  status: ExecutionStatus;
}

export type ClientConnectionStatus = "CONNECTED" | "RECONNECTING" | "OFFLINE";
