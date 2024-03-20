const http = require("http");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

async function fetchData() {
    const response = await axios.get(process.env.SF_FOOD_TRUCK_API);
    return response.data;
};

const server = http.createServer(async (request, response) => {
    let httpCode;
    let options;
    let output;

    try {
        if (request.url === "/api/food-trucks") {
            const fetchedData = await fetchData();
            httpCode = 200;
            options = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            };
            output = JSON.stringify(fetchedData);
        } else {
            httpCode = 404;
            options = { "Content-Type": "text/plain" };
            output = "Not Found";
        }
    } catch(error) {
        console.error("Error fetching data:", error);
        httpCode = 500;
        options = { "Content-Type": "text/plain" };
        output = "Internal Server Error";
    }

    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET");
    
    response.writeHead(httpCode, options);
    response.end(output);
});

server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port: ${process.env.SERVER_PORT}`)
})