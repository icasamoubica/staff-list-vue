<template>
    <div class="staffMemberDetails">
        <h3>Details</h3>
        <div class="nameAndButton">
            <p>{{person.fullName}}</p>
            <router-link v-bind:to="'/staffmember/' + person.id + '/edit'" tag="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
            </router-link>
        </div>
        <p>Phone: {{person.cellPhone}}</p>
        <p>E-mail: {{person.eMail}}</p>
        
    </div>
</template>

<script>
export default {

    computed: {
        person() {
            return this.$root.getStaffMember( this.$route.params.id )
        }
    }
}
</script>

<style>
    .staffMemberDetails {
        display: flex;
        flex-direction: column;
    }

    .nameAndButton {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

</style>