"use strict";

const appUsers = document.querySelector(".app-window__users");
const appInfo = document.querySelector(".app-window__info");
const userLink = document.querySelector(".user-link");

fetch("chat.json")
  .then((response) => response.json())
  .then((data) => {
    addUsersToTheChatList(data);
  });

function addUsersToTheChatList(users) {
  let allUsersHtml = "";
  // List of all usernames
  users.forEach((element) => {
    //Adding all users names from json file
    allUsersHtml += `
      <a class="user-link" href="#">
        <div class="app-window__info">
            <img
              class="app-window__avatar"
              src="./img/img_avatar_${element.username}.png"
              alt="user picture"
            />
            <div>
              <h3 id="#username">${element.name}</h3>
              <p class="app-window__last-msg">${
                element.messages[element.messages.length - 1].text
              }</p>
            </div>
        </div>
      </a>`;
  });
  appUsers.insertAdjacentHTML("beforeend", allUsersHtml);
}

// let currentItem = 0;

// window.addEventListener("DOMContentLoaded", function () {
//   let element = document.getElementById("hidden");
//   console.log(element);
//   // element.classList.add("hidden");
// });

//Remove hardcoded element from HTML file
let removeElement = document.getElementById("#hidden");
removeElement.className += " hidden";
