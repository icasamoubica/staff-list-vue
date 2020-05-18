<template>
<div class="wrapper">
    <div class="StaffList">
      <h3 class="titleHeader">Employees</h3>
        <router-link 
          v-for="staffMember in staff"
          v-bind:key="staffMember.id"
          v-bind:to="'/staffmember/' + staffMember.id"
        >{{staffMember.fullName}}</router-link>
        <router-link v-bind:to="'/addStaff/'">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
        </router-link>
    </div>
    <router-view></router-view>
    <cookie-consent/>
  </div>
</template>

<script>

import cookieConsent from '@/components/cookie-consent'

export default {

  computed: {
    staff(){
      return this.$root.staff
    }
  },

  components: {
      'cookie-consent': cookieConsent
  }

}
</script>

<style scoped>

.titleHeader {
  color: black;
  font-size: 2rem;
  padding: 0;
  margin: 1rem;
}

a:link {
  color: black;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0.5rem;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  background-color: rgb(77, 77, 78);
}

/* selected link */
a:active {
  background-color: rgb(77, 77, 78);
}
.wrapper{
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 3px solid black;
}
.StaffList {
  display: flex;
  flex-direction: column;
  background-color: rgb(168, 167, 165);
}
</style>