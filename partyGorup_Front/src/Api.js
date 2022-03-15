import axios from "axios";
import Swal from "sweetalert2";
import create from "zustand";
import { getCookie } from "./cookie";

const instance = axios.create(
  {headers: {
    "X-Mbr-Code": getCookie("code"),
    "Content-Type": "application/json"
  }}
)

const url = "/api/";

const toast = Swal.mixin({
  toast: true, 
  position: 'center-center', 
  showConfirmButton: false, 
  timer: 1500, 
  timerProgressBar: true, 
  didOpen: (toast) => { 
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useStore = create((set) => ({
  partys: [],

  getPartysInfo(year, month) {
    set({ partys: null });

    instance
      .get(`${url}partys?date=${year}-${month}`)
      .then((res) => {
        set({ partys: res.data });
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  },

  addParty(data) {
    instance
      .post(`${url}party`, data)
      .then((res) => {
        toast.fire({
          icon: 'success',
          title: "정상적으로 생성됐어요!"
        })
        set((state) => ({partys: state.partys}))
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      });
  },

  joinParty(id, data) {
    instance
      .post(`${url}member/${btoa(id.toString())}`, data)
      .then((res) => {
        toast.fire({
          icon: 'success',
          title: "정상적으로 참여했어요!"
        })
        let temp = this.partys.map((item) => {
            if(item.id === id) {
              item.members.push(data)
            }
            return {...item}
          })
        set({partys: temp})
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      })
  },

  leaveParty(id, code, data) {
    instance
      .delete(`${url}member/${btoa(id.toString())}`, {data})
      .then((res) => {
        toast.fire({
          icon: 'success',
          title: "정상적으로 취소했어요!"
        })
        set((state) => ({
          partys: state.partys.map((item) => {
            if(item.id === id) {
              return {...item, members: item.members.filter((member) => (member.code !== code))}
            }
            return {...item}
          })
        }))
      })
      .catch((err) => {
        console.log(err)
        console.log(err.body)
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      })
  },

  delParty(id) {},
}));
