<template>
  <main class="container">
    <div class="device">
      <div class="device_side_left">
        <div class="lock"></div>
        <div class="volume_container">
          <div class="volume" id="up"></div>
          <div class="volume" id="down"></div>
        </div>
      </div>
      <div class="device_frame">
        <div class="notch">
          <div class="notch_left">
            <h6>9:00</h6>
          </div>
          <div class="notch_bar"></div>
          <div class="notch_right"></div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
        <div class="home_button"></div>
      </div>
      <div class="device_side_right">
        <div class="power"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Device"
};
</script>

<style lang="scss" scoped>
@import '@/Style/Mixins';

.container {
  width: 80%;
  height: 100%;
  /* padding: 10px 0; */
  position: relative;
}

.device {
  width: 330px;
  display: flex;
  margin: 0 auto;
}

.device_side_left,
.device_side_right {
  width: 1.5%;
  height: auto;
}

.device_side_left {
  display: flex;
  flex-direction: column;
  margin-top: 80px;
}

.device_side_right {
  margin-top: 140px;
}

.device_side_right .power {
  width: 100%;
  height: 80px;
  background-color: rgb(20, 20, 20);
  border-radius: 20px;
}

.device_side_left .lock {
  width: 100%;
  height: 30px;
  background-color: rgb(20, 20, 20);
  border-radius: 20px;
}

.device_side_left .volume_container {
  margin-top: 30px;
}

.volume_container .volume {
  height: 40px;
  width: 100%;
  background-color: rgb(20, 20, 20);
  border-radius: 20px;
}

#up {
  margin-bottom: 5px;
}

.device_frame {
  width: 97%;
  height: 630px;
  border: 8px solid black;
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.notch {
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 60px 1fr 60px;
  grid-template-areas: "left notch right";
}

.notch_bar {
  grid-area: notch;
  background: rgb(17, 17, 17);
  height: 25px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.notch_left {
  grid-area: left;
  margin-left: 20px;
  margin-top: 6px;
  margin-right: 5px;  
}

.notch_left h6 {
  font-size: 12px;
  font-weight: 900;
  margin: 0;
  padding: 0;
  color: var(--text);
}

.notch_right {
  grid-area: right;
  /* margin-right: 3rem; */
  margin-bottom: 10px;
  padding-right: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
  flex: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;

  
  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #1e1e24;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #565a3f;
    border-radius: 10px;
  }
}

.home_button {
  width: 35%;
  height: 5px;
  border-radius: 10px;
  background-color: black;
  margin: 5px auto;
}

.battery,
.wifi,
.network {
  width: 15px;
  height: 15px;
}

.battery img,
.wifi img,
.network img {
  width: 100%;
  margin-right: 5px;
}
</style>