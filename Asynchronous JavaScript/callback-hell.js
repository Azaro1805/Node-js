//callback hell

console.log("Before");

getUser(1, getRepositories);

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from DB..");
    callback({ id: id, gitHubUserName: "Or" });
  }, 2000);
}

function getRepositories(username, callback) {
  getRepositories(user.gitHubUserName, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}
