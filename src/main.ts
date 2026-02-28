import { Command } from "commander";
import { registerTimerCommands } from "./commands/timer.js";
import { registerProjectsCommand } from "./commands/projects.js";
import { registerEntriesCommand } from "./commands/entries.js";
import { registerReportCommand } from "./commands/report.js";
import { registerTeamsCommand } from "./commands/teams.js";
import { registerActivitiesCommand } from "./commands/activities.js";

const program = new Command();

program
  .name("timing")
  .description("CLI for the Timing app API")
  .version("1.0.0")
  .option("--format <format>", "Output format (json|table)", "json")
  .option("--timezone <tz>", "Timezone for date interpretation (e.g. America/New_York)");

registerTimerCommands(program);
registerProjectsCommand(program);
registerEntriesCommand(program);
registerReportCommand(program);
registerTeamsCommand(program);
registerActivitiesCommand(program);

program.parse();
