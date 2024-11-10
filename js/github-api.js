import { Octokit, App } from "https://esm.sh/octokit";

// ***Connect to GitHub***

let octokit = null;

export async function connectToGitHub(authenticate=false) {
    try {
        if(authenticate){
            // Authenticate on GitHub
            // Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
            const GITHUB_ACCESS_TOKEN = "GitHub_Access_Token";
            octokit = new Octokit({ auth: GITHUB_ACCESS_TOKEN });
            const {data: { login }} = await octokit.rest.users.getAuthenticated(); 
            console.log("Hello, %s", login);
            return octokit;
        } else {
            octokit = new Octokit({})
        }
    } catch (error) {
        console.error(`Error connecting to GitHub:`, error);  
    }
}

export async function getRepoEndpoint(name, endpoint) {
    try {
        const oneDay = 86400000; // 24 hours in milliseconds

        if(octokit == null) {
            await connectToGitHub();
        }

        // Check if data is in cache (Local Storage)
        let endpointObj = JSON.parse(localStorage.getItem(`${name} : ${endpoint}`));
        
        // Check if data is older than 24h
        if(endpointObj == null || endpointObj.timeStamp == null || Date.now() > parseInt(endpointObj.timeStamp) + oneDay) {
            // Fetch data from API
            endpointObj = await octokit.request(endpoint, {
                owner: "Chas-Henrik",
                repo: name,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            // Attach a timestamp to data object
            endpointObj.timeStamp =  Date.now();

            // Save to local storage
            localStorage.setItem(`${name} : ${endpoint}`, JSON.stringify(endpointObj));
        }
        return endpointObj;
    } catch (error) {
        console.error(`Error fetching ${name} repository:`, error);  
    }
}

