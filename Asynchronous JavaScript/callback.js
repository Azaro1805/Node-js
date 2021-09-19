console.log('Before');

const user = getUser(1, (user) => {
    console.log('GitHub user:', user);
});

const repos = getRepositories('Azaro', (repos) => {
    console.log('Repos:', repos);
});

console.log('After');

function getUser(id, callback) {
    setTimeout( () => {
        console.log('Reading a user from DB..');
        callback( {id: id, gitHubUserName: 'Or'});
    }, 2000 );
}

function getRepositories(username, callback){
    setTimeout( () => {
        console.log('Reading a user repository from GitHub..');
        callback (['repo1', ' repo2', 'repo3' ]);
    }, 2000);
}
