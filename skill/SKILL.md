---
name: timing
description: Track time using the Timing app — start/stop timers, manage projects, create entries, generate reports
allowed_tools:
  - Bash
---

# Timing Time Tracker

You manage time tracking via the `timing` CLI. The CLI wraps the Timing app API and should be on the user's PATH.

## Prerequisites
- `TIMING_API_TOKEN` must be set in the environment

## Output
- Default output is **JSON** (machine-readable). Use `--format table` only when the user asks for human-readable output.
- Always parse JSON output to extract relevant info before presenting to the user.

## Commands

### Timer (top-level shortcuts)
```bash
# Start a timer
timing start --project <id> --title "Task name" --notes "Details"

# Stop the running timer
timing stop

# Check what's running
timing running

# Get the latest entry
timing latest
```

### Projects
```bash
timing projects list [--hide-archived] [--team-id <id>] [--all-pages]
timing projects hierarchy [--hide-archived]
timing projects get <id>
timing projects create --title "Name" [--color "#FF0000"] [--parent <ref>] [--notes "..."]
timing projects update <id> [--title "New name"] [--archived]
timing projects delete <id>
```

### Time Entries
```bash
timing entries list [--from YYYY-MM-DD] [--to YYYY-MM-DD] [--project <ref>...] [--search <q>] [--all-pages]
timing entries get <id>
timing entries create --start "ISO8601" --end "ISO8601" [--project <id>] [--title "..."]
timing entries update <id> [--title "..."] [--project <ref>]
timing entries delete <id>
timing entries batch-update --ids <id1> <id2> [--project <ref>] [--billing <status>]
```

### Reports
```bash
timing report --from YYYY-MM-DD --to YYYY-MM-DD [--columns col1 col2] [--group-by field] [--timespan day|week|month]
```

### Teams
```bash
timing teams list
timing teams members <teamId>
```

### Activities
```bash
timing activities --start "ISO8601" --end "ISO8601" [--block-size <seconds>]
```

## Global Options
- `--format json|table` — output format (default: json)
- `--timezone <tz>` — timezone for date interpretation (e.g. America/New_York)

## Common Workflows

### "Start tracking time on project X"
1. `timing projects list` — find the project ID
2. `timing start --project <id> --title "Description"`

### "What did I work on today?"
```bash
timing entries list --from $(date +%Y-%m-%d) --to $(date +%Y-%m-%d)
```

### "How much time on project X this week?"
```bash
timing report --from <monday> --to <friday> --project <id>
```

### "Stop and log what I was doing"
```bash
timing stop
```

## Notes
- Project references: use the numeric ID (the CLI auto-expands to `/api/v1/projects/<id>`)
- Billing statuses: `undetermined`, `not_billable`, `billable`, `billed`, `paid`
- The API has a 500 req/hour rate limit
