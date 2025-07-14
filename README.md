# Portfolio Desktop Web App

This is a desktop-style portfolio web application built with HTML, CSS, and JavaScript. The UI mimics a desktop environment with draggable and resizable windows, a taskbar, and interactive terminal and settings features.

## Features

- **Taskbar** with buttons to open Terminal, Contact, Settings, and GitHub windows
- **Draggable and resizable windows** (Terminal, Contact, Settings, GitHub)
- **Terminal window** with simple command emulation (`whoami`, `help`, `about`, `age`, `clear`)
- **Contact window** with contact information
- **Settings window** to change the background and window colors
- **GitHub window** showing user info from the GitHub API
- **Responsive design** and modern UI

## Usage

1. Clone or download the repository.
2. Open `public/index.html` in your browser.
3. Use the taskbar to open different windows. Drag and resize windows as needed.
4. Change the background and window color in the Settings window.
5. Use the Terminal window to enter supported commands.

## Project Structure

```
public/
  index.html         # Main HTML file
  style.css          # Styles for desktop UI and windows
  script.js          # Main JS logic (window management, API, terminal)
  img/
    bg/              # Background images
    icons/           # Icons for windows and taskbar
server.js            # (Optional) Node.js server for deployment
package.json         # (Optional) For Node.js server
```

## Supported Terminal Commands

- `whoami` — Shows your name
- `help` — Lists available commands
- `about` — Shows info about the project
- `age` — Shows your age
- `clear` — Clears the terminal output

## Customization

- Add new backgrounds to `public/img/bg/` and update the Settings window.
- Update contact info in the Contact window in `index.html`.
- Change GitHub username in `script.js` to show your own profile.

## License

This project is open source and free to use for personal portfolios.
