export async function loadJSONData(url) {
    try {
        const oneDay = 86400000; // 24 hours in milliseconds
        let cvDataObj = JSON.parse(localStorage.getItem("cvDataObj"));

        // If timestamp is missing or the timestamp is older than 24 hours, fetch the data again
        if(cvDataObj == null || cvDataObj.timeStamp == null || Date.now() > parseInt(cvDataObj.timeStamp) + oneDay) {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`HTTP ERROR status = ${response.status}`);
            }

            cvDataObj = await response.json();
            saveToLocalStorage(cvDataObj);
        }

        return cvDataObj;
    } catch (error) {
        console.error("Error:", error);
    }
}

function saveToLocalStorage(cvDataObj) {
    // Attach a timestamp to the object
    cvDataObj.timeStamp =  Date.now();
    localStorage.setItem("cvDataObj", JSON.stringify(cvDataObj));
}
