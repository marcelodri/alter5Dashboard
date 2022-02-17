<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Documentation</b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="docModal">
        <h1>Andalucía_copy</h1>
        <p>Documentation</p>
        <div class="separador"></div>
        <div class="box-digital-doc">
          <h1>Digital Documentation Engine</h1>
          <div class="table-custom">
            <div class="d-flex justify-content-between align-items-center">
              <span>Asset Teaser Editor</span>
              <a >Edit</a>
            </div>
            <div class="d-flex justify-content-between">
              <span>Termsheet Editor</span>
              <a >Edit</a>
            </div>
            <div class="d-flex justify-content-between">
              <span>A5 Green Impact Index</span>
              <a >Edit</a>
            </div>
          </div>
        </div>
        <div class="separador"></div>
        <div class="box-GEB">
          <b-button v-b-toggle.GEBond @click="isShow = !isShow">
            <div class="box-title-GEB">
              <h1>Green Energy Bond</h1>
              <img class="toggleUpDown" :class='{ "rotate": isShow }' src="../../assets/img/flechabtn.png" alt="">
            </div>
          </b-button>
          <b-collapse id="GEBond" class="mt-2">
            <div class="table-custom">
              <div class="d-flex justify-content-between">
                <span>Oferta Preliminar de Financiación</span>
                <a >Download</a>
              </div>
            </div>
          </b-collapse>
        </div>
      </b-row>
    </b-modal>
    
  </div>
</template>

<script>
  export default {
    props: ['BGClass', 'Display'],
    data() {
      return {
        modalShow: false,
        isShow: false
      }
    }
  }
</script>
<style scoped>
::v-deep .my-class .modal-content{
  height: auto;
}
</style>