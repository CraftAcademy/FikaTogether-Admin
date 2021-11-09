import axios from "axios";
import store from "../../state/store/configureStore";

const Fika = {
  async index() {
    let response = await axios.get("/api/");
    store.dispatch({
      type: "SET_FIKA_INDEX",
      payload: response.data.fikas,
    });
  },
};

export { Fika };
