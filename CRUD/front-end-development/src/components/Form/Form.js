import { useRef } from "react";
import classes from "./Form.module.css";

// This form component function is used to display both add new user form and update user form.
const Form = (props) => {
  // When we create a class/functional component, we will get access to the props object whcih in order to not overwrite the props object again and again, we do the destructuring.
  const {
    formHandler,
    closeModalHandler,
    text,
    buttonStyle,
    buttonText,
    activator,
    userId,
  } = props;

  // We're only interested in the user input once when the form is summited. And for this, we can use a number of concept build into react, the concept of refs. Now ref stands for reference, and react simply allow us to set up references to DOM elements, so we can get direct access to DOM elements. It's similar to useState but it will not re-render, just to keep the state.
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const addressInputRef = useRef();
  const interestedInInputRef = useRef();

  function submitHandler(event) {
    // Any event hadler will get access to the event object whcih there are a bunch of methods. In this case, we use preventDefault to disable refreshing page.
    event.preventDefault();

    // So now we can get access to dom elements and bring its value
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredInterestedIn = interestedInInputRef.current.value;

    const userData = {
      name: enteredName,
      age: enteredAge,
      address: enteredAddress,
      interestedIn: enteredInterestedIn,
    };

    // We check who is the activator in order to perform the request correctly.
    if (activator === "add") formHandler(userData);

    if (activator === "update") formHandler(userId, userData);

    // After submit the form, we close the modal.
    closeModalHandler();
  }

  return (
    <div className={classes.backdrop}>
      <form className={classes.form} onSubmit={submitHandler}>
        <button
          type="button"
          className={classes.popup__close}
          onClick={closeModalHandler}
        >
          &times;
        </button>
        <div className="mb-3">
          <h2>{text}</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            id="name"
            required
            ref={nameInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            id="address"
            required
            ref={addressInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            id="age"
            required
            ref={ageInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="interestedIn" className="form-label">
            Interested In:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Interested In Ex. Tablet, Smartphone, Car cam, IP cam"
            id="interestedIn"
            required
            ref={interestedInInputRef}
          />
        </div>
        <button type="submit" className={`btn btn-${buttonStyle}`}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;
