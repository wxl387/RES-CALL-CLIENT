import axios from "axios";

export default {

    add: function(userData) {
        return axios.post("/api/adduser", userData);
    },

    checkpwd: function(userData) {
        return axios.post("/api/checkuser", userData);
    }

};
