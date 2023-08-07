import getUsers from "../api/getUsers.js";
import dom from "./dom.js";
import createUsers from "./components/createUsers.js";

const showUsers = (users) => {
  users.forEach((userData) => {
    const userDom = createUsers(userData);
    dom.userDom.append(userDom);
  });
};

getUsers(showUsers);
