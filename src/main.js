import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import staffMock from '@/assets/staff.json'
import store from './store'

Vue.config.productionTip = false



new Vue({
  data(){ return {
      // staff: staffMock.staffList
  }},

  // methods:{
  //   getStaffMember(id){
  //     return this.staff.find(member => member.id == id)
  //   },

  //   savePerson(personToEdit) {
  //       for (let tempPerson of this.staff) {
  //         if (tempPerson.id === personToEdit.id) {
  //           tempPerson.fullName = personToEdit.fullName
  //           tempPerson.title = personToEdit.title
  //           tempPerson.cellPhone = personToEdit.cellPhone
  //           tempPerson.eMail = personToEdit.eMail
  //           console.log(personToEdit.fullName + ' edited');
  //         }
  //       }
  //   },

  //   addPerson(newPerson) {
  //       this.staff.push(newPerson)
  //   },

  //   deleteMember(id) {
  //     console.log("deleting member with id " + id);
      
  //     this.staff = this.staff.filter(member => member.id != id)

  //     console.log(this.staff);
      
  //   }
  // },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
