<template>
  <div>
    <b-button @click="modalShow = !modalShow"><img style="margin-right: 10px; margin-top: -3px" src="../../assets/img/icons/download.png" alt=""> Upload indicative Term Sheet</b-button>
    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Upload Indicative Term Sheet</h1>
        <p>Upload your own termsheet</p>
        <div class="cont-image">
          <p>Click o arrastre Ficheros</p>
        </div>
        <div class="separador"></div>
        <button>Finish Upload</button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false
      }
    }
  }
</script>
<style scoped>

::v-deep .my-class .modal-content{
  height: auto;
}
.rfasModal .cont-image{
  margin: 0px 0px 40px;
  background: #F5F4F4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 140px;
}
.rfasModal .cont-image p{
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #5A5A5A;
}
.rfasModal button {
  margin-top: 40px;
  background: #51B6BE;
  border-radius: 40px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  border: none
}
.rfasModal button:hover {
  filter: brightness(0.9);
}
</style>