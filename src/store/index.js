import Vue from 'vue'
import Vuex from 'vuex'
import Staff from '@/assets/staff.json'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    staffList : [],
    oldStaff : Staff.staffList
  },

  mutations: {
    setStaff(state, stafListToSet) {
      state.staffList = stafListToSet
    },
    deleteMember(state, id) {
      console.log('deleting staff member with id ' + id)
      state.staffList = state.staffList.filter(member => member.id != id)
      localStorage.setItem('staff', JSON.stringify(state.staffList))
    },
    addStaffMember(state, newStaffMember) {
      let ids = state.staffList.map(member => member.id)
      let newId = Math.max(...ids) + 1
      newStaffMember.id = newId
      state.staffList.push(newStaffMember)
      localStorage.setItem('staff', JSON.stringify(state.staffList))
    },
    editStaffMember(state, staffmemberToEdit) {
      for (let tempPerson of state.staffList) {
        if(tempPerson.id === staffmemberToEdit.id) {
          tempPerson.fullName = staffmemberToEdit.fullName
          tempPerson.title = staffmemberToEdit.title
          tempPerson.cellPhone = staffmemberToEdit.cellPhone
          tempPerson.eMail = staffmemberToEdit.eMail
        }
      }
      localStorage.setItem('staff', JSON.stringify(state.staffList))
    }
  },

  actions: {
    loadData(context) {
      console.log('attempting to load data...');
      if (localStorage.getItem('staff') != null) {
        console.log('Data exists, loading...');
        context.commit('setStaff', JSON.parse(localStorage.getItem('staff')))
      } else {
        console.log('No data found...');
        console.log('loading hardcoded data...');
        context.commit('setStaff', context.state.oldStaff)
        
      }
    }
  },

  modules: {
  }
})
