var callAPI = () => {
    fetch("https://developer.mozilla.org/en-US/docs/Web/API/Headers/get")
        .then(response => {
            const headers = response.headers;

            const contentType = headers.get('Content-Type');
            console.log('Content-Type:', contentType);
        });
};

callAPI();



var callAPI = () => {
    fetch("https://developer.mozilla.org/en-US/docs/Web/API/Headers/get")
        .then(response => {
            const headers = response.headers;

            const contentTypeOne = headers.get("Accept-Encoding");
            const contentTypeTwo = headers.get("Content-Type");

            console.log('Accept-Encoding:', contentTypeOne);
            console.log('Content-Type:', contentTypeTwo);
        });
};


async function callAPI() {
    const url = "https://developer.mozilla.org/en-US/docs/Web/API/Headers/get";

    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log(`Response Status: ${response.status}`);
        }
    }
    
    catch (error) {
        console.error(error.message)
    }
};

