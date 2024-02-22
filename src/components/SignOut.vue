<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <p>{{ message }}</p>
      <button @click="proceed">OK</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"SignOut",
  data() {
    return {
      showModal: true,
      message: "Are you sure you want to sign out?"
    };
  },
  methods: {
    proceed() {
      
      this.$router.push({ name: "mainlogin" }).then(() => {
      window.location.reload(true); // Perform a hard refresh
      });
      console.log("User clicked OK");
      this.showModal = false;
    },
    cancel() {
      // Code to execute if the user clicks "Cancel"
      console.log("User clicked Cancel");
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
/* Styles for modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

/* Add more styles as needed */
</style>