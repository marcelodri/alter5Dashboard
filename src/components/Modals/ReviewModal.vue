<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Review</b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="productModal">
        <h1>Andalucía_copy</h1>
        <p>Review</p>

        <div class="separador"></div>
        <div class="box-Review-button">
          <a class="btn-enviar">Enviar Oferta</a>
          <a class="btn-rechazar">Rechazar</a>
        </div>

        <div class="separador"></div>
        <div class="box-Review-ModeloFinanciero">
          <div class="box-text-MF">
            <h5>Modelo Financiero</h5>
            <div class="d-flex justify-content-between">
              <span>17-12-2021</span>
              <span>14:33</span>
            </div>
          </div>
          <div class="box-pdf">
            <a ><img src="../../assets/img/pdf.png" alt=""></a>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-Review-button">
          <a class="btn-comunicaciones">Comunicaciones</a>
          <a class="btn-actualizarModeloFinanciero">Actualizar Modelo Financiero</a>
          <a class="btn-proposedFinancing">Proposed Financing</a>
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
</style>