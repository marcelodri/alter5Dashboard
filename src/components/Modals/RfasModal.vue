<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">RFAs</b-button>
    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Andalucía_copy</h1>
        <p>Parametric Structuring</p>
        <div class="separador"></div>
        <a >Ver Red Flag Assessments- Fase I</a>

        <div class="separador"></div>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: ['BGClass', 'Display'],
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
.rfasModal a:hover {
  filter: brightness(0.9);
}
</style>