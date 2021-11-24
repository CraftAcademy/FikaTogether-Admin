import store from "../state/store/configureStore";
import JtockAuth from "j-tockauth";
import { toast } from "react-toastify";

let url = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  url = "http://localhost:3000";
} else {
  url = "https://fika-together.herokuapp.com";
}
const auth = new JtockAuth({
  host: url,
  prefixUrl: "/api",
});

const Authentication = {
  async signIn(data, loginSuccessMessage) {
    try {
      let response = await auth.signIn(data.email.value, data.password.value);
      toast.success(loginSuccessMessage, {
        onClose: () =>
          store.dispatch({
            type: "SET_CURRENT_USER",
            payload: response.data,
          }),
      });
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  },
};

export default Authentication;
