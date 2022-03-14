import axios from "axios";
import create from "zustand";

const url = "/api/"

export const useStore = create((set) => ({
    partys: [],

    getPartysInfo(year, month) {
        set({partys: null})

        axios.get(`${url}partys?date=${year}-${month}`)
        .then((res) => {
            set({partys: res.data})
        })
        .catch((err) => {
            console.log("Error : " + err);
        })
    },

    addParty(data) {
        console.log(data)
        axios.post(`${url}party`, data, {headers: {"Content-Type": "application/json"}})
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    joinParty(id, data) {

    },
    
    delParty(id) {

    },

    outParty(id) {

    }
}))