document.addEventListener('DOMContentLoaded', function () {
    const name          = document.querySelector('#name')
    const username      = document.querySelector('#username');
    const repositorios  = document.querySelector('#repos');
    const followers     = document.querySelector('#followers');
    const follower      = document.querySelector('#follower');
    const link          = document.querySelector('#link');
    const avatar        = document.querySelector('#avatar');

    fetch ('https://api.github.com/users/pabsoftware')
        .then(function(resposta) {
            return resposta.json();
            
        })
        .then(function(json){
            console.log(json);
            name.innerText          = json.name;
            username.innerText      = json.login;
            repositorios.innerText  = json.public_repos;
            followers.innerText     = json.followers;
            follower.innerText      = json.following;
            link.href               = json.html_url;
            avatar.src              = json.avatar_url;
            
        })
})
