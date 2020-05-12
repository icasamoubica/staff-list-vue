import Vue from 'vue'
import App from './App.vue'
import router from './router'
import staff from '@/assets/staff.json'

Vue.config.productionTip = false



new Vue({
  data(){ return {
      staff: staff.staffList
  }},

  methods:{
    getStaffMember(id){
      return this.staff.find(member => member.id == id)
    },

    savePerson(person) {
        for (let tempPerson of this.staff) {
          if (tempPerson.id === person.id) {
            tempPerson.fullName = person.fullName
            tempPerson.title = person.title
            tempPerson.cellPhone = person.cellPhone
            tempPerson.eMail = person.eMail
            console.log(person.fullName + ' edited');
          }
        }
    }
  },

  router,
  render: h => h(App)
}).$mount('#app')
