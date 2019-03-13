const axios = require('axios');

const axiosInstance = axios.create({
    baseURL: "http://localhost:8901"
});

axiosInstance.interceptors.response.use((response) => {
    console.log("intercepted");

    return response;
}, (error) => {
    console.log("error intercepted");

    return;
});

axiosInstance.get("/")
    .then((resp) => {
        console.log(resp.data);
        console.log(resp.headers);
    })
    .catch((error) => {
        console.log("unauthorized - redirecting to login");
    })

