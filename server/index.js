const express = require("express");
const app = express(); 
const dotenv = require("dotenv");
const PORT = process.env.PORT || 6000
const { readdirSync } = require("fs");
const { connectDB } = require("./database/connectionDB");
const cors = require("cors");
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
readdirSync("./routes").map((route) => {
            app.use("/api", require(`./routes/${route}`));
})

app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
});