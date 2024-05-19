const app = require(".");
const connectDb = require("./config/db");

app.listen(5000, async()=>{
    await connectDb();
    console.log(`Server is running on port 5000`);
})