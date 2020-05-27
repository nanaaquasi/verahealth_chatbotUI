<template>
  <main class="container">
    <div class="image-container">
      <img src="../Assets/bott.png" alt="Logo" />
      <h3>VeraHealth</h3>
    </div>

    <h1>Enter your hospital Id</h1>
    <div class="form-input">
      <input type="text" placeholder="Hospital Id" v-model="sessionId" class="input" />
      <button class="button" @click="onsubmitHandler">Submit</button>
    </div>
  </main>
</template>

<script>
import Welcome from "./Welcome";

export default {
  name: "Start",
  components: {
    Welcome
  },
  data() {
    return {
      sessionId: ""
    };
  },
  methods: {
    onsubmitHandler() {
      if (this.sessionId) {
        this.$router.push({ name: "start", params: { id: this.sessionId } });
      }

      this.sessionId = "";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/Style/Mixins";

.form-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;
  border: none;
  padding: 10px 12px;
  color: var(--text);
  border-radius: 40px;
  /* flex: 1 0 0; */
  background-color: var(--element-background);
  font-family: inherit;

  &:focus {
    background-color: #333333;
    border: none;
    outline: none;
  }
}

.image-container {
  width: 150px;
  height: 150px;
  margin-bottom: 80px;

  h3 {
    font-size: 28px;
    color: rgb(181, 241, 103);
    margin: 5px 0;
    font-weight: 700;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.button {
  @include reset;
  padding: 15px 30px;
  margin-left: 6px;
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--element-background);
  color: var(--text);
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  margin-top: 15px;

  &:hover {
    background-color: #333333;
  }

  &:focus {
    border: none;
    outline: none;
  }
}

.container {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: whitesmoke;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    font-family: "Visby Cf";
  }
}
</style>