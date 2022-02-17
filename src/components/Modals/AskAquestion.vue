<template>
  <div>
    <b-button @click="modalShow = !modalShow"><img style="margin-right: 10px; margin-top: -3px" src="../../assets/img/icons/chat.png" alt=""> Ask a question Q&A</b-button>
    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Ask a question Q&A</h1>
        <p>Please send us a brief note with your questions. The Asset Origination Team Lead for this asset will contact you promptly.</p>
        <div class="cont-input">
          <h5>Question</h5>
          <b-form-textarea
            id="textarea"
            v-model="text"
            rows="5"
          ></b-form-textarea>
        </div>
        <div class="separador"></div>
        <button>Send Question</button>
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
::v-deep .my-class .modal-content p{
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 60px;
}
.rfasModal .cont-input{
  margin: 0px 0px 40px;
}
.rfasModal .cont-input p{
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #5A5A5A;
}
.rfasModal .cont-input h5{
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #51B6BE;
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