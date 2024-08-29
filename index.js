const express = require("express");
const app = express();
const fetch = require("node-fetch"); // You need to include node-fetch for fetch to work in Node.js

app.get("/", async (req, res) => {
    const fetchNews = async (url) => {
        const response = await fetch(url, { method: "GET" });
        const data = await response.json();
        console.log("Data: ", data);

        // Filter the data
        const filterData = data.articles.filter((item) => 
            item.title !== "[Removed]" && item.description !== "[Removed]"
        );
        console.log("Filtered: ", filterData);
        return filterData; // Return the filtered data
    }

    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=eeab0111904b4256873321997b6ed7b5";
    
    const news = await fetchNews(url); // Call fetchNews and wait for the result
    res.json({ message: "hello", news }); // Send the response with the news data
});

app.get("/home", (req, res) => {
    res.json({
        message: "hello is there"
    });
});

module.exports =app;
