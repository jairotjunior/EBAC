document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('.name');
    const username = document.querySelector('.username');
    const repos = document.querySelector('.repos');
    const following = document.querySelector('.following');
    const followers = document.querySelector('.followers');
    const avatar = document.querySelector('.profile-avatar');
    const link = document.querySelector('.profile-link');
    
    fetch('https://api.github.com/users/jairotjunior')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        nameElement.innerText = json.name;
        username.innerText = json.login;
        repos.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        avatar.src = json.avatar_url;
        link.href = json.html_url;
    })
})
