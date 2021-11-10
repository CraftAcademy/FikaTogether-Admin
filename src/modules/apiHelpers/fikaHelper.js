import axios from "axios";
import store from "../../state/store/configureStore";

const Fika = {
  async index() {
    let response = await axios.get("/api/fikas");
    store.dispatch({
      type: "SET_FIKA_INDEX",
      payload: response.data.fikas,
    });
  },
};

const Department = {
  async index() {
    let response = await axios.get("/api/departments");
    store.dispatch({
      type: "SET_DEPARTMENT_INDEX",
      payload: response.data.departments,
    });
  },
};

export { Fika, Department };
