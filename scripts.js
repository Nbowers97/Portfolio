// Scrolling the Track
const track = document.getElementById("track");

let isMouseDown = false;

// For Mouse Events
window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
  isMouseDown = true;
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage || "0";
  isMouseDown = false;
};

window.onmousemove = (e) => {
  if (!isMouseDown) return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const container of track.getElementsByClassName("container")) {
    container.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

// For Touch Events (for mobile devices)
window.ontouchstart = (e) => {
  track.dataset.mouseDownAt = e.touches[0].clientX;
  isMouseDown = true;
};

window.ontouchend = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage || "0";
  isMouseDown = false;
};

window.ontouchmove = (e) => {
  if (!isMouseDown) return;

  const touchDelta =
      parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (touchDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  track.dataset.percentage = nextPercentage;

  track.animate(
    {
      transform: `translate(${nextPercentage}%, -50%)`,
    },
    { duration: 1200, fill: "forwards" }
  );

  for (const container of track.getElementsByClassName("container")) {
    container.animate(
      {
        objectPosition: `${100 + nextPercentage}% center`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

// Opening Track Elements

function expandAbout() {
  const AboutMe = document.getElementById("about-me");
  const expAboutMe = document.getElementById("expandedAboutMe");
  const aboutTitle = document.getElementById("aboutMeTitle");
  AboutMe.classList.toggle("expanded");
  AboutMe.classList.toggle("focused");

  aboutTitle.classList.toggle("hidden");
  expAboutMe.classList.toggle("hidden");
}

function expandHistory() {
  const history = document.getElementById("history");
  const expHistory = document.getElementById("expandedHistory");
  const historyTitle = document.getElementById("historyTitle");
  history.classList.toggle("expanded");
  history.classList.toggle("focused");

  historyTitle.classList.toggle("hidden");
  expHistory.classList.toggle("hidden");
}

function expandPitch() {
  const pitch = document.getElementById("pitch");
  const expPitch = document.getElementById("expandedPitch");
  const pitchTitle = document.getElementById("pitchTitle");
  pitch.classList.toggle("expanded");
  pitch.classList.toggle("focused");

  pitchTitle.classList.toggle("hidden");
  expPitch.classList.toggle("hidden");
}

function expandProjects() {
  const projects = document.getElementById("projects");
  const expProjects = document.getElementById("expandedProjects");
  const projectsTitle = document.getElementById("projectsTitle");
  projects.classList.toggle("expanded");
  projects.classList.toggle("focused");

  projectsTitle.classList.toggle("hidden");
  expProjects.classList.toggle("hidden");
}

function expandContacts() {
  const contacts = document.getElementById("contacts");
  const expContacts = document.getElementById("expandedContacts");
  const contactsTitle = document.getElementById("contactsTitle");
  contacts.classList.toggle("expanded");
  contacts.classList.toggle("focused");

  contactsTitle.classList.toggle("hidden");
  expContacts.classList.toggle("hidden");
}
