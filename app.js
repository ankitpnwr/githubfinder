const github = new Github;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener("keyup", (e) => {
    let userText = e.target.value;
    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message == "Not Found"){
                // show some alert
                ui.showAlert();
            }else{
                // show profile
               ui.showProfile(data.profile);
               ui.showRespos(data.repos);
            }
        });
    }else{
        // clear Profile
        ui.clearProfile();
    }
})