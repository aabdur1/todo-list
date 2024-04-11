export default function startLiveClock() {
  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    // let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12; // Convert 24h to 12h format
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes; // Leading zero for minutes
    // seconds = seconds < 10 ? "0" + seconds : seconds; // Leading zero for seconds

    const timeString = `${hours}:${minutes} ${ampm}`;

    // Update the clock element with the new time
    document.getElementById("clock").textContent = timeString;
  }

  // Call the updateClock function every 500 milliseconds (every 0.5 seconds)
  setInterval(updateClock, 1000);

  updateClock();
}
