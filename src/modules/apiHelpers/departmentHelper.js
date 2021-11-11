import axios from "axios";
import store from "../../state/store/configureStore";

const Department = {
  async index() {
    try {
      let response = await axios.get("/api/departments");
      store.dispatch({
        type: "SET_DEPARTMENT_INDEX",
        payload: response.data.departments,
      });
    } catch (error) {}
  },
};

export { Department };
