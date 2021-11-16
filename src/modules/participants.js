import axios from "axios";

const Participants = {
  async create(participant) {
    try {
      const params = {};
      const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
      const response = await axios.post("/api/participants", params, {
        headers: headers,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
export { Participants };