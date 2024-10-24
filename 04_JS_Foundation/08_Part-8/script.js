// 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    para.textContent = "The paragraph is changed";
  });

// 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let cityList = document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight");
  });

// 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffee = document.getElementById("coffeeType");
  coffee.textContent = "Espresso";
  coffee.style.backgroundColor = "brown";
  coffee.style.padding = "5px";
});

// 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// 6

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("helllo");
});

// 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected " + event.target.textContent);
  }
});

// 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback : ${feedback}`;
  });

// 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded..";
});

// 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let desColor = document.getElementById("descriptionText");
    desColor.classList.toggle("highlight");
  });
