<template>
    <div class="addStaffMember">
        <h3 class="titleHeader">Add New Staff Member</h3>
        <div class="photo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
        </div>

        <form>
            <label for="fullName">FullName: </label>
            <input type="text"  v-model="person.fullName" id="fullName" name="fullName"><br>
            <label for="title">Title: </label>
            <input type="text"  v-model="person.title" id="title" name="title"><br>
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
            "id" : this.randomId(),
            "fullName" : "",
            "title" : "",
            "cellPhone" : "",
            "eMail" : ""
        }
    }},

    methods: {
        saveData() {
            console.log("adding...");
            console.log(this.person);
            
            this.$root.addPerson(this.person)
        },
        randomId() {
            let a = Math.floor(Math.random() * Math.floor(1000));
            return a;
        }
    }
}
</script>

<style>
.titleHeader {
  color: black;
  font-size: 2rem;
  padding: 0;
  margin: 1rem;
}

</style>