import { toast } from "react-toastify";
import axios from "axios";
import store from "../../state/store/configureStore";

const Fika = {
  async index() {
    try {
      let response = await axios.get("/api/fikas");
      store.dispatch({
        type: "SET_FIKA_INDEX",
        payload: response.data.fikas,
      });
    } catch (error) {}
  },
  async create() {
    try {
      let response = await axios.post("/api/fikas");
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
};

export { Fika };
