import axios from "axios";

// const url = "https://arcane-spire-45572.herokuapp.com";
const url = "http://localhost:8080";

export default {
  // Event API's  

  // Gets all events
  getAllEvents: function () {
    return axios.get(url + "/api/gameEvents");
  },

  // Gets all events created by current user
  getEvents: function () {
    return axios.get(url + "/api/gameEvents");
  },

  // Gets the event with the given id
  getEvent: function (eventId) {
    return axios.get(url + "/api/gameEvents/" + eventId);
  },
  // Deletes the event with the given id
  deleteEvent: function (eventId) {
    return axios.delete(url + "/api/gameEvents/" + eventId);
  },
  // Saves an event to the database
  saveEvent: function (eventData) {
    return axios.post(url + "/api/gameEvents", eventData);
  },
  updateEvent: function (eventId) {
    return axios.put(url + "/api/gameEvents/" + eventId);
  },

  // User Profile APIs
  // Gets all users
  getUsers: function () {
    return axios.get(url + "/api/users");
  },
  // Gets the user with the given id
  getUser: function (userId) {
    return axios.get(url + "/api/users" + userId);
  },
  // Deletes the user with the given id
  deleteUser: function (userId) {
    return axios.delete(url + "/api/users" + userId);
  },
  // Saves a user to the database
  addUser: function (userData) {
    return axios.post(url + "/api/users/", userData);
  },

  // Login/SignUp APIs
  // Login
  logIn: (username, password) => {
    return axios.put(url + "/api/login", 
    {
      userName: username,
      password: password
    });
  },
  signUp: (username, password) => {
    return axios.post(url + "/api/createaccount", 
    {
      userName: username,
      password: password
    });
  },



  scrape: function () {
    return axios.get(url + "/api/scrape");
  },
  getNews: function () {
    return axios.get(url + "/api/getNews");
  },
  deleteNews: function (userId) {
    return axios.delete(url + "/api/deleteNews/" + userId);
  },
  getGames: function () {
    return axios.get(url + "/api/getGames");
  },
  saveGame: function (eventData) {
  return axios.post(url + "/api/saveGame/", eventData);
  },
  deleteGame: function (userId) {
    return axios.delete(url + "/api/deleteGame/" + userId);
  },


};
