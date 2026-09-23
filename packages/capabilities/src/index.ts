export type CapabilityAvailability =
  | { available: true }
  | { available: false; reason: string };

export interface ScreenCapability {
  availability(): Promise<CapabilityAvailability>;
}

export interface AudioCapability {
  availability(): Promise<CapabilityAvailability>;
}

export interface MidiCapability {
  availability(): Promise<CapabilityAvailability>;
}

export interface PuckCapabilities {
  screen: ScreenCapability;
  audio: AudioCapability;
  midi: MidiCapability;
}

export function unavailableCapability(reason: string): {
  availability(): Promise<CapabilityAvailability>;
} {
  return { availability: async () => ({ available: false, reason }) };
}
