import axios from "axios";

export default {
  // Event API's  

  // Gets all events
  getAllEvents: function() {
    return axios.get("/api/gameEvents");
  },
  // Gets all events created by current user
  getEvents: function(user_id) {
    return axios.get("/api/gameEvents");
  },
  // Gets the event with the given id
  getEvent: function(eventId) {
    return axios.get("/api/gameEvents/" + eventId);
  },
  // Deletes the event with the given id
  deleteEvent: function(eventId) {
    return axios.delete("/api/gameEvents/" + eventId);
  },
  // Saves an event to the database
  saveEvent: function(eventData) {
    return axios.post("/api/gameEvents", eventData);
  },
  updateEvent: function(eventId) {
    return axios.put("/api/gameEvents/" + eventId);
  },
  
  // User Profile APIs
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(userId) {
    return axios.get("/api/users" + userId);
  },
  // Deletes the user with the given id
  deleteUser: function(userId) {
    return axios.delete("/api/users" + userId);
  },
  // Saves a user to the database
  addUser: function(userData) {
    return axios.post("/api/users/", userData);
  }
  
};
