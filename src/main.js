import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import staff from '@/assets/staff.json'

Vue.config.productionTip = false



new Vue({
  data(){ return {
      staff: [Object]
  }},

  methods:{
    getStaffMember(id){
      return this.staff.find(member => member.id == id)
    },

    savePerson(personToEdit) {
        for (let tempPerson of this.staff) {
          if (tempPerson.id === personToEdit.id) {
            tempPerson.fullName = personToEdit.fullName
            tempPerson.title = personToEdit.title
            tempPerson.cellPhone = personToEdit.cellPhone
            tempPerson.eMail = personToEdit.eMail
            console.log(personToEdit.fullName + ' edited');
          }
        }
    },

    addPerson(newPerson) {
        this.staff.push(newPerson)
    },

    deleteMember(id) {
      console.log("deleting member with id " + id);
      let index = 0
      let indexToDelete = -1
      for (let person of this.staff) {
          if (person.id === id) {
            indexToDelete = index
          }
      }
      if (indexToDelete>-1) {
        this.staff.splice(indexToDelete,1)
      }
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
