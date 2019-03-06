var ans1 = false;
var ans1_5 = false;
var ans2 = false;
var ans3 = false;
var ans4 = false;
var ans5 = false;
var ans6 = false;
var ans7 = false;
var ans8 = false;
var ans9 = false;
var ans10 = false;

document.getElementById("getstarted").onclick = function firstQuestion() {
  document.getElementById("getstarted").style.display = "none";
  document.getElementById("opening").style.display = "none";
  document.getElementById("ques1").style.display = "block";
  document.getElementById("choice1a").style.display = "block";
  document.getElementById("choice1b").style.display = "block";
  document.getElementById("choice1c").style.display = "block";
};

document.getElementById("choice1a").onclick = function firstAnswer() {
  document.getElementById("ques1").style.display = "none";
  document.getElementById("choice1a").style.display = "none";
  document.getElementById("choice1b").style.display = "none";
  document.getElementById("choice1c").style.display = "none";
  document.getElementById("ques2").style.display = "block";
  document.getElementById("choice2a").style.display = "block";
  document.getElementById("choice2b").style.display = "block";
  document.getElementById("choice2c").style.display = "block";
  ans1 = true;
};

document.getElementById("choice1b").onclick = function firstAnswer() {
  document.getElementById("ques1").style.display = "none";
  document.getElementById("choice1a").style.display = "none";
  document.getElementById("choice1b").style.display = "none";
  document.getElementById("choice1c").style.display = "none";
  document.getElementById("ques2").style.display = "block";
  document.getElementById("choice2a").style.display = "block";
  document.getElementById("choice2b").style.display = "block";
  document.getElementById("choice2c").style.display = "block";
  ans1_5 = true;
};

document.getElementById("choice1c").onclick = function firstAnswer() {
  document.getElementById("ques1").style.display = "none";
  document.getElementById("choice1a").style.display = "none";
  document.getElementById("choice1b").style.display = "none";
  document.getElementById("choice1c").style.display = "none";
  document.getElementById("ques2").style.display = "block";
  document.getElementById("choice2a").style.display = "block";
  document.getElementById("choice2b").style.display = "block";
  document.getElementById("choice2c").style.display = "block";
  ans1 = false;
};

document.getElementById("choice2a").onclick = function secondAnswer() {
  document.getElementById("ques3").style.display = "block";
  document.getElementById("choice3a").style.display = "block";
  document.getElementById("choice3b").style.display = "block";
  document.getElementById("ques2").style.display = "none";
  document.getElementById("choice2a").style.display = "none";
  document.getElementById("choice2b").style.display = "none";
  document.getElementById("choice2c").style.display = "none";
  ans2 = true;
};

document.getElementById("choice2b").onclick = function secondAnswer() {
  document.getElementById("ques3").style.display = "block";
  document.getElementById("choice3a").style.display = "block";
  document.getElementById("choice3b").style.display = "block";
  document.getElementById("ques2").style.display = "none";
  document.getElementById("choice2a").style.display = "none";
  document.getElementById("choice2b").style.display = "none";
  document.getElementById("choice2c").style.display = "none";
  ans2 = false;
};

document.getElementById("choice2c").onclick = function secondAnswer() {
  document.getElementById("ques3").style.display = "block";
  document.getElementById("choice3a").style.display = "block";
  document.getElementById("choice3b").style.display = "block";
  document.getElementById("ques2").style.display = "none";
  document.getElementById("choice2a").style.display = "none";
  document.getElementById("choice2b").style.display = "none";
  document.getElementById("choice2c").style.display = "none";
  ans2 = true;
};

document.getElementById("choice3a").onclick = function thirdAnswer() {
  document.getElementById("ques4").style.display = "block";
  document.getElementById("choice4a").style.display = "block";
  document.getElementById("choice4b").style.display = "block";
  document.getElementById("ques3").style.display = "none";
  document.getElementById("choice3a").style.display = "none";
  document.getElementById("choice3b").style.display = "none";
  ans3 = true;
};

document.getElementById("choice3b").onclick = function thirdAnswer() {
  document.getElementById("ques4").style.display = "block";
  document.getElementById("choice4a").style.display = "block";
  document.getElementById("choice4b").style.display = "block";
  document.getElementById("ques3").style.display = "none";
  document.getElementById("choice3a").style.display = "none";
  document.getElementById("choice3b").style.display = "none";
  ans3 = false;
};

document.getElementById("choice4a").onclick = function fourthAnswer() {
  document.getElementById("ques5").style.display = "block";
  document.getElementById("choice5a").style.display = "block";
  document.getElementById("choice5b").style.display = "block";
  document.getElementById("choice5c").style.display = "block";
  document.getElementById("ques4").style.display = "none";
  document.getElementById("choice4a").style.display = "none";
  document.getElementById("choice4b").style.display = "none";
  ans4 = true;
};

document.getElementById("choice4b").onclick = function fourthAnswer() {
  document.getElementById("ques5").style.display = "block";
  document.getElementById("choice5a").style.display = "block";
  document.getElementById("choice5b").style.display = "block";
  document.getElementById("choice5c").style.display = "block";
  document.getElementById("ques4").style.display = "none";
  document.getElementById("choice4a").style.display = "none";
  document.getElementById("choice4b").style.display = "none";
  ans4 = false;
};

document.getElementById("choice5a").onclick = function fifthAnswer() {
  document.getElementById("ques6").style.display = "block";
  document.getElementById("choice6a").style.display = "block";
  document.getElementById("choice6b").style.display = "block";
  document.getElementById("ques5").style.display = "none";
  document.getElementById("choice5a").style.display = "none";
  document.getElementById("choice5b").style.display = "none";
  document.getElementById("choice5c").style.display = "none";
  ans5 = true;
};

document.getElementById("choice5b").onclick = function fifthAnswer() {
  document.getElementById("ques6").style.display = "block";
  document.getElementById("choice6a").style.display = "block";
  document.getElementById("choice6b").style.display = "block";
  document.getElementById("ques5").style.display = "none";
  document.getElementById("choice5a").style.display = "none";
  document.getElementById("choice5b").style.display = "none";
  document.getElementById("choice5c").style.display = "none";
  ans5 = false;
};

document.getElementById("choice5c").onclick = function fifthAnswer() {
  document.getElementById("ques6").style.display = "block";
  document.getElementById("choice6a").style.display = "block";
  document.getElementById("choice6b").style.display = "block";
  document.getElementById("ques5").style.display = "none";
  document.getElementById("choice5a").style.display = "none";
  document.getElementById("choice5b").style.display = "none";
  document.getElementById("choice5c").style.display = "none";
  ans5 = true;
};

document.getElementById("choice6a").onclick = function sixthAnswer() {
  document.getElementById("ques6").style.display = "none";
  document.getElementById("choice6a").style.display = "none";
  document.getElementById("choice6b").style.display = "none";
  document.getElementById("ques7").style.display = "block";
  document.getElementById("choice7a").style.display = "block";
  document.getElementById("choice7b").style.display = "block";
  document.getElementById("choice7c").style.display = "block";
  ans6 = true;
};

document.getElementById("choice6b").onclick = function sixthAnswer() {
  document.getElementById("ques6").style.display = "none";
  document.getElementById("choice6a").style.display = "none";
  document.getElementById("choice6b").style.display = "none";
  document.getElementById("ques7").style.display = "block";
  document.getElementById("choice7a").style.display = "block";
  document.getElementById("choice7b").style.display = "block";
  document.getElementById("choice7c").style.display = "block";
  ans6 = false;
};

document.getElementById("choice7a").onclick = function seventhAnswer() {
  document.getElementById("ques7").style.display = "none";
  document.getElementById("choice7a").style.display = "none";
  document.getElementById("choice7b").style.display = "none";
  document.getElementById("choice7c").style.display = "none";
  document.getElementById("ques8").style.display = "block";
  document.getElementById("choice8a").style.display = "block";
  document.getElementById("choice8b").style.display = "block";
  document.getElementById("choice8c").style.display = "block";
  ans7 = true;
};

document.getElementById("choice7b").onclick = function seventhAnswer() {
  document.getElementById("ques7").style.display = "none";
  document.getElementById("choice7a").style.display = "none";
  document.getElementById("choice7b").style.display = "none";
  document.getElementById("choice7c").style.display = "none";
  document.getElementById("ques8").style.display = "block";
  document.getElementById("choice8a").style.display = "block";
  document.getElementById("choice8b").style.display = "block";
  document.getElementById("choice8c").style.display = "block";
  ans7 = true;
};

document.getElementById("choice7c").onclick = function seventhAnswer() {
  document.getElementById("ques7").style.display = "none";
  document.getElementById("choice7a").style.display = "none";
  document.getElementById("choice7b").style.display = "none";
  document.getElementById("choice7c").style.display = "none";
  document.getElementById("ques8").style.display = "block";
  document.getElementById("choice8a").style.display = "block";
  document.getElementById("choice8b").style.display = "block";
  document.getElementById("choice8c").style.display = "block";
  ans7 = false;
};

document.getElementById("choice8a").onclick = function eigthAnswer() {
  document.getElementById("ques8").style.display = "none";
  document.getElementById("choice8a").style.display = "none";
  document.getElementById("choice8b").style.display = "none";
  document.getElementById("choice8c").style.display = "none";
  document.getElementById("ques9").style.display = "block";
  document.getElementById("choice9a").style.display = "block";
  document.getElementById("choice9b").style.display = "block";
  document.getElementById("choice9c").style.display = "block";
  ans8 = true;
};

document.getElementById("choice8b").onclick = function eigthAnswer() {
  document.getElementById("ques8").style.display = "none";
  document.getElementById("choice8a").style.display = "none";
  document.getElementById("choice8b").style.display = "none";
  document.getElementById("choice8c").style.display = "none";
  document.getElementById("ques9").style.display = "block";
  document.getElementById("choice9a").style.display = "block";
  document.getElementById("choice9b").style.display = "block";
  document.getElementById("choice9c").style.display = "block";
  ans8 = true;
};

document.getElementById("choice8c").onclick = function eigthAnswer() {
  document.getElementById("ques8").style.display = "none";
  document.getElementById("choice8a").style.display = "none";
  document.getElementById("choice8b").style.display = "none";
  document.getElementById("choice8c").style.display = "none";
  document.getElementById("ques9").style.display = "block";
  document.getElementById("choice9a").style.display = "block";
  document.getElementById("choice9b").style.display = "block";
  document.getElementById("choice9c").style.display = "block";
  ans8 = false;
};

document.getElementById("choice9a").onclick = function ninthAnswer() {
  document.getElementById("ques9").style.display = "none";
  document.getElementById("choice9a").style.display = "none";
  document.getElementById("choice9b").style.display = "none";
  document.getElementById("choice9c").style.display = "none";
  document.getElementById("ques10").style.display = "block";
  document.getElementById("choice10a").style.display = "block";
  document.getElementById("choice10b").style.display = "block";
  ans9 = true;
};

document.getElementById("choice9b").onclick = function ninthAnswer() {
  document.getElementById("ques9").style.display = "none";
  document.getElementById("choice9a").style.display = "none";
  document.getElementById("choice9b").style.display = "none";
  document.getElementById("choice9c").style.display = "none";
  document.getElementById("ques10").style.display = "block";
  document.getElementById("choice10a").style.display = "block";
  document.getElementById("choice10b").style.display = "block";
  ans9 = false;
};

document.getElementById("choice9c").onclick = function ninthAnswer() {
  document.getElementById("ques9").style.display = "none";
  document.getElementById("choice9a").style.display = "none";
  document.getElementById("choice9b").style.display = "none";
  document.getElementById("choice9c").style.display = "none";
  document.getElementById("ques10").style.display = "block";
  document.getElementById("choice10a").style.display = "block";
  document.getElementById("choice10b").style.display = "block";
  ans9 = true;
};

document.getElementById("choice10a").onclick = function total() {
  document.getElementById("ques10").style.display = "none";
  document.getElementById("choice10a").style.display = "none";
  document.getElementById("choice10b").style.display = "none";
  document.getElementById("goodbye").style.display = "block";
  ans10 = true;

  if (
    ans1 === true &&
    ans2 === true &&
    ans3 === true &&
    ans4 === true &&
    ans5 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true &&
    ans10 === false
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Set up and optimize your Google My Business & Social Media listings";
  } else if (
    ans2 === true &&
    ans3 === true &&
    ans4 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Acquire a skilled SEO practitioner";
  } else if (
    (ans1 === true || ans1_5 === true) &&
    ans2 === true &&
    ans3 === true &&
    ans6 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Becoming a recognized authority figure in your industry will benefit you";
  } else if (
    (ans1 === true || ans1_5 === true) &&
    ans7 === true &&
    ans8 === true
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Design a marketing campaign to show your uniqueness";
  } else {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Sign a pay for performance contract to improve your SEO";
  }
};

document.getElementById("choice10b").onclick = function total() {
  document.getElementById("ques10").style.display = "none";
  document.getElementById("choice10a").style.display = "none";
  document.getElementById("choice10b").style.display = "none";
  document.getElementById("goodbye").style.display = "block";

  ans10 = false;

  if (
    ans1 === true &&
    ans2 === true &&
    ans3 === true &&
    ans4 === true &&
    ans5 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true &&
    ans10 === false
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Set up and optimize your Google My Business & Social Media listings";
  } else if (
    ans2 === true &&
    ans3 === true &&
    ans4 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true &&
    ans10 === false
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Acquire a skilled SEO practitioner";
  } else if (
    (ans1 === true || ans1_5 === true) &&
    ans2 === true &&
    ans3 === true &&
    ans6 === true &&
    ans6 === true &&
    ans7 === true &&
    ans8 === true &&
    ans9 === true
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Becoming a recognized authority figure in your industry will benefit you";
  } else if (
    (ans1 === true || ans1_5 === true) &&
    ans7 === true &&
    ans8 === true
  ) {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Design a marketing campaign to show your uniqueness";
  } else {
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo").innerHTML =
      "Sign a pay for performance contract to improve your SEO";
  }
};
