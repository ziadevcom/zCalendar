const days = document.querySelector(".days"),
  previousMonthUI = document.querySelector(".previous"),
  nextMonthUI = document.querySelector(".next"),
  currentMonthUI = document.querySelector(".reset"),
  addUserNameUI = document.getElementById("enter-user"),
  saveTaskButtonUI = document.querySelector(".add-new-event"),
  tasksTimelineUI = document.querySelectorAll(".event-body"),
  date = new Date(),
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

let datesDivUI,
  selectedDate,
  selectedTimestamp,
  taskMode = false,
  month = date.getMonth(),
  year = date.getFullYear();

// EventListeners
document.addEventListener("DOMContentLoaded", () => {
  // Incase User Already Exists
  if (localStorage.getItem("name")) {
    makeCalendar();
  } else {
    document.querySelector("#name").style.display = "grid";
  }
});
// Incase User Does not Exist
addUserNameUI.addEventListener("click", (e) => {
  let userName = document.querySelector("#user");
  if (
    userName.value === "" ||
    userName.value.length < 1 ||
    userName.value.length > 10
  ) {
    return (userName.style.border = "1px solid red");
  } else {
    localStorage.setItem("name", userName.value);
    document.querySelector("#name").remove();
    makeCalendar();
  }
});
// Previous Month Button
previousMonthUI.onclick = () => {
  date.setMonth(date.getMonth() - 1);
  makeCalendar();
};
// Next Month Button
nextMonthUI.onclick = () => {
  date.setMonth(date.getMonth() + 1);
  makeCalendar();
};
// Current Month Button
currentMonthUI.onclick = () => {
  date.setMonth(new Date().getMonth());
  makeCalendar();
  document.querySelector(".month").innerText = `${
    months[month]
  } ${new Date().getFullYear()}`;
};

// Task adding functionality
tasksTimelineUI.forEach((ev) => {
  ev.addEventListener("click", function () {
    onClickTime(this);
  });
});
// onClick Task Save Button
saveTaskButtonUI.addEventListener("click", saveTaskToLocalStorage);

// Calendar Functionality
function makeCalendar() {
  days.innerHTML = "";
  month = date.getMonth();
  year = date.getFullYear();
  renderDates();
  setTodaysDate();
  updateOtherUIStuff();
  addIndicatorIfTasksArePresentForThatDate();
  tour();
  function renderDates() {
    // render previous month dates
    const previousMonthLastDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const previousMonthDaysCount = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    // function that checks if previous month has any days to render and renders on conditional logic
    if (previousMonthDaysCount) {
      let monthDates = (function () {
        let arr = [];
        for (i = 1; i <= previousMonthLastDate; i++) {
          arr.push(i);
        }
        return arr;
      })();
      const previousMonthDaysArr = monthDates.slice(
        previousMonthDaysCount * -1
      );
      previousMonthDaysArr.forEach((date) => {
        appendDiv(date, "not-date", `${date}-${months[month - 1]}-${year}`);
      });
    }
    // render this month dates
    const currentMonthDaysCount = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    for (let i = 1; i <= currentMonthDaysCount; i++) {
      appendDiv(i, "date", `${i}-${months[month]}-${year}`);
    }

    // render next month dates
    const IndexOfLastDayOfCurrentMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextMonthDaysCount = 7 - IndexOfLastDayOfCurrentMonth;
    for (let i = 1; i < nextMonthDaysCount; i++) {
      appendDiv(i, "not-date", `${i}-${months[month + 1]}-${year}`);
    }
  }
  function setTodaysDate() {
    Array.from(days.children).forEach((day) => {
      if (
        Number(day.innerText) === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear() &&
        !day.classList.contains("not-date")
      ) {
        day.classList.add("today");
      }
    });
  }
  function updateOtherUIStuff() {
    const monthUI = document.querySelector(".month"),
      eventDateUI = document.querySelector(".current-date h2"),
      userNameUI = document.querySelector("span.name");

    monthUI.innerText = `${months[month]} ${year}`;
    eventDateUI.innerText = `${date.getDate()} ${months[month]}, ${
      weekDays[date.getDay()]
    }`;
    userNameUI.innerText = localStorage.getItem("name");
  }
  function appendDiv(data, classes, date) {
    let div = document.createElement("div");
    div.innerText = data;
    div.setAttribute("date", date);
    classes ? (div.className = classes) : (div.className = "");
    days.append(div);
  }
  // Dates onClick Event. This also working as initializing of tasks adding functionality
  datesDivUI = document.querySelectorAll(".date");
  datesDivUI.forEach((date) => {
    date.addEventListener("click", onClickDate);
  });
}

// Tasks adding functionality
function onClickDate() {
  if (this.getAttribute("data-selected")) {
    taskMode = false;
    return this.removeAttribute("data-selected");
  }
  taskMode = true;
  let date = this.getAttribute("date");
  datesDivUI.forEach((d) => d.removeAttribute("data-selected"));
  this.setAttribute("data-selected", "true");
  selectedDate = date;

  // Ui stuff
  document.querySelector(".current-date h2").innerText = `${this.innerText} ${
    months[month]
  }, ${weekDays[new Date(selectedDate).getDay()]}`;
  displaySavedTasksPerDate();
}
function onClickTime(timestamp) {
  if (timestamp.classList.contains("TaskMode")) {
    return timestamp.classList.remove("TaskMode");
  }
  if (!taskMode) {
    return notify("Please select a date first.");
  }
  tasksTimelineUI.forEach((t) => t.classList.remove("TaskMode"));
  timestamp.classList.add("TaskMode");
  selectedTimestamp = timestamp.parentElement.getAttribute("time");
}
function saveTaskToLocalStorage() {
  if (!taskMode || !selectedTimestamp) {
    return notify("Please select a date and time for task first.");
  }
  let taskAdder = document.querySelector(".add-task");
  taskAdder.style.display = "grid";
  let taskHeading = document.querySelector("[name='taskHeading']");
  let taskURL = document.querySelector("[name='taskURL']");
  let taskDescription = document.querySelector("[name='taskDescription']");

  document.querySelector("#add-task").onclick = function () {
    if (taskHeading.value === "" || !taskHeading.value) {
      return (taskHeading.style.border = "1px solid red");
    }
    if (localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      let task = {
        date: selectedDate,
        time: selectedTimestamp,
        heading: taskHeading.value,
        url: taskURL.value !== "" ? taskURL.value : "#",
        description: taskDescription.value
          ? taskDescription.value
          : "No Description Provided",
      };
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskAdder.style.display = "none";
      displaySavedTasksPerDate();
    } else {
      let tasks = [];
      let task = {
        date: selectedDate,
        time: selectedTimestamp,
        heading: taskHeading.value,
        url: taskURL.value !== "" ? taskURL.value : "#",
        description: taskDescription.value
          ? taskDescription.value
          : "No Description Provided",
      };
      tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      taskAdder.style.display = "none";
      displaySavedTasksPerDate();
    }
    tasksTimelineUI.forEach((el) => el.classList.remove("TaskMode"));
  };
}
function displaySavedTasksPerDate() {
  tasksTimelineUI.forEach((el) => (el.innerHTML = ""));
  let tasks = JSON.parse(localStorage.getItem("tasks")),
    colors = [
      { text: "#00203F", bg: "#ADF0D1" },
      { text: "#C0A4D4", bg: "#F9EDFF" },
      { text: "#3B0F50", bg: "#DA6285" },
      { text: "#E3A27F", bg: "#FFF2ED" },
      { text: "#59295D", bg: "#A05DA5" },
      { text: "#8C9ED0", bg: "#F1F6FF" },
      { text: "#8C9ED0", bg: "#F1F6FF" },
      { text: "#C1A1D3", bg: "#FFF3E6" },
      { text: "#6A492B", bg: "#F88F01" },
      { text: "#7AB9B3", bg: "#E8FBFC" },
      { text: "#153e90", bg: "#54e346" },
    ];

  if (!tasks) {
    return;
  }
  let filteredTasks = tasks.filter(function (task) {
    return selectedDate === task.date;
  });
  filteredTasks.forEach((task) => {
    let span = document.createElement("span"),
      color = colors[random(0, colors.length - 1)];
    span.innerText = task.heading;
    span.style.background = color.bg;
    span.style.color = color.text;
    span.classList.add("animated", "bounceInDown");
    span.setAttribute("description", task.description);
    span.setAttribute("link", task.url);
    span.setAttribute("onclick", "openTask(this)");
    document.querySelector(`[time='${task.time}']`).children[1].append(span);
  });
  addIndicatorIfTasksArePresentForThatDate();
}
function openTask(element) {
  let noteDIV = document.createElement("div");
  noteDIV.classList.add("task");
  noteDIV.innerHTML = `<div class="input-wrapper noteBody">
  <small>Task Heading:</small>
  <h2 class="greetings">${element.innerText}</h2>
  <small>Task Description:</small>
  <p>${element.getAttribute("description")}</p>
  <small>Link:</small>
  <a target='_blank' ${
    element.getAttribute("link") === "#" ? "class='disabled'" : ""
  } href='${
    element.getAttribute("link") !== "#" ? element.getAttribute("link") : "#"
  }'>${
    element.getAttribute("link") !== "#"
      ? element.getAttribute("link")
      : "No Link Provided"
  }</a>
  <span onclick='closeIcon(document.querySelector(".task"), "remove")' class='closeIcon'>x</span>
</div>`;
  document.body.append(noteDIV);
}
function addIndicatorIfTasksArePresentForThatDate() {
  let tasks = localStorage.getItem("tasks");
  if (tasks === null) return;
  JSON.parse(tasks).forEach((task) => {
    let item = document.querySelector(`[date='${task.date}']`);
    item ? item.classList.add("hasTasks") : "";
  });
}

function closeIcon(el, func) {
  if (func === "hide") {
    el.style.display = "none";
  } else {
    el.remove();
  }
}
function tour() {
  if (localStorage.getItem("tour")) {
    return;
  } else {
    introJs()
      .setOptions({
        disableInteraction: false,
        showBullets: false,
        showProgress: true,
        steps: [
          {
            title: "👋 Welcome, lets learn how to use this app.",
            intro:
              "First thing, this purple colors represents today's date. Also, make sure to follow the instructions mentioned in this tutorial.",
            element: document.querySelector(".today"),
          },
          {
            title: "1. First Step",
            element: document.querySelectorAll(".date")[9],
            intro: "Select any date. YES, Do it. Click the DATE!!!",
          },
          {
            title: "2. Second Step",
            element: tasksTimelineUI[1],
            intro:
              "Select the hour you want to add a task. Click and you will see a green tick on right side representing the current selected hour",
          },
          {
            title: "3. Third Step",
            element: document.querySelector(".add-new-event"),
            intro: "Click the create button.",
          },
          {
            title: "4. Fourth Step",
            element: document.querySelector(".add-task .input-wrapper"),
            intro: "Enter Details and hit the button.",
          },
          {
            title: "5. Fifth Step",
            element: tasksTimelineUI[1],
            intro:
              "Here's your task saved. You can click on the task to see description and other information.",
          },
          {
            title: "Tutorial completed.",
            element: document.querySelector(".noteBody"),
            intro: "I hope you like the app : D. Good Bye!",
          },
        ],
      })
      .onbeforeexit(function () {
        return confirm("Are you sure you want to exit the tutorial?");
      })
      .onexit(function () {
        localStorage.setItem("tour", "true");
      })
      .start();
  }
}
function notify(message) {
  let previousNote = document.querySelector(".notify");
  if (previousNote) {
    previousNote.remove();
  }
  let notification = document.createElement("div");
  notification.innerText = message;
  notification.innerHTML += `<span onclick='closeIcon(document.querySelector(".notify"), "remove")' class='closeIcon'>x</span>`;
  notification.classList.add("notify", "animated", "bounceInDown");
  document.body.append(notification);
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
