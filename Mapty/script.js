//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
// Project Planning

// 1) USER STORIES - is basically a description of the application's functionality from the user's perspective

// 2) FEATURES - So user stories are basically a high level overview of the whole application, which will allow us developers to determine the exact features that we need to implement in order to make the user stories actually work as intended.

// 3) FLOWCHART - Then to visualize the different actions that a user can take, and how the program react to these actions, we usually put all these features into a nice flow chart.

// 4) ARCHITECTURE - once we know exactly what we're gonna build, it's time to think about how we're gonna build it. And this brings us to the project's architecture. And in this context, architecture simply means how we will organize our code, and what JavaScript features we will use. So the project's architecture is essentially what holds all the code together. It gives us a structure in which we can then develop the application's functionality.

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
// Project implementation

'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  // We also have an array of objects which store workouts, so we should have an ID for each object.

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat , lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription(description) {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} `;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/hr
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Running([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//  APPLICATION
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local Storage
    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveTopopup.bind(this));
  }

  _getPosition() {
    //////////////////////////////////
    // Using the geolocation API

    // Now just to make sure that we don't get any errors in an old browser, we can test if this navigator.geolocation actually exists.
    if (navigator.geolocation) {
      // This function here takes as an input 2 Callback functions.

      // The first one is to Callback function that will be called on success. So whenever the browser successfully got the coordinates of the current position of the user.

      // The second callback is the Error Callback which is the one that is gonna be called when there happened an error while getting the coordinates. (Ex. when we block the website to access your location)

      // This _loadMap is actually called by getCurrentPosition function. So, this is actually treated as a regular function call, not as a method call. Since this is a callback function, we are not calling it ourselves. As we learned before in a regular function call, the this keyword is set to undefined. So we need to use the bind method to point to the current object.
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    // console.log(`https://www.google.co.th/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    // the arguments that we pass into the map method must be the id name of an element in our html. And it is in that element where the map will be displayed.

    // the second arguments that we pass into the setView method is zoom level.

    // this map object here where we can now basically add an event listener. So the idea is similar to what we do using add event listener but on the map, we can simply do this. So map.on
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // the map that we see on the page is basically made up of small tiles and these tiles they come from this URL here, which basically is from open street map.

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // The first thing that we need to do is to actually add the event handler to the map so that we can then handle any incoming clicks. Now, how are we gonna do that? I mean, should we simply attach an event listener to this whole map element here? That wouldn't really work because then we would have no way of knowing where exactly the user clicked here on the map. So basically we would have no way of knowing the GPS coordinates of whatever location the user clicked here on the map. Because that is data that only the map knows.

    // So when I click, let's say here where I am right now, then I want to handle that click exactly at that position. And so therefore we need access to the coordinates of the point that was just clicked.

    // So in summary, what I'm trying to say is that we cannot simply use the add event listener method that we have been using all the time. Instead, we can use something similar that is actually available on Leaflet. So in the leaflet library.

    // map.on method is not coming from Javascript itself. It is instead of coming from the leaflet library.
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');

    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid (Create guard clause)
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout cycling, create running object

    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid (Create guard clause)
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    // console.log(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form & Clear input fields
    this._hideForm();

    // Set local Storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveTopopup(e) {
    // The initial stage of our application, there are no workouts (hasn't been created yet) on which we could click. In this case, we should actually attach the event handler to the parent element (workouts container) (event delegation)
    const workoutEl = e.target.closest('.workout');
    // console.log(workoutEl); // We will get the <li>...</li>, its contain the data-id which is used to find the workout in the workouts array. We can then basically build a bridge between the user interface and the data that we have actually in our application. So in this case our data in the workout's array, because if we didn't have this ID here stored in the user interface, then how would we know which is the objects in the workouts array that we need to scroll to?

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    // console.log(workout); // Now we get the object in workouts array.

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // Using public interface
    // workout.click();
  }

  // Local storage is an API that the browser provides for us, is basically a place in the browser, where we can store data that will stay there even after we close the page. So basically the data is basically linked to the URL on which we are using the application. And so it is only advised to use for small amounts of data. That's because local storage is blocking, so it will surely slow down your application.

  _setLocalStorage() {
    // setItem(--KEY--(STRING), --VALUE(STRING)--)
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    // Retrive the value with the key
    // Note thatm when we converted our object to a string , and the back from the string to objects, we lost the prototype chain. So these new objects here that we recovered from the local storage are now just the regular objects. there are no longer objects that were created by the running or by the cycling class. And so therefore, they will not able to inherit any of their methods. And so in the end, that's the reason why workout.click is now not a function anymore. To fix this problem, we could go ahead and restore the object right here. So, in our getLocalStorage, we could now loop over this data here, and then restore the objects by creating a new object using the class, based on the data that is coming here from local storage. (This course we are not gonna fix that)

    const data = JSON.parse(localStorage.getItem('workouts')); // convert to real object in array again
    console.log(data);

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach(work => {
      this._renderWorkout(work);
      // it doesn't work because _getLocalStorage() is executed right at the begining. So we are trying to add this marker to the map right at the beginning. However, at this point the map has actually not yet been loaded. It takes some time. So, first the position of the user needs to beget using geolocation, so this one here. And then after that, the map has also to be loaded. So there's a lot of stuff that has to happen before we can actually render any markers on the map. So instead of trying to render the markers, right at the very beginning, we should only do that once the map has been loaded. And so we can put that logic right here in this method of load map at the very end.
      // this._renderWorkoutMarker(work);
    });
  }

  // Public interface of this calss
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
// app._getPosition(); We can put this in the constructor function as well, and it's cleaner. This app object is created right in begining when the page loads down. So that means that the constructor function is also executed immediately as the page loads.
