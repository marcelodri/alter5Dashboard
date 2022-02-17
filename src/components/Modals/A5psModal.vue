<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">A5-PŜ</b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="a5psModal">
        <h1>Andalucía_copy</h1>
        <p>Red Flag Assessments</p>
        <div class="separador"></div>
        <a class="btn-ver">Ver Red Flag Assessments- Fase I</a>
        <div class="separador"></div>
        <div class="box-pdf">
          <div class="box-pdf-text">
            <p>Modelo Financiero</p>
            <div class="d-flex justify-content-between">
              <span>17-12-2021</span>
              <span>14:33</span>
            </div>
          </div>
          <a ><img src="../../assets/img/pdf.png" alt=""></a>
        </div>
        <div class="separador"></div>
        <div class="box-modeloPanel">
          <span>Añadir Modelo en panel de Promotor</span>
          <b-form-checkbox switch></b-form-checkbox>
        </div>
        <div class="separador"></div>
        <div class="box-buttons">
          <Proposed-Capital-Structure />
          <Inputs-Promotor-Fase />
          <Modelo-Financiero />
        </div>  
      </b-row>
    </b-modal>
  </div>
</template>

<script>
  import ModeloFinanciero from "../../containers/dashboards/ModeloFinanciero"
  import ProposedCapitalStructure from "../../components/Modals/ProposedCapitalStructure"
  import InputsPromotorFase from "../../components/Modals/InputsPromotorFase"

  export default {
    props: ['BGClass', 'Display'],
    components: {
      "Modelo-Financiero":ModeloFinanciero,
      "Proposed-Capital-Structure":ProposedCapitalStructure,
      "Inputs-Promotor-Fase": InputsPromotorFase
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
.a5psModal .btn-ver {
  color: #fff;
  border: 1px solid #51B6BE
}
.a5psModal .btn-ver:hover {
  filter: brightness(0.9);
  color: #fff;
}

</style>