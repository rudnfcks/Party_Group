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

const url = "http://partyGroup.iptime.org:5000/api/";

const toast = Swal.mixin({
  toast: true, 
  position: 'center-center', 
  showConfirmButton: false, 
  timer: 800, 
  timerProgressBar: true, 
  didOpen: (toast) => { 
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useStore = create((set) => ({
  partys: [],

  // 파티 조회
  getPartysInfo(year) {
    set({ partys: null });

    instance
      .get(`${url}partys?date=${year}`)
      .then((res) => {
        set({ partys: res.data });
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "데이터를 불러올 수 없어요!"
        })
      });
  },

  // 파티 추가
  addParty(data) {
    instance
      .post(`${url}party`, data)
      .then((res) => {
        let temp = JSON.parse(JSON.stringify(this.partys))
        temp.unshift({...data, id: res.data})

        toast.fire({
          icon: 'success',
          title: "정상적으로 생성됐어요!"
        }).then(() => {
          set({ partys: temp })
        })
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      });
  },

  // 파티 수정
  editParty(id, data) {
    instance
      .put(`${url}party/${id}`, data)
      .then((res) => {
        let temp = this.partys.map((item) => {
          if(item.id == atob(id)) {
            return {
              ...item,
              dateTime: data.dateTime,
              isCancel: data.isCancel,
              memberCount: data.memberCount,
              place: data.place
            }
          }
          return item
        })

        toast.fire({
          icon: 'success',
          title: "정상적으로 수정했어요!"
        }).then(() => {
          set({ partys: temp })
        })
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "코드가 다르거나 문제가 생겼어요!"
        })
      })
  },

  // 파티 조인
  joinParty(id, data) {
    instance
      .post(`${url}member/${btoa(id.toString())}`, data)
      .then((res) => {
        let temp = this.partys.map((item) => {
            if(item.id === id) {
              item.members.push(data)
            }
            return {...item}
          })

        toast.fire({
          icon: 'success',
          title: "정상적으로 참여했어요!"
        }).then(() => {
          set({ partys: temp })
        })
      })
      .catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "다시 시도해주세요!"
        })
      })
  },

  // 파티 탈주
  leaveParty(id, code, data) {
    instance
      .delete(`${url}member/${btoa(id.toString())}`, {data})
      .then((res) => {        
        let temp = this.partys.map((item) => {
          if(item.id === id) {
            return {...item, members: item.members.filter((member) => (member.code !== code))}
          } else {
            return {...item}
          }
        })        
        toast.fire({
          icon: 'success',
          title: "정상적으로 취소했어요!"
        }).then(() => {
          set({ partys: temp })
        })
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

  // 파티 취소
  delParty(id) {
    instance
      .delete(`${url}party/${btoa(id.toString())}`)
      .then((res) => {
        let temp = this.partys.filter((item) => item.id !== id)
        set({ partys: temp })

        toast.fire({
          icon: 'success',
          title: "정상적으로 취소됐어요!"
        })
      }).catch((err) => {
        toast.fire({
          icon: 'warning',
          title: "취소 중 문제가 발생했어요!"
        })
      })
  },
}))
