<template>
  <div class="confirmDeleteContainer">
      <div class="confirmDeleteDialog">
          <p>Are you sure you want</p>
          <p>to delete this staff member?</p>
          <div class="buttons">
              <button v-on:click="$emit('deleteButtonPressed')">YES</button>
              <button v-on:click="$emit('dontDeleteButtonPressed')">NO</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.confirmDeleteContainer {
    position: absolute;
    right: 30rem;
    width: 50rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.confirmDeleteDialog {
    background-color: white;
    padding: 2rem;
    border: 2px solid black;
    
}
</style>