import Vue from 'vue'
import VueRouter from 'vue-router'
import StaffList from '../views/StaffList.vue'
import StaffMemberDetails from '@/components/staff-member-details.vue'
import EditStaffMember from '@/components/edit-staff-member.vue'
import EmptyStaffMember from '@/components/empty-staff-member'
import AddNewMember from '@/components/create-member.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'StaffList',
    component: StaffList,

    children : [
        {
          path: '/staffmember/:id',
          name: 'StaffMember',
          component: StaffMemberDetails
        },
        {
          path: '/staffMember/',
          name: 'StafMemerNoName',
          component: EmptyStaffMember
        },
        {
          path: '/staffmember/:id/edit',
          name: 'EditStaffMember',
          component: EditStaffMember
        },
        {
          path: '/addStaff/',
          name: 'AddNewStaffMember',
          component: AddNewMember
        }
    ]
  
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
