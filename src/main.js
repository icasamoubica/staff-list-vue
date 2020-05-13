import Vue from 'vue'
import App from './App.vue'
import router from './router'
import staffMock from '@/assets/staff.json'

Vue.config.productionTip = false



new Vue({
  data(){ return {
      staff: staffMock.staffList
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
      
      this.staff = this.staff.filter(member => member.id != id)

      // let index = 0
      // let indexToDelete = -1
      // for (let person of this.staff) {

      //     console.log(person.id);
          
      //     if (person.id == id) {
      //       console.log("found id " + person.id);
            
      //       indexToDelete = index
      //     }
      //     index++
      // }
      // if (indexToDelete>-1) {
      //   this.staff = this.staff.splice(indexToDelete,1)
      // }
      console.log(this.staff);
      
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
