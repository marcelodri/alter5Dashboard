<template>
  <div>
    <b-button v-b-modal.modal-lg @click="modalShow = !modalShow">Sponsor name</b-button>
    <b-modal size="lg" dialog-class="my-Sponsor" v-model="modalShow" hide-footer title="Sponsor">
      <b-row class="classAccess">
        <div class="cont-texto">
          <h2>CORONA BOREAL COMBUSTIBLES S.L / BROWNIE COMBUSTIBLES S.L /TEQUI SOLAR 19 S.L / TEQUI SOLAR 16 S.L / TEQUI SOLAR 17 S.L</h2>
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

::v-deep .my-Sponsor{
  padding: 18px;
}
::v-deep .my-Sponsor .modal-content{
  height: auto;
  padding: 40px;
}
::v-deep .my-Sponsor .modal-content .modal-header{
  padding-right: 0px;
  padding-left: 0px;
  padding-top: 0px;
}
::v-deep .my-Sponsor .modal-content .modal-header h5{
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 40px;
    color: #000000;
}
::v-deep .my-Sponsor .modal-content .modal-body{
    padding-left: 15px;
    padding-right: 15px;
}


</style>