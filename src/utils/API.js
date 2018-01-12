import axios from "axios";

export default {

    add: function(userData) {
        return axios.post("https://res-call-client.herokuapp.com/api/adduser", userData);
    },

    checkpwd: function(userData) {
        return axios.post("https://res-call-server.herokuapp.com/api/checkuser", userData);
    }

};
