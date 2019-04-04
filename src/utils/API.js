import axios from "axios";

export default {
  // Saves a lead to marketing database and routes to lead acquirer
  saveLead: function (data) {
    return axios.post("api/leads", data);
  }

}
