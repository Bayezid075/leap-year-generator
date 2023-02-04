document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputYear = document.getElementById("yearInput").value;
    const result = document.getElementById("resultScreen");
    if (inputYear % 4 === 0) {
      result.innerText = inputYear + " is Leap year 😍";
    } else {
      result.innerText = inputYear + " is not Leap year (●'◡'●)";
    }
  });
