class UI{
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" alt="" class="img-fluid mb-3"/>
                        <a href="${user.html_url}" target="_blank" class="btn btn-dark text-center text-white mb-2 btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-danger m-2">Public Respo: ${user.public_repos}</span>
                        <span class="badge badge-dark m-2">Followers: ${user.followers}</span>
                        <span class="badge badge-danger m-2">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Name: ${user.name}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Bio: ${user.bio}</li>
                            <li class="list-group-item">Company: ${user.company}</li>
                        </ul>  
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repositary's</h3>
            <div id="repos"></div>     
        `;
    }
    showAlert(){
        const alert = document.querySelector('.alert');
        alert.style.display = "block";
        setTimeout(() => {
            this.clearAlert(alert);
        }, 2000);
    }
    clearAlert(alert){
        alert.style.display = "none";
    }
    clearProfile(){
        this.profile.innerHTML = '';
    }
    showRespos(respo){
        let out = [];
        respo.forEach(function(repo){
            let obj = {
                name : repo.name,
                url : repo.html_url
            }
            out.push(obj);
        });
        document.getElementById('repos').innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="list-group">
                            <li class="list-group-item"> <a href="${out[0].url}" target="_blank" class = "btn btn-dark btn-block">${out[0].name}</a></li>
                            <li class="list-group-item"> <a href="${out[1].url}" target="_blank" class = "btn btn-dark btn-block">${out[1].name}</a></li>
                            <li class="list-group-item"> <a href="${out[2].url}" target="_blank" class = "btn btn-dark btn-block">${out[2].name}</a></li>
                            <li class="list-group-item"> <a href="${out[3].url}" target="_blank" class = "btn btn-dark btn-block">${out[3].name}</a></li>
                            <li class="list-group-item"> <a href="${out[4].url}" target="_blank" class = "btn btn-dark btn-block">${out[4].name}</a></li>
                        </ul>  
                    </div>
                </div>
            </div>
        `;
    }
}