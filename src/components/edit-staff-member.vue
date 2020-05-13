<template>
    <div class="editStaffMember">
        <h3 class="titleHeader">Details</h3>
        <div class="photo">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
        </div>
        <form>
            <label for="fullName">FullName: </label>
            <input type="text"  v-model="person.fullName" id="fullName" name="fullName"><br>
            <label for="cellPhone">Cellphone: </label>
            <input type="text" v-model="person.cellPhone" id="cellPhone" name="cellPhone"><br>
            <label for="eMail">E-mail: </label>
            <input type="text" v-model="person.eMail" id="eMail" name="eMail"><br>
        </form>
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
.editStaffMember {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

.nameAndButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
}
button {
    border:none;
    background-color: white;
}

</style>