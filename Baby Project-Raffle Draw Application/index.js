window.onload = function () {
  const inp = document.getElementById("inp");
  const display = document.getElementById("display");
  const giveATry = document.getElementById("give-a-try");
  const firstPosition = document.getElementById("first-position");
  const secondPosition = document.getElementById("second-position");
  const thirdPosition = document.getElementById("third-position");

  const participantNames = [];
  inp.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let newNames = event.target.value.split(", ");
      if (newNames[0] != "") {
        newNames.forEach((element) => {
          participantNames.push(element);
        });
      }
    }
  });
  let countPosition = 0;
  giveATry.addEventListener("click", function (event) {
    if (countPosition == 3) alert("The Raffle Draw is finished");
    else if (participantNames.length === 0) {
      alert("There is no Entry");
    } else {
      let shuffledNames = shuffle(participantNames);
      for (let i = 0; i < shuffledNames.length; i++) {
        (function (i, cnt) {
          setTimeout(() => {
            let rand = Math.floor(Math.random() * shuffledNames.length);
            display.innerHTML = shuffledNames[rand];
            if (cnt === shuffledNames.length - 1 && countPosition <= 3) {
              if (!firstPosition.innerHTML) {
                firstPosition.innerHTML = shuffledNames[rand];
                firstPosition.style.color = "green";
                let ind = participantNames.indexOf(shuffledNames[rand]);
                participantNames.splice(ind, 1);
                countPosition++;
              } else if (!secondPosition.innerHTML) {
                secondPosition.innerHTML = shuffledNames[rand];
                secondPosition.style.color = "red";
                let ind = participantNames.indexOf(shuffledNames[rand]);
                participantNames.splice(ind, 1);
                countPosition++;
              } else if (!thirdPosition.innerHTML) {
                thirdPosition.innerHTML = shuffledNames[rand];
                thirdPosition.style.color = "orange";
                let ind = participantNames.indexOf(shuffledNames[rand]);
                participantNames.splice(ind, 1);
                countPosition++;
              } else {
                alert("Raffle Draw is completed");
              }
            }
          }, i);
        })(i * 100, i);
      }
    }
  });

  function shuffle(arr) {
    let shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let temp = shuffledArr[rand];
      shuffledArr[rand] = shuffledArr[i];
      shuffledArr[i] = temp;
    }
    return shuffledArr;
  }
};
