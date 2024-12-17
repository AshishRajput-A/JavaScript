document.addEventListener("DOMContentLoaded", () => {
  const inputData = document.getElementById("input-text");
  const btn = document.getElementById("get-Github-btn");
  const githubData = document.getElementById("github-data");
  const displayUsername = document.getElementById("Username");
  const dispayFollower = document.getElementById("Followers");

  const githubImage = document.getElementById("images");

  btn.addEventListener("click", async () => {
    const user = inputData.value.trim();

    if (!user) return;

    try {
      const userData = await fetchGithubData(user);

      displayGithubData(userData);
    } catch (error) {
      console.log(error);
    }
  });

  async function fetchGithubData(user) {
    let url = `https://api.github.com/users/${user}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("User not found.");
    }

    const data = await response.json();

    // console.log(typeof response);
    // console.log(data);
    return data;
  }

  function displayGithubData(data) {
    const { name, followers, avatar_url } = data;

    displayUsername.textContent = `Username.:${name}`;
    dispayFollower.textContent = `Followers.: ${followers}`;
    githubImage.src = avatar_url;
    githubData.style.height = "100px";
    githubData.style.width = "100px";
    githubData.title = "Github-Image";
  }
});
