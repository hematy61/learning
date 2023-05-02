import "./index.css";

const app = document.querySelector("#app");
const homePage = `
  <a href="/" onclick="navigate(event, '/')">Home Page</a>
  `;

const routes = {
  "/": home,
  "/about": about,
  "/contact": contact,
};

function home() {
  app.innerHTML = `
  <a class="text-red-400 text-3xl font-bold underline" href="/" onclick="navigate(event, '/')">Home</a>
  <a href="/about" onclick="navigate(event, '/about')">About</a>
  <a href="/contact" onclick="navigate(event, '/contact')">Contact</a>
  `;
}

function about() {
  app.innerHTML = `
  ${homePage}
    <h1>About</h1>
    `;
}

function contact() {
  app.innerHTML = `
  ${homePage}
    <h1>Contact</h1>
    `;
}

window.addEventListener("popstate", () => {
  // Get the current URL
  const path = window.location.pathname;

  // Call the corresponding function based on the URL
  const route = routes[path];
  route();
});

function navigate(event, path) {
  event.preventDefault();
  window.history.pushState({}, "", path);

  // Call the corresponding function based on the URL
  const route = routes[path];
  route();
}

window.navigate = navigate;
home();
