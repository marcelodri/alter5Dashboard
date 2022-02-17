<template>
  <div>
    <b-button v-b-modal.modal-lg @click="modalShow = !modalShow"><img style="margin-right: 10px; margin-top: -3px" src="../../assets/img/icons/agenda.png" alt=""> Schedule a meeting with Alter5 Team</b-button>
    <b-modal size="lg" dialog-class="my-classAccess" v-model="modalShow" hide-footer title="Schedule a meeting with Alter5 Team">
      <b-row class="classAccess">
        <div class="cont-texto">
          <p><strong>Thank you!</strong></p>
          <p>Thank you for your message. We will contact you shortly to arrange a meeting.</p>
        </div>
        <div class="box-button">
          <button class="btn-iAgree">Aceptar</button>
        </div>
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

::v-deep .my-classAccess .modal-content{
  height: auto;
  padding: 40px;
}
::v-deep .my-classAccess .modal-content .modal-header{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}
::v-deep .my-classAccess .modal-content .modal-header h5{
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
}
::v-deep .my-classAccess .modal-content .modal-body{
  padding: 0;
  padding-left: 15px;
  padding-top: 15px;
}
::v-deep .my-classAccess button:hover {
  filter: brightness(0.9);
}
::v-deep .my-classAccess .modal-content .cont-texto{
  padding-top: 10px
}
::v-deep .my-classAccess .modal-content .cont-texto p{
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 0px;
}
::v-deep .my-classAccess .modal-content .box-button {
  text-align: end;
  width: 100%;
  margin-top: 30px;
}
::v-deep .my-classAccess .modal-content .box-button button{
  border: none;
  border: 1px solid #13285B;
  border-radius: 40px;
  padding: 10px 43px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
}
.btn-go {
  background: #fff;
  color: #13285B;
  margin-right: 10px;
}
.btn-iAgree{
  background: #13285B;
  color: #fff;
}
</style>