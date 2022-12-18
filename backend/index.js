import express from "express";
const app = express();
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
import {createProxyMiddleware} from "http-proxy-middleware"


const port = process.env.PORT;
const HOST = process.env.HOST;
const API_ALL_REPO_URL = process.env.API_ALL_REPO_URL;
const API_SINGLE_REPO_URL = process.env.API_SINGLE_REPO_URL;



app.use(express.json());
app.use(cors());

// i had first created without proxy so there are controller and other file 


app.get("/api/repolist" ,createProxyMiddleware({
  target: API_ALL_REPO_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/api/repolist`]: '',
  },
}));



app.get("/api/singlerepo/:name/:repo" ,createProxyMiddleware({
  target: API_SINGLE_REPO_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/api/singlerepo`]: '',
  },
}));




app.get("/api/readmemd/:name/:repo/readme" ,createProxyMiddleware({
  target: API_SINGLE_REPO_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/api/readmemd`]: '',
  },
}));


//serverCheck
app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome to the server" });
});





//portListening
app.listen(port, (error) => {
  if (!error) {
    console.log(`Server is running at port ${port}`);
  } else {
    console.log("Error while running the server", error);
  }
});
