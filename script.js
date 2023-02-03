//Script complet de la navbar
const toggleNavbarButton = document.getElementById("toggle-navbar");
const navbar = document.querySelector(".navbar");
const menuLinks = document.querySelectorAll(".navbar a");
const menuItems = document.querySelectorAll(".menu-item");

toggleNavbarButton.addEventListener("click", function () {
  navbar.classList.toggle("show");
});

menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener("click", function (event) {
    event.preventDefault();
    const menuId = event.target.getAttribute("href");
    menuItems.forEach(function (menuItem) {
      if (menuItem.id === menuId.substring(1)) {
        menuItem.classList.toggle("show");
      } else {
        menuItem.classList.remove("show");
      }
    });
  });
});

//Script du premier Menu
const links = document.querySelectorAll("a");
const displayedImage = document.querySelector("#displayed-image");

links.forEach(link => {
  link.addEventListener("mouseover", event => {
    displayedImage.src = `${event.target.id}.png`;
    displayedImage.style.display = "block";
  });

  link.addEventListener("mouseout", event => {
    displayedImage.style.display = "none";
  });
});

//Script du deuxieme Menu
const addButton = document.querySelector("#add-button");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const nameTableBody = document.querySelector("#name-table-body");

addButton.addEventListener("click", function() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
  `;
  
  nameTableBody.appendChild(newRow);
});

//Script troisième Menu
const text = document.querySelector("#text");
const selector = document.querySelector("#styleSelector");

selector.addEventListener("change", function() {
  const value = selector.value;
  if (value === "style3") {
    text.style.fontWeight = "bold";
    text.style.fontStyle = "normal";
  } else if (value === "style2") {
    text.style.fontWeight = "normal";
    text.style.fontStyle = "italic";
  } else {
    text.style.fontWeight = "normal";
    text.style.fontStyle = "normal";
  }
});

//script quatrième menu
const list = document.querySelector("#list");
const items = Array.from(list.children);
const upButton = document.querySelector("#upButton");
const downButton = document.querySelector("#downButton");

let currentIndex = 0;

upButton.addEventListener("click", function() {
  if (currentIndex === 0) {
    return;
  }
  const currentItem = items[currentIndex];
  const nextItem = items[currentIndex - 1];
  list.insertBefore(nextItem, currentItem);
  currentIndex -= 1;
});

downButton.addEventListener("click", function() {
  if (currentIndex === items.length - 1) {
    return;
  }
  const currentItem = items[currentIndex];
  const nextItem = items[currentIndex + 1];
  list.insertBefore(nextItem, currentItem);
  currentIndex += 1;
});

//Script cinquième menu
function createElements() {
    let checkBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    let radioButton = document.querySelector("input[name='group']:checked");

    if (checkBoxes.length > 0 && radioButton) {
      let parent = document.getElementById("container");

      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }

      if (radioButton.value === "div") {
        for (var i = 0; i < checkBoxes.length; i++) {
          let newDiv = document.createElement("div");
          newDiv.innerHTML = checkBoxes[i].value;
          parent.appendChild(newDiv);
        }
      } else if (radioButton.value === "opt") {
        let select = document.createElement("select");

        for (let i = 0; i < checkBoxes.length; i++) {
          let option = document.createElement("option");
          option.text = checkBoxes[i].value;
          select.appendChild(option);
        }

        parent.appendChild(select);
      }
    } else {
      alert("Please select checkboxes and choose option.");
    }
  }


