import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

function update(){
  let DateObj = new Date();
  let hours = DateObj.getHours();
  let minutes = DateObj.getMinutes();
  let seconds = DateObj.getSeconds();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  var taskClock = document.getElementById('clock');
  if (taskClock) {
    taskClock.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setTimeout(update, 1000);
}
update();


const apiUrl = 'https://api.github.com/users/romavolosh';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    var gitUrl = document.getElementById('git_url');
    gitUrl.textContent = data.html_url;
    var gitUsername = document.getElementById('git_username');
    gitUsername.textContent = data.login;
    var gitBio = document.getElementById('git_bio');
    gitBio.textContent = data.bio || 'No bio available';
    var gitRepos = document.getElementById('git_repos');
    gitRepos.textContent = data.public_repos || 'No public repositories';
    var gitFollowers = document.getElementById('git_followers');
    gitFollowers.textContent = data.followers || 'No followers';
    var gitFollowing = document.getElementById('git_following');
    gitFollowing.textContent = data.following || 'Not following anyone';
    var gitName = document.getElementById('git_name');
    gitName.textContent = data.name || 'No name available';
    var gitLocation = document.getElementById('git_location');
    gitLocation.textContent = data.location || 'No location available';
  })
  .catch(error => {
    console.error('Error:', error);
  });



function dragMoveListener(event) {
  var target = event.target;
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  target.style.transform = "translate(" + x + "px, " + y + "px)";
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}
window.dragMoveListener = dragMoveListener;

interact(".terminalWindow")
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;

        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = "translate(" + x + "px," + y + "px)";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: "body",
      }),
      interact.modifiers.restrictSize({
        min: { width: 350, height: 150 },
      }),
    ],
    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "body",
        endOnly: true,
      }),
    ],
  });

interact('.contactWindow')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute('data-x')) || 0;
        var y = parseFloat(target.getAttribute('data-y')) || 0;

        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      },
    },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: 'body',
      }),
      interact.modifiers.restrictSize({
        min: { width: 200, height: 100 },
      }),
    ],
    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'body',
        endOnly: true,
      }),
    ],
  });

interact('.settingsWindow')
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute('data-x')) || 0;
        var y = parseFloat(target.getAttribute('data-y')) || 0;

        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      },
    },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: 'body',
      }),
      interact.modifiers.restrictSize({
        min: { width: 200, height: 100 },
      }),
    ],
    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'body',
        endOnly: true,
      }),
    ],
  });

interact(".githubWindow")
  .resizable({
    edges: { left: true, right: true, bottom: true, top: true },
    listeners: {
      move(event) {
        var target = event.target;
        var x = parseFloat(target.getAttribute("data-x")) || 0;
        var y = parseFloat(target.getAttribute("data-y")) || 0;

        target.style.width = event.rect.width + "px";
        target.style.height = event.rect.height + "px";

        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.transform = "translate(" + x + "px," + y + "px)";
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      },
    },
    modifiers: [
      interact.modifiers.restrictEdges({
        outer: "body",
      }),
      interact.modifiers.restrictSize({
        min: { width: 350, height: 150 },
      }),
    ],
    inertia: true,
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: "body",
        endOnly: true,
      }),
    ],
  });

document.getElementById("terminalBtn").addEventListener("click", function () {
  const terminal = document.querySelector(".terminalWindow");
  const taskbarBtn = document.querySelector(".taskbarBtn");
  if (terminal) {
    const isVisible = terminal.style.display === "block";
    terminal.style.display = isVisible ? "none" : "block";
    if (taskbarBtn) {
      taskbarBtn.style.backgroundColor = isVisible
        ? "transparent"
        : "rgba(255, 255, 255, 0.205)";
    }
  }
});

document.getElementById("terminalClose").addEventListener("click", function () {
  const terminal = document.querySelector(".terminalWindow");
  const taskbarBtn = document.querySelector(".taskbarBtn");
  if (terminal) terminal.style.display = "none";
  if (taskbarBtn) taskbarBtn.style.backgroundColor = "transparent";
});

document.getElementById("githubClose").addEventListener("click", function () {
  const githubWindow = document.querySelector(".githubWindow");
  const taskbarBtn = document.getElementById("githubBtn");
  if (githubWindow) githubWindow.style.display = "none";
  if (taskbarBtn) taskbarBtn.style.backgroundColor = "transparent";
});

document.getElementById('contactBtn').addEventListener('click', function () {
  const contactWindow = document.querySelector('.contactWindow');
  const contactBtn = document.getElementById('contactBtn');
  if (contactWindow) {
    const isVisible = contactWindow.style.display === 'block';
    contactWindow.style.display = isVisible ? 'none' : 'block';
    if (contactBtn) {
      contactBtn.style.backgroundColor = isVisible
        ? 'transparent'
        : 'rgba(255, 255, 255, 0.205)';
    }
  }
});

document.getElementById('contactClose').addEventListener('click', function () {
  const contactWindow = document.querySelector('.contactWindow');
  const contactBtn = document.getElementById('contactBtn');
  if (contactWindow) contactWindow.style.display = 'none';
  if (contactBtn) contactBtn.style.backgroundColor = 'transparent';
});

document.getElementById("githubBtn").addEventListener("click", function () {
  const githubWindow = document.querySelector(".githubWindow");
  const taskbarBtn = document.getElementById("githubBtn");
  if (githubWindow) {
    const isVisible = githubWindow.style.display === "block";
    githubWindow.style.display = isVisible ? "none" : "block";
    if (taskbarBtn) {
      taskbarBtn.style.backgroundColor = isVisible
        ? "transparent"
        : "rgba(255, 255, 255, 0.205)";
    }
  }
});

document
  .getElementById("terminal-input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const input = e.target.value.trim();
      const output = document.querySelector(".output");
      let response = "";

      if (input === "whoami") {
        response = "Roman Voloshyn";
      } else if (input === "help") {
        response = "Available commands: help, about, whoami, clear";
      } else if (input === "about") {
        response = "This is a portfolio web page.";
      } else if (input === "age") {
        response = "I am 18 years old.";
      } else if (input === "clear") {
        output.innerHTML = "";
        e.target.value = "";
        return;
      } else {
        response = "Unknown command";
      }

      output.innerHTML += `<div><span>&gt; ${input}</span><br>${response}</div>`;
      e.target.value = "";
    }
  });

document.getElementById('settingsBtn').addEventListener('click', function () {
  const settingsWindow = document.querySelector('.settingsWindow');
  const settingsBtn = document.getElementById('settingsBtn');
  if (settingsWindow) {
    const isVisible = settingsWindow.style.display === 'block';
    settingsWindow.style.display = isVisible ? 'none' : 'block';
    if (settingsBtn) {
      settingsBtn.style.backgroundColor = isVisible
        ? 'transparent'
        : 'rgba(255, 255, 255, 0.205)';
    }
  }
});

document.getElementById('settingsClose').addEventListener('click', function () {
  const settingsWindow = document.querySelector('.settingsWindow');
  const settingsBtn = document.getElementById('settingsBtn');
  if (settingsWindow) settingsWindow.style.display = 'none';
  if (settingsBtn) settingsBtn.style.backgroundColor = 'transparent';
});
const bgOptions = document.querySelectorAll('.bg-option');
bgOptions.forEach(function(option) {
  option.addEventListener('click', function() {
    const bg = option.getAttribute('data-bg');
    document.documentElement.style.backgroundImage = `url('./img/bg/${bg}')`;
    let winColor = 'rgba(0, 72, 124, 0.5)';
    let headerColor = 'rgba(0, 72, 124)';
    if (bg === 'blue-bg.svg') {
      winColor = 'rgba(0, 72, 124, 0.5)';
      headerColor = 'rgba(0, 72, 124)';
    }
    if (bg === 'green-bg.svg') {
      winColor = 'rgba(46, 204, 64, 0.5)';
      headerColor = 'rgba(46, 204, 64)';
    }
    if (bg === 'orange-bg.svg') {
      winColor = 'rgba(255, 152, 0, 0.5)';
      headerColor = 'rgba(255, 152, 0)';
    }
    document.querySelectorAll('.terminalWindow, .contactWindow, .settingsWindow').forEach(function(win) {
      win.style.backgroundColor = winColor;
    });
    document.querySelectorAll('.windowHeader').forEach(function(header) {
      header.style.backgroundColor = headerColor;
    });
  });
});
