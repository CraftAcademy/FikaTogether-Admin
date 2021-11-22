import JtockAuth from "j-tockauth";

let url = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "https://fika-together.herokuapp.com";
} else {
  url = "http://localhost:3000";
}
const auth = new JtockAuth({
  host: url,
  prefixUrl: "/api",
});

export default auth;
