---
title: How to Add Inspect Element Back to Discord
authors: [npgy]
tags: [tech, discord]
hide_table_of_contents: true
---

Discord recently updated their desktop client and you can no longer open the developer tools panel, more commonly known as inspect element. Here's a guide on how to get that functionality back.

<!--truncate-->

## The Solution
:::tip On Windows, a quick way to access folder locations is by using the `Win`+`R` keyboard shortcut and entering in the location.  
On macOS, use the `⌘`+`Shift`+`G` shortcut.  
On Linux, you can plug a folder location into your file explorer.
:::
1. Close Discord, then navigate to its local user settings. This step differs depending on the operating system you use. Below are the directories you will need to access:
    - Windows: `%appdata%/discord/`
    - macOS: `~/Library/Application Support/discord`
    - Linux: `~/.config/discord`

2. Inside the `discord` folder you just navigated to, there will be a file called `settings.json`. Edit that in your preferred text editor.
    - Add this line to the end of the file: `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true`  

The whole file should look something like this once you've added that line:
```json
{
"BACKGROUND_COLOR": "#202225",
"IS_MAXIMIZED": true,
"IS_MINIMIZED": false,
"WINDOW_BOUNDS": {
    "x": 3023,
    "y": 405,
    "width": 1280,
    "height": 720
},
"OPEN_ON_STARTUP": false,
"MINIMIZE_TO_TRAY": false,
"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
}
```
  
:::tip Opening the developer tools panel in Discord
Windows/Linux: `Ctrl`+`Shift`+`I`  
macOS: `⌘`+`Option`+`I`
:::

Save the file and open Discord. Now you should be able to open the developer tools panel!

Have fun editing your friend's messages in the Discord desktop client!