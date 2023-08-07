const createUsers = (userData) => {
  const container = document.createElement("div");
  container.className = "container";

  const createTitle = document.createElement("h2");
  createTitle.innerHTML = userData.title;

  const createBody = document.createElement("p");
  createBody.innerText = userData.body;

  container.append(createTitle, createBody);
  return container;
};
export default createUsers;
