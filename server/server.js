const http = require("http");
const config = require("../config.json");
const dotenv = require("dotenv");
dotenv.config();

async function fetchData() {
    const response = await fetch(config.SF_FOOD_TRUCK_API);
    const data = await response.json();
    return data;
};

const server = http.createServer(async (request, response) => {
    let httpCode;
    let options;
    let output;

    try {
        if (request.url === "/api/food-trucks") {
            const fetchedData = await fetchData();
            httpCode = 200;
            options = { "Content-Type": "application/json" };
            output = JSON.stringify(fetchedData);
        }
    } catch(error) {
        console.error("Error fetching data:", error);
        httpCode = 500;
        options = { "Content-Type": "text/plain" };
        output = "Internal Server Error";
    }

    response.writeHead(httpCode, options);
    response.end(output);
});

server.listen(process.env.PORT, () => {
    console.log(`Server listening on port: ${process.env.PORT}`)
})