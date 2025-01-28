const track = document.getElementById("track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmouseup = (e) => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
  Math.min(nextPercentage, 0);
  Math.max(nextPercentage, -100);

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

function expand() {
  const AboutMe = document.getElementById("about-me");
  const expAboutMe = document.getElementById("expandedAboutMe");
  const aboutTitle = document.getElementById("aboutMeTitle");
  AboutMe.classList.toggle("expanded");

  aboutTitle.classList.toggle("hidden");
  expAboutMe.classList.toggle("hidden");
}
