import axios from "axios";

const url = "https://arcane-spire-45572.herokuapp.com";
// const url = "http://localhost:8080";

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
  updateEvent: function (eventData) {
    return axios.put(url + "/api/gameEvents/", eventData);
  },

  // User Profile APIs
  // Gets all users
  getUsers: function () {
    return axios.get(url + "/api/users");
  },
  // Gets the user with the given id
  getUser: function (userId) {
    return axios.get(url + "/api/users/" + userId);
  },
 
  // Saves a user to the database
  addUser: function (userData) {
    return axios.post(url + "/api/users/", userData);
  },

  // Login/SignUp APIs
  // Login
  logIn: (username, password) => {
    return axios.post(url + "/api/login", 
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
  
  joinEvent: function (token, eventId) {
    return axios.post(url + "/api/users/join/" + token + "/" + eventId);
  },


  scrape: function () {
    return axios.get(url + "/api/scrape");
  },
  getNews: function () {
    return axios.get(url + "/api/getNews");
  },
  deleteNews: function (newsId) {
    return axios.delete(url + "/api/deleteNews/" + newsId);
  },


  getGames: function () {
    return axios.get(url + "/api/getGames");
  },
  saveGame: function (eventData) {
  return axios.post(url + "/api/saveGame/", eventData);
  },
  deleteGame: function (gameId) {
    return axios.delete(url + "/api/deleteGame/" +gameId);
  },
  updateGame: function (gameId, gameData) {
    return axios.put(url + "/api/updateGame/" + gameId, gameData);
  },
  updateProfile: function (userId, profileObj) {
    return axios.put(url + "/api/updateProfile/" + userId, profileObj);
  },
  getProfile: function (userId) {
    return axios.get(url + "/api/getProfile/" + userId);
  }
};
