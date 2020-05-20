<template>
    <div class="cookieConsentContainer" v-if="noCookie">
        <h3>Consent to Cookie!</h3>
        <p>Lorem ipsum cookie sit, amet consectetur adipisicing cookie. Saepe, at officia tempora neque explicabo temporibus laborum atque eligendi sit veritatis dignissimos quo deserunt, sequi eius. Cupiditate beatae est fugiat quo.</p>
        <button class="consentToCookie" v-on:click="iConsentToCookie">I consent</button>
    </div>
</template>

<script>
export default {

  data() { return {
      noCookie: true
  }},
  beforeMount() {
      if (localStorage.getItem('cookie-consent') === 'true') {
        console.log('cookie-conent = true');
        this.noCookie = false
      }

  },
  methods: {
      iConsentToCookie(){
          localStorage.setItem('cookie-consent','true')
          this.noCookie = false
      }
  },

}
</script>

<style>
    .cookieConsentContainer {
        padding: 2rem;
        max-height: 13rem;
        display: flex;
        flex-direction: column;
        background-color: rgb(228, 225, 225);
        position: relative;
        border: 2px solid rgb(37, 36, 36);
        top: 30%;
        left: 50%;
    }

    .consentToCookie {
        background-color: rgb(230, 218, 218);
        border: 2px solid rgb(37, 36, 36);
    }
</style>