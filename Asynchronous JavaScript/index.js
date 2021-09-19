console.log('Before');

const user = getUser(1, (user) => {
    console.log('GitHub user:', user);
});

const repos = getRepositories('Azaro', (repos) => {
    console.log('Repos:', repos);
});

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Reading a user from DB..');
            resolve( {id: id, gitHubUserName: 'Or'});
        }, 2000 );
    });
}

function getRepositories(username){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Reading a user repository from GitHub..');
            resolve (['repo1', ' repo2', 'repo3' ]);
        }, 2000);
    }); 
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Calling GitHub API...');
            resolve (['commit']);
        }, 2000);
    });   }