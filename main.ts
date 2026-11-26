// Deadpan Forecasts for Cities That Do Not Exist — u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// The program writes a single deadpan weather forecast for a city that does
// not exist, in the flat tone of a TV meteorologist reading off the map.
// The line: overnight in Drizzlewick, rain falls upwards and the wind brings
// the smell of somebody else's laundry in from the east. Absurd, yet delivered
// like an ordinary overnight forecast, with concrete numbers (3 degrees, 90%)
// and a vivid detail that makes the invented place feel real.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Overnight in Drizzlewick, a low of 3 degrees, a 90% chance of rain falling upwards, and light winds bringing the smell of somebody else's laundry from the east.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
