import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList";
import Form from "./components/Form/Form";

const App = () => {
  // useState is a so-called React hook and those React can only be called directly in React component functions.
  // the argument's useState is the state start value
  // In this case, the initial is false which means the modal is closed. useState always return an array with exactly 2 elements: 1. the current state 2. function that allows you to set the state value, and we call this state changing function, React will in the end re-execute the component function to which this state belongs and re-evalute it, and also update what's rendered on the screen. This allows you to pick up the latest state value and possibly render something different depending on the state.
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activatorModal, setActivatorModal] = useState("");
  const [currentUpdate, setCurrentUpdate] = useState(null);

  ///////////////////////////////////////////////////////////////
  // LOAD DATA FROM THE LOCAL HOST SERVER

  // useEffect(first argument, second argument)
  // 1. First argument: callback function ,
  // 2. Second argument: array of dependencies. With this second argument added though React will check the values you add to this array and compare them tho their equivalents when this effect function was executed the last time. ประมาณว่ามันจะ execute callback function ก็ต่อเมื่อ value ของ dependencies ที่เราระบุใน array นั้นแตกต่างจากการ excute callback ที่แล้ว
  // 2.1 if we would not specify then this effect function would execute whenever this component function executes. There is no difference compared to just running the code in the component function. (using useEffect is not necessary)
  // 2.2 And if we would specify[](empty array) means there is no dependencies that will trigger the callback function run again.

  // In this case we use Axios API to make the GET HTTP request and we useEffect to execute the callback function once, and set the loadedUsers to what we response from the server.
  useEffect(() => {
    Axios.get("http://localhost:3003/").then((response) => {
      setLoadedUsers(response.data);
    });
  }, []);

  ///////////////////////////////////////////////////////////////
  // CREATE USER TO THE LOCAL HOST SERVER

  // we use addUser function to make the POST HTTP request with Axios. After that, we set the loaded users. We need to create a new array because this app function will be triggered when the state or props changed which we just modified the data in original array, App function will not be re-rendered since it didn't allocate a new array in memory heap. Therefore, we use spread operator to last loadedUser state, and add new user to a new array.
  const addUser = (userData) => {
    Axios.post("http://localhost:3003/createUser", userData).then(() => {
      setLoadedUsers([...loadedUsers, userData]);
    });
  };

  ///////////////////////////////////////////////////////////////
  // UPDATE USER TO THE LOCAL HOST SERVER

  // we use addUser function to make the POST HTTP request with Axios. In order to update any user, we need to know the id of the user since this is the unique identitier of each user that can make us update the user precisely. And the second parameter of Axios.put is the updated user data. After that, we set the loaded user which we use map function to find the same user id, and create a new user object based on that id.
  const updateUser = (id, userData) => {
    Axios.put("http://localhost:3003/update", {
      id: id,
      ...userData,
    }).then((response) => {
      setLoadedUsers(
        loadedUsers.map((val) => {
          return val.id === id
            ? {
                id: id,
                ...userData,
              }
            : val;
        })
      );
    });
  };

  ///////////////////////////////////////////////////////////////
  // DELETE USER TO THE LOCAL HOST SERVER

  // we use addUser function to make the DELETE HTTP request with Axios. In order to delete any user, we need to know the id of the user since this is the unique identitier of each user that can make us delete the user precisely. We set the loadedUser by creating a new array which filtered out the object that contain deleted user id as the value of id property.
  const deleteUser = (id) => {
    Axios.delete(`http://localhost:3003/delete/${id}`).then(() => {
      setLoadedUsers(loadedUsers.filter((user) => user.id != id));
    });
  };

  // We use the openModalHandler function to open the modal, and recognize the activator who trigger the modal which can either be "Add button" or "Update  button". And if the activator is update button we will keep the id to currentUpdate state.
  const openModalHandler = (_, activator) => {
    setModalIsOpen(true);
    setActivatorModal(activator[0]);
    activator[1] && setCurrentUpdate(activator[1]);
  };

  // We use the openModalHandler function to open the modal
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <section className="App container all-users-container mt-5 mb-5">
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(event) => {
                openModalHandler(event, ["add"]);
              }}
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span> Add a user</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped align-middle">
              <thead className="thead-primary">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Age</th>
                  <th scope="col">Interested In</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Custom element we use self closing tag if there is no content inside like <img/> <input/> */}
                <UserList
                  users={loadedUsers}
                  deleteUser={deleteUser}
                  openModalHandler={openModalHandler}
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* We use the short-circuiting feature which means it will execute continously when these operands are truthy values. On the other hand, if it found the falsy values( null, 0, '', undefined) or false value, it will return a falsy value immediately and eventually not perform the form displaying.  */}
      {/* In addition, we pass the props to the Form element to differentiate between the add new form and update user form */}
      {modalIsOpen && activatorModal === "add" && (
        <Form
          formHandler={addUser}
          closeModalHandler={closeModalHandler}
          text="Let's add a new user via this form"
          buttonStyle="success"
          buttonText="Submit"
          activator={activatorModal}
        />
      )}

      {modalIsOpen && activatorModal === "update" && (
        <Form
          formHandler={updateUser}
          closeModalHandler={closeModalHandler}
          text="Update the selected user"
          buttonStyle="warning"
          buttonText="Update"
          activator={activatorModal}
          userId={currentUpdate}
        />
      )}
    </div>
  );
};

export default App;
