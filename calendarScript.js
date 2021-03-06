const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
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
  ];

  const publicHolidays = [
    {
      month: 0,
      date: 1
    },
    {
      month: 0,
      date: 26
    },
    {
      month: 4,
      date: 1
    },
    {
      month: 7,
      date: 15
    },
    {
      month: 09,
      date: 2
    },
    {
      month: 11,
      date: 25
    }
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    const isHoliday = publicHolidays.filter(h => h.month === date.getMonth() && h.date == i).length;
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
        if(isHoliday){
            days += `<div class="holiday">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  const todayDate = new Date();
  if(todayDate.getFullYear() - date.getFullYear() < 4 || ((todayDate.getFullYear() - date.getFullYear()) == 4 && date.getMonth() > 0)){
    date.setMonth(date.getMonth() - 1);
    renderCalendar();11
  }
});

document.querySelector(".next").addEventListener("click", () => {
  const todayDate = new Date();
  if(todayDate.getFullYear() > date.getFullYear() || (todayDate.getFullYear() == date.getFullYear() && date.getMonth() < 11)){
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  }
});

renderCalendar();