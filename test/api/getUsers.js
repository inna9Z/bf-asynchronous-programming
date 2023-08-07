const getUsers = (showUsers) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((users) => showUsers(users))
    .catch((error) => console.error(error));
};

export default getUsers;
