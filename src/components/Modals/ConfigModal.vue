<template>
  <div class="config-modal">
    <b-button @click="modalShow = !modalShow"><img src="../../assets/img/config.png" alt=""></b-button>
    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Andalucía_copy</h1>
        <p>Más acciones</p>
        <div class="separador"></div>
        <div class="box-item">
          <h5>Duplicar</h5>
          <button class="btn"><img src="../../assets/img/icons/x2.svg" alt=""></button>
        </div>
        <div class="separador"></div>
        <div class="box-item">
          <h5>Cambiar Dueño</h5>
          <button class="btn"><img src="../../assets/img/icons/config.svg" alt=""></button>
        </div>
        <div class="separador"></div>
        <div class="box-item">
          <h5>Eliminar</h5>
          <button class="btn"><img src="../../assets/img/icons/delete.svg" alt=""></button>
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
        modalShow: false
      }
    }
  }
</script>
<style scoped>
::v-deep .my-class .modal-content{
  height: auto;
}
.config-modal button:hover{
  background: transparent!important;
}
</style>