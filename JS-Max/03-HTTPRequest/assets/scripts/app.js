const postTemplate = document.getElementById("single-post");
const listElement = document.querySelector(".posts");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");

const sendHttpRequest = (method, url, data) => {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();

  // xhr.open(method, url);
  // xhr.responseType = "json";

  // xhr.onload = () => {
  //   resolve(xhr.response);
  // };

  // xhr.send(JSON.stringify(data));

  // });

  //return promise;

  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
};

const fetchPosts = async () => {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  //const listOfPosts = JSON.parse(xhr.response)
  const listOfPosts = responseData;

  for (const post of listOfPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    listElement.append(postEl);
  }
};

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});
