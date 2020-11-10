import Github from "./githubApi";
import GithubUI from "./githubUI";
const github = new Github();
const ui = new GithubUI();
const searchUser = document.querySelector("#github-user");

// Event listners

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  e.preventDefault();
  console.log(userText);
  if (userText !== "") {
    //Make http call here
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // not found then show error
        ui.showAlert("User does not exist. Not Found!");
      } else {
        //show profile
        ui.showProfile(data.profile);
        console.log(data.repos);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //to clear the profile when input is cleared
    ui.clearProfile();
  }
});
