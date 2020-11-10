class GithubUI {
  constructor() {
    this.profile = document.querySelector(".git");
    this.repos = document.querySelector(".profile");
    this.alertMessage = document.querySelector(".form-control");
  }

  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
             <div class="git-profile">
        <img src="${user.avatar_url}" alt="" />
        <a href="${user.html_url}" class="btn btn--secondary">View Profile</a>
      </div>
      <div class="git-details">
        <div class="repo">
          <div class="repo-details">
            <p class="repo-details__badge repo-details__badge--1">
              Public Repos: ${user.public_repos}
            </p>
            <p class="repo-details__badge repo-details__badge--2">
              Public Gists: ${user.public_gists}
            </p>
            <p class="repo-details__badge repo-details__badge--3">
              Followers: ${user.followers}
            </p>
            <p class="repo-details__badge repo-details__badge--4">
              Following:  ${user.following}
            </p>
          </div>
        </div>
        <div class="git-details__text">
          <ul>
            <li>Company: ${user.company}</li>
            <li>Website/Blog: ${user.blog}</li>
            <li>Location: ${user.location}</li>
            <li>Member Since:  ${user.created_at}</li>
          </ul>
        </div>
      </div>
      `;
  }

  // Show user repos
  showRepos(repos) {
    let output = "";
    repos.forEach(function (repo) {
      output += `
           <div class="repo">
          <a href="#" class="repo-title" target="_blank">${repo.name}</a>

          <div class="repo-details">
            <p class="repo-details__badge repo-details__badge--1">Stars: ${repo.stargazers_count}</p>
            <p class="repo-details__badge repo-details__badge--2">
              Watchers: ${repo.watchers_count}
            </p>
            <p class="repo-details__badge repo-details__badge--3">Forks: ${repo.forms_count}</p>
          </div>
        </div>
        `;
    });

    // Output repos
    document.querySelector(".profile").insertAdjacentHTML("beforeend", output);
  }

  // Show alert message
  showAlert(message) {
    // Clear any remaining alerts
    this.clearAlert();
    let output = `<p class="repo-details__badge repo-details__badge--1 repo-error">
Error: ${message}
</p>`;
    document
      .querySelector(".github-user")
      .insertAdjacentHTML("afterend", output);
    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".repo-error");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
  }
}

export default GithubUI;
