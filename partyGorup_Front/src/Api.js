import axios from "axios";
import Swal from "sweetalert2";
import create from "zustand";

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

    axios
      .get(`${url}partys?date=${year}-${month}`)
      .then((res) => {
        set({ partys: res.data });
      })
      .catch((err) => {
        console.log("Error : " + err);
      });
  },

  addParty(data) {
    axios
      .post(`${url}party`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.fire({
          icon: 'success',
          title: "정상적으로 생성됐어요!"
        })
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      });
  },

  joinParty(id, data) {
    axios
      .post(`${url}member/${btoa(id.toString())}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        toast.fire({
          icon: 'success',
          title: "정상적으로 참여했어요!"
        })
        set((state) => ({
          partys: state.partys.map((item) => {
            if(item.id === id) {
              return item.members.push(data)
            } else {
              return item
            }
          })
        }))
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      })
  },

  leaveParty(id, code, data) {
    axios.delete(`${url}member/${btoa(id.toString())}`, data, {
      headers: {
        "Content-Type": "application/json",
        'x-mbr-code': code.toString(),
      }
    })
    .then((res) => {
      toast.fire({
        icon: 'success',
        title: "정상적으로 참여했어요!"
      })
      set((state) => ({
        partys: state.partys.map((item) => {
          if(item.id === id) {
            return item.members.filter((member) => (member.code !== code))
          }
        })
      }))
    })
    .catch((err) => {
      console.log(err)
      toast.fire({
        icon: 'warning',
        title: "다시 시도해주세요!"
      })
    })
  },

  delParty(id) {},

  outParty(id) {},
}));
