import Axios from "axios";
import { Fragment } from "react";

const UserList = (props) => {
  // Do destructuring
  const { users, deleteUser, openModalHandler } = props;

  return (
    // We user fragment element because we don't want to render the DOM element, just used as a parent level element.
    <Fragment>
      {/* We map the users array which map function accept callback function and map pass the current value, index, whole array but in this case we only used current value(user) and create the list of users. */}
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.address}</td>
          <td>{user.age}</td>
          <td>{user.interestedIn}</td>
          <td>
            <div className="buttons-container">
              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={(event) => {
                  openModalHandler(event, ["update", user.id]);
                }}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default UserList;
