export async function loadJSONData(url) {
    try {
        let cvDataObj = JSON.parse(localStorage.getItem("cvDataObj"));

        if(cvDataObj == null){
            const response = await fetch(url);
            cvDataObj = await response.json();
            localStorage.setItem("cvDataObj", JSON.stringify(cvDataObj));
        }
        return cvDataObj;
    } catch (error) {
        console.error("Error:", error);
    }
}
