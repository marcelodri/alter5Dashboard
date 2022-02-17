<template>
  <div>
    <b-button v-b-modal.modal-lg @click="modalShow = !modalShow"><img style="margin-right: 10px; margin-top: -3px" src="../../assets/img/icons/accessData.png" alt=""> Access data room</b-button>
    <b-modal size="lg" dialog-class="my-classAccess" v-model="modalShow" hide-footer hide-header>
      <b-row class="classAccess">
        <h1>Agreement</h1>
        <div class="separador"></div>
        <div class="cont-texto">
          <p>By accessing this phase of the investment process, you agree to:<br><br>Non-circumvention: You will not contact the sponsor of this opportunity without Alter5’s express and written consent.<br><br>Payment of the Alter5 Platform Fee: You will pay the Alter5 Platform Fee as per Alter5 Terms and Conditions for the amount indicated in the teaser of this transaction.</p>
        </div>
        <div class="box-button">
          <button class="btn-go">Go Back</button>
          <button class="btn-iAgree">I Agree</button>
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

::v-deep .my-classAccess{
  padding: 18px;
}
.classAccess {
  padding: 18px 30px;
}
::v-deep .my-classAccess .modal-content{
  height: auto;
}
::v-deep .my-classAccess button:hover {
  filter: brightness(0.9);
}
::v-deep .my-classAccess .modal-content .cont-texto{
  margin: 40px 0px 0px;
}
::v-deep .my-classAccess .modal-content .cont-texto p{
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 40px;
}
::v-deep .my-classAccess .modal-content .box-button {
  text-align: end;
  width: 100%;
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