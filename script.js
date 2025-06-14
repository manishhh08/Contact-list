let contactList = [];
// add spinner and search here

// display screens
const displayScreen = (screenName) => {
  let screens = document.getElementsByClassName("screen");

  for (screen of screens) {
    screen.classList.add("hidden");
  }

  let selectedScreen = document.getElementById(screenName);

  selectedScreen.classList.remove("hidden");
};

// get the slider element
let sliderElement = document.getElementById("slide");

// unlock phone
sliderElement.addEventListener("change", (event) => {
  console.log(event.target.value);

  if (event.target.value == "100") {
    displayScreen("app-screen");
  } else {
    sliderElement.value = 0;
  }
});
//search contact function here

// function to fetch contact list
const fetchContactList = async () => {
  const response = await fetch("https://randomuser.me/api?results=3");
  const data = await response.json();
  console.log(data.results);

  contactList = data.results;

  let contactListElement = document.getElementById("contactList");

  let accItems = "";

  let contactNo = 0;

  for (contact of contactList) {
    contactNo += 1;
    console.log(contact);
    let accItem = ` <div class="accordion-item" style="background-color: #f8c61e; color: #2C5F2DFF">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#contact-${contactNo}" aria-expanded="true" aria-controls="contact-${contactNo}">
                                <img src="${contact.picture.thumbnail}" />
                                <div>
                                    <div>${contact.name.first} ${contact.name.last}</div>
                                    <div>${contact.location.city}, ${contact.location.country}</div>
                                </div>

                            </button>
                        </h2>
                        <div id="contact-${contactNo}" class="accordion-collapse collapse"
                            data-bs-parent="#contactList">
                            <div class="accordion-body d-flex justify-content-center align-items-center flex-column">
                                <div >
                                    <img src="${contact.picture.large}" class="rounded-circle" alt="">
                                </div>
                                <div class="d-flex justify-content-center align-items-center flex-column gap-2">
                                    <span class="fw-bold">${contact.name.first} ${contact.name.last}</span>
                                    <span>${contact.phone}</span>
                                    <span>${contact.email}</span>
                                    <span>${contact.location.street.number} ${contact.location.street.name}, ${contact.location.city}, ${contact.location.country}</span>
                                </div>

                            </div>
                        </div>
                    </div>`;

    accItems += accItem;
  }

  contactListElement.innerHTML = accItems;
};

//get the home screen
let homeElement = document.getElementById("home");
homeElement.addEventListener("click", () => {
  displayScreen("home-screen");
});
// get the contact screen
let appElement = document.getElementById("contact");
appElement.addEventListener("click", () => {
  displayScreen("contact-screen");
});
//get song generator page
let songElement = document.getElementById("song-generator");
songElement.addEventListener("click", () => {
  displayScreen("song-generator-screen");
});
//get temperature converter page
function convertToFahrenheit() {
  const celsius = parseFloat(document.getElementById("temp").value);
  if (isNaN(celsius)) {
    document.getElementById("result").textContent =
      "Please enter a valid number.";
    return;
  }
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById(
    "result"
  ).textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

//update current time
const updateTime = () => {
  let date = new Date();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  let timeSpans = document.getElementsByClassName("time");

  for (elem of timeSpans) {
    // elem.innerText = currentHour + " : " + currentMinute;
    elem.innerText = `${currentHour.toString().padStart(2, "0")}:${currentMinute
      .toString()
      .padStart(2, "0")}`;
  }
};

updateTime();

//temperature converter
// const convertTemp=()=>{
//  celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// };
// }
// convertTemp();

fetchContactList();
