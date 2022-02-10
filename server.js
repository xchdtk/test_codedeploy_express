import express from "express";

const app = express();

app.get("/love", (req, res, next) => {
    res.status(200).send("정말 사랑해");
});

app.listen(3000, () => {
    console.log("server is running");
});
