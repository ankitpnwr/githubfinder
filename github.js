class Github{
    constructor(){
        this.client_id = "a1d7d9aaf83975c1b8da";
        this.client_secret = "c87fa637037462bfcbbb86a9c3a7db622c546e8a"
        this.page_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.page_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}