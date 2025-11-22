document.addEventListener("DOMContentLoaded", () => {
  createCalendar("calendar-container");
});

function createCalendar(containerId) {
  const container = document.getElementById(containerId);

  const calendarWrapper = document.createElement("div");
  calendarWrapper.className = "calendar-wrapper";

  const calendar = document.createElement("div");
  calendar.className = "calendar";

  const hoursBox = document.createElement("div");
  hoursBox.className = "hours-list";

  // ====== HORAS ======
  for (let h = 10; h <= 23; h++) {
    const hourDiv = document.createElement("div");
    hourDiv.className = "hour";
    hourDiv.textContent = `${h}:00`;
    hourDiv.onclick = () => selectHour(hourDiv);
    hoursBox.appendChild(hourDiv);
  }

  // ====== CALENDARIO ======
  const header = document.createElement("div");
  header.className = "calendar-header";

  const monthLabel = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");

  prevBtn.textContent = "<";
  nextBtn.textContent = ">";

  header.appendChild(prevBtn);
  header.appendChild(monthLabel);
  header.appendChild(nextBtn);

  const grid = document.createElement("div");
  grid.className = "calendar-grid";

  calendar.appendChild(header);
  calendar.appendChild(grid);

  calendarWrapper.appendChild(calendar);
  calendarWrapper.appendChild(hoursBox);

  container.appendChild(calendarWrapper);

  let current = new Date();

  function renderCalendar() {
    grid.innerHTML = "";

    const year = current.getFullYear();
    const month = current.getMonth();
    monthLabel.textContent = current.toLocaleString("es-ES", {
      month: "long",
      year: "numeric",
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const today = new Date();

    for (let i = 0; i < (firstDay + 6) % 7; i++) {
      const empty = document.createElement("div");
      grid.appendChild(empty);
    }

    for (let d = 1; d <= lastDate; d++) {
      const dayDiv = document.createElement("div");
      dayDiv.className = "calendar-day";
      dayDiv.textContent = d;

      const dateObj = new Date(year, month, d);

      if (
        dateObj <
        new Date(today.getFullYear(), today.getMonth(), today.getDate())
      ) {
        dayDiv.classList.add("disabled");
      } else {
        dayDiv.onclick = () => selectDay(dayDiv, dateObj);
      }

      if (dateObj.toDateString() === today.toDateString()) {
        dayDiv.classList.add("today");
      }

      grid.appendChild(dayDiv);
    }
  }

  prevBtn.onclick = () => {
    current.setMonth(current.getMonth() - 1);
    renderCalendar();
  };

  nextBtn.onclick = () => {
    current.setMonth(current.getMonth() + 1);
    renderCalendar();
  };

  renderCalendar();
}

let selectedDate = null;
let selectedHour = null;

function selectDay(el, dateObj) {
  document
    .querySelectorAll(".calendar-day")
    .forEach((d) => d.classList.remove("active"));
  el.classList.add("active");

  selectedDate = dateObj.toISOString().split("T")[0];
}

function selectHour(el) {
  document
    .querySelectorAll(".hour")
    .forEach((h) => h.classList.remove("active"));
  el.classList.add("active");

  selectedHour = el.textContent;
}
