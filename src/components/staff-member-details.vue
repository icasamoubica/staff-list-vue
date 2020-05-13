<template>
    <div class="staffMemberDetails">
        <h3 class="titleHeader">Details</h3>
        <div class="photo">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
        </div>
        <div class="nameAndButton">
            <h3>{{person.fullName}}</h3>
            <router-link v-bind:to="'/staffmember/' + person.id + '/edit'" tag="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
            </router-link>
           
        </div>
        <p>Phone: {{person.cellPhone}}</p>
        <p>E-mail: {{person.eMail}}</p>
        <router-link v-bind:to="'/staffmember/'">
            <button v-on:click="deleteMember">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            </button>
        </router-link>
    </div>
</template>

<script>
export default {

    computed: {
        person() {
            return this.$root.getStaffMember( this.$route.params.id )
        }
    },
    methods: {
        deleteMember() {
            this.$root.deleteMember( this.$route.params.id )
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
    .staffMemberDetails {
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