// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
});

// Navigation Logic
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));

    // Show the target page
    document.getElementById(targetId).classList.add('active');

    // Update active link
    navLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

// Study Timetable
const taskNameInput = document.getElementById('task-name');
const taskTimeInput = document.getElementById('task-time');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskName = taskNameInput.value;
  const taskTime = taskTimeInput.value;

  if (taskName && taskTime) {
    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskName} at ${taskTime}`;

    // Add Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskNameInput.value = '';
    taskTimeInput.value = '';
    alert('Task added successfully!');
  }
});

// Assignment Tracker
const assignmentNameInput = document.getElementById('assignment-name');
const assignmentDueDateInput = document.getElementById('assignment-due-date');
const addAssignmentButton = document.getElementById('add-assignment');
const assignmentList = document.getElementById('assignment-list');

addAssignmentButton.addEventListener('click', () => {
  const assignmentName = assignmentNameInput.value;
  const assignmentDueDate = assignmentDueDateInput.value;

  if (assignmentName && assignmentDueDate) {
    const assignmentItem = document.createElement('li');
    assignmentItem.textContent = `${assignmentName} - Due: ${assignmentDueDate}`;

    // Add Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      assignmentList.removeChild(assignmentItem);
    });

    assignmentItem.appendChild(removeButton);
    assignmentList.appendChild(assignmentItem);

    assignmentNameInput.value = '';
    assignmentDueDateInput.value = '';
    alert('Assignment added successfully!');
  }
});

// Exam Goal Setting
const goalNameInput = document.getElementById('goal-name');
const goalDeadlineInput = document.getElementById('goal-deadline');
const addGoalButton = document.getElementById('add-goal');
const goalList = document.getElementById('goal-list');

addGoalButton.addEventListener('click', () => {
  const goalName = goalNameInput.value;
  const goalDeadline = goalDeadlineInput.value;

  if (goalName && goalDeadline) {
    const goalItem = document.createElement('li');
    goalItem.textContent = `${goalName} - Deadline: ${goalDeadline}`;

    // Add Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.addEventListener('click', () => {
      goalList.removeChild(goalItem);
    });

    goalItem.appendChild(removeButton);
    goalList.appendChild(goalItem);

    goalNameInput.value = '';
    goalDeadlineInput.value = '';
    alert('Goal added successfully!');
  }
});

// Pomodoro Timer
let timerInterval;
let minutes = 25;
let seconds = 0;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startTimerButton = document.getElementById('start-timer');
const resetTimerButton = document.getElementById('reset-timer');
const customMinutesInput = document.getElementById('custom-minutes');
const setTimeButton = document.getElementById('set-time');

setTimeButton.addEventListener('click', () => {
  const customMinutes = parseInt(customMinutesInput.value);
  if (customMinutes > 0 && customMinutes <= 60) {
    minutes = customMinutes;
    seconds = 0;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    alert(`Timer set to ${minutes} minutes!`);
  } else {
    alert('Please enter a valid time (1-60 minutes).');
  }
});

function startTimer() {
  timerInterval = setInterval(() => {
    if (seconds === 0) {
      if (minutes === 0) {
        clearInterval(timerInterval);
        alert('Time is up! Take a break.');
        return;
      }
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

startTimerButton.addEventListener('click', startTimer);

resetTimerButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
});