import { unavailableCapability, type PuckCapabilities } from "@puck/capabilities";

export const browserCapabilities: PuckCapabilities = {
  screen: unavailableCapability("Screen capture is not part of the browser baseline."),
  audio: unavailableCapability("Audio capture will be implemented after iPhone testing."),
  midi: unavailableCapability("MIDI output is not part of the browser baseline."),
};
