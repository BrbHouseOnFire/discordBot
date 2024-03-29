# Administrative Discord Server Bot
## Commands to Implement
- Administrative
  - Help
  - Live / Streaming announcements
  - Bot Status/stats - track time online, number of commands received, and by whom.
  - Kick/Ban
  - Add/remove permission template(s)
  - Mute/Deafen
  - Server/Channel stats
  - 
  - Kickoff Airhorn for specific scenarios.
    - User joins the server: /among Report
    - Something concerning? /among Role
    - Get everyone's attention: /gavel
    - Hooray: /birthday confetti
  - 
- Entertainment
  - youtube search
  - imgur random viral
  - reddit search
  - Quote recording
  - set fire
  - Extinguish for owner.
  - Among Us Sus/Not
  - GIF options, (Dog, cat, kitty, kitten, puppy, puppers)
  - non-command help interjection
  - laugh interjection: lol/ha/haha, etc
## Structural Changes to Implement
- Breakout message interpreter into separate file
- Modular breakout of commands for classification purposes
- Limit command responses to specific channels. Change command channel response to other channels based on content.
- Expanded reply styling (colors, indentation, quoting)

## Implemented Commands:
- Administrative
  - Unhelpful Help Placeholder.
- Entertainment
  - Magic 8 ball
  - Fire Status
  - Extinguish for non-owner.
  - Who am I?
  - Who did this?
  - Who are you?
  - wat interjection
  - MTheShark current dating status

### Additional implemented features/notes:
- Filter out queries and messages from other bots.
- Case-sensitivity for text commands.
- Trim space(s) from the beginning of commands-post prefix
### Known issues/fixes/enhancements to make:
- https://www.youtube.com/watch?v=o6E1xFiyfHw
- https://github.com/Malexion/Rhythm-Bot

### Resources:
- https://discord.js.org/#/docs/main/stable/class/Client
- https://discordjs.guide/event-handling/#individual-event-files
- https://leovoel.github.io/embed-visualizer/
- https://gist.github.com/smiley/78c1c2a57d17a179a978a1438b389710
- https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-
- https://www.alphr.com/discord-change-text-color/
