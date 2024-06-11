import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useTransferStore = defineStore('transaction', () => {
  const isTransfer = ref(false)

  function send() {
    isTransfer.value = true
  }

//   function logout(){
//     isTransfer.value = false
//   }

  return { isTransfer, send }
}, {
    persist: {
        storage: sessionStorage
    }
})