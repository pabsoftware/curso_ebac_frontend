document.addEventListener('DOMContentLoaded', function () {
    const name          = document.querySelector('#name')
    const username      = document.querySelector('#username');
    const repositorios  = document.querySelector('#repos');
    const followers     = document.querySelector('#followers');
    const follower      = document.querySelector('#follower');
    const link          = document.querySelector('#link');
    const avatar        = document.querySelector('#avatar');
    const box_error     = document.querySelector('#error');
    const andpoint      = 'https://api.github.com/users/pabsoftware';
 
        fetch (andpoint)
            .then(function(resposta) {
                    //Aqui fiz ele cair no catch, mesmo tendo conexão com o servidor, porem sem sucesso na obtenção dos dados.
                    if (!resposta.ok) {
                        throw Error(resposta.statusTex);
                    }
                    
                return resposta.json(); 
            }) 
            .then(function(json){
                
                name.innerText          = json.name;
                username.innerText      = json.login;
                repositorios.innerText  = json.public_repos;
                followers.innerText     = json.followers;
                follower.innerText      = json.following;
                link.href               = json.html_url;
                avatar.src              = json.avatar_url;
            })
            //O then já possue função do try e havendo erro com conexão ou outro, cairá no catch
            .catch(function(erro){
                box_error.innerText = "Houve um erro no carregamento dos dados. Favor tente mais tarde";
                box_error.style.display = "block";
                
            })
   
})
