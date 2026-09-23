import { unavailableCapability, type PuckCapabilities } from "@puck/capabilities";

export const desktopCapabilities: PuckCapabilities = {
  screen: unavailableCapability("Screen capture has not been wired to the native host."),
  audio: unavailableCapability("Audio has not been wired to the native host."),
  midi: unavailableCapability("MIDI has not been wired to the native host."),
};
