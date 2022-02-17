<template>
  <div class="d-flex">
    <div v-bind:style="{ 'display':Display}">
    <div class="separadorVertical" />
    <b-button v-bind:class="BGClass" @click="modalShow = !modalShow">Marketplace</b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="productModal">
        <h1>Andalucía_copy</h1>
        <p>Marketplace</p>
        <div class="separador"></div>
        <div class="box-market-nodata">
          <h2>Alter5 Marketplace for this project is not active because it is not a Phase II Project and/or the Project has not been assigned a code name.</h2>
        </div>
      </b-row>
    </b-modal>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['BGClass', 'Display', 'title'],
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
.separadorVertical {
  height: 100%;
  border-left: 1px solid #e3e3e3;
  margin-right: 10px;
}
</style>