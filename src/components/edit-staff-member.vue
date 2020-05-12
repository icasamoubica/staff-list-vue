<template>
    <div class="editStaffMember">
        <h3>Details</h3>
        <input type="text" v-model="person.fullName">
        <input type="text" v-model="person.cellPhone">
        <input type="text" v-model="person.eMail">
        <router-link v-bind:to="'/staffmember/' + person.id">
            <button v-on:click="saveData">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {
    data(){return {
        person: {
            "id" : this.$root.getStaffMember( this.$route.params.id ).id,
            "fullName" : this.$root.getStaffMember( this.$route.params.id ).fullName,
            "title" : this.$root.getStaffMember( this.$route.params.id ).title,
            "cellPhone" : this.$root.getStaffMember( this.$route.params.id ).cellPhone,
            "eMail" : this.$root.getStaffMember( this.$route.params.id ).eMail
        }
  }},

    computed: {
        getStaffMember() {
            return this.$root.getStaffMember( this.$route.params.id )
        }
    },

    methods: {
        saveData() {
            console.log("saving");
            
            this.$root.savePerson(this.person)
        }
    }
}
</script>

<style>

</style>