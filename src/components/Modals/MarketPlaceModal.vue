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
        <div class="box-items-market">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0 pb-0">Invitaciones</h5>
            <Invitaciones-MK :title="title"/>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-items-market">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0 pb-0">Ofertas</h5>
            <Ofertas-MK :title="title"/>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-items-market">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0 pb-0">Asignaciones</h5>
            <Asignaciones-MK :title="title"/>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-items-market">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0 pb-0">Informe de Asesores</h5>
            <Informe-Asesores-MK :title="title"/>
          </div>
        </div>

      </b-row>
    </b-modal>
    </div>
  </div>
</template>

<script>
  import InvitacionesMK from './InvitacionesMK'
  import OfertasMK from './OfertasMK'
  import AsignacionesMK from './AsignacionesMK'
  import InformeAsesoresMK from './InformeAsesoresMK'

  export default {
    props: ['BGClass', 'Display', 'title'],
    components: {
      "Invitaciones-MK": InvitacionesMK,
      "Ofertas-MK": OfertasMK,
      "Asignaciones-MK": AsignacionesMK,
      "Informe-Asesores-MK": InformeAsesoresMK
    },
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