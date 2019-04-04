import axios from "axios";

export default {
  // Gets all leads
  getAllLeads: function() {
    return axios.get("/allleads");
  },
  // Deletes the lead with the given id
  deleteLead: function (id) {
    return axios.delete("/api/Leaddelete" + id);
  },
  // // Saves a lead to our amazon database
  saveLead: function (LeadData) {
    return axios.post("/api/Leadmarketing",LeadData);
  },
  //Lead acquirer post link
  sendLead: function (LeadData) {
    return axios.post("/api/Lead",LeadData)
  },
  pullAgent: function (id) {
   return axios.get("/thisagent/" + id)
 },
  pullAllAgents: function() {
    return axios.get("/allagents")
  }

}
