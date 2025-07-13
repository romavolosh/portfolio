import interact from "https://cdn.interactjs.io/v1.9.20/interactjs/index.js";

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
