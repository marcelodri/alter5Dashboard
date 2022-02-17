<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Informes <span v-if="cantidad">{{cantidad}}</span></b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="productModal">
        <h1>Andalucía_copy</h1>
        <p>Informe de Asesores</p>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Informe de asesoría legal</p>
            <b-button class="btn-sdf" >Ver Informe</b-button>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Informe de asesoría técnica</p>
            <b-button class="btn-sdf" >Ver Informe</b-button>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Informe de asesoría impositiva y financiera</p>
            <b-button class="btn-sdf" >Ver Informe</b-button>
          </div>
        </div>

      </b-row>
    </b-modal>
    
  </div>
</template>

<script>


  export default {
    props: ['BGClass', 'Display', 'cantidad'],
    data() {
      return {
        modalShow: false,
        isShow: false,
        fields: ['inversor', 'Estado_interno', 'Estado_externo'],
        items: [
          { inversor: 'Dcapital', ei: 'Not Visited', statusee: 'Investment page viewed', ee: 'New Opportunity / Not reviewed', statusei: '00 - Has access to the transaction outside Alter5' },
          { inversor: 'Protein Capital', ei: 'Not Visited', statusee: 'Teaser downloaded', ee: 'New Opportunity / Not reviewed', statusei: '0 - Not Interested' },
          { inversor: 'Demeter', ei: 'Not Visited', statusee: 'Q&A active', ee: 'New Opportunity / Not reviewed', statusei: '1 - Informed via Mail' },
          { inversor: 'Diego Sanguinetti investments ', ei: 'Not Visited', statusee: 'Data room accessed', ee: 'New Opportunity / Not reviewed', statusei: '2 - Investment page viewed' },
          { inversor: 'Molina Investment', ei: 'Not Visited', statusee: 'Offer provided', ee: 'New Opportunity / Not reviewed', statusei: '3 - Teaser downloaded' }

        ]
      }
    },
    methods: {
      doStuff(event) {
        event.target.classList.toggle('rotate')
      }
    }
  }


</script>
<style scoped>

::v-deep .my-class .modal-content{
  height: auto;
}
::v-deep .table > tbody > tr > td {
  max-width: 100px;
  padding: 12px 15px;
}
::v-deep .table > thead > tr > th {
  border-top: none
}
</style>