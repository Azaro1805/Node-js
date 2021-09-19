console.log("Before");

// getUser(1, (user) => {
//   getRepositories(user.gitHubUserName, (repos) => {
//     getRepositories(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// we change this lines with  :

getUser(1)
  .then((user) => getRepositories(user.gitHubUserName))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("Commits:", commits))
  .catch(err => console.log('Error', err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from DB..");
      resolve({ id: id, gitHubUserName: "Or" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user repository from GitHub..");
      resolve(["repo1", " repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
