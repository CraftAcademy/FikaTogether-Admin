import axios from "axios";
import { toast } from "react-toastify";

const Participants = {
  async create(participant) {
    try {
      const params = participant;
      const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
      const response = await axios.post("/api/participants", params, {
        headers: headers,
      });
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  },
};
export { Participants };
