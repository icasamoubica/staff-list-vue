<template>
<div class="wrapper">
    <div class="StaffList">
        <router-link 
          v-for="staffMember in staff"
          v-bind:key="staffMember.id"
          v-bind:to="'/staffmember/' + staffMember.id"
        >{{staffMember.fullName}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  computed: {
    staff(){
      return this.$root.staff
    }
  }
}
</script>

<style scoped>
.wrapper{
  max-width: 50rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.StaffList {
  display: flex;
  flex-direction: column;
}
</style>