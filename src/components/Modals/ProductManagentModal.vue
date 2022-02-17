<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Product Magagement</b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="productModal">
        <h1>Andalucía_copy</h1>
        <p>Product</p>

        <div class="separador"></div>
        <div class="box-data-fac">
          <h1>Questions & Answers</h1>
          <div class="d-flex ">
            <p>Preguntas realizadas </p>
            <span>0</span>
            <span>/</span>
            <span>0</span>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-act">
          <div class="d-flex justify-content-between align-items-center">
            <h1>Actividad</h1>
            <a :href="'../dashboards/logs'"><img src="../../assets/img/config.png" alt=""></a>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Senior Development Financing</p>
            <b-button class="btn-sdf" v-b-modal="'InvestorStatus'" size="lg">Investor Status</b-button>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Senior Long Term GEB</p>
            <b-button class="btn-sdf" v-b-modal="'InvestorStatus'" size="lg">Investor Status</b-button>
          </div>
        </div>

        <div class="separador"></div>
        <div class="box-data-sdf">
          <div class="d-flex justify-content-between align-items-center">
            <p>Senior Bridge GEB</p>
            <b-button class="btn-sdf" v-b-modal="'InvestorStatus'" size="lg">Investor Status</b-button>
          </div>
        </div>

        <b-modal  title="Estado inversores en Senior Long Term GEB" hide-footer centered v-bind:id="'InvestorStatus'" size="lg" ok-only dialog-class="modalContent-Table">
          <b-table hover :items="items" :fields="fields" striped responsive="sm" class="myTable">
            <template #cell(Estado_interno)="row">
              <div class="d-flex justify-content-between">
                <span>{{row.item.ei}}</span>
                <b-button v-b-toggle="'Ei'+row.index" class="w-100" @click="doStuff($event)">
                  <img class="toggleUpDown" src="../../assets/img/icons/down.svg" alt="">
                </b-button>
              </div> 
              <b-collapse v-bind:id="'Ei'+row.index" class="mt-2">
                <p class="card-text">{{row.item.statusei}}</p>
              </b-collapse>
            </template>
            <template  #cell(Estado_externo)="row">
              <div class="d-flex justify-content-between">
              <span>{{row.item.ee}}</span> 
              <b-button v-b-toggle="'Ee'+row.index" class="w-100" @click="doStuff($event)">
                <img class="toggleUpDown" src="../../assets/img/icons/down.svg" alt="">
              </b-button>
              </div>
              <b-collapse v-bind:id="'Ee'+row.index" class="mt-2">
                <p class="card-text">{{row.item.statusee}}</p>
              </b-collapse>
            </template>
          </b-table>
        </b-modal>
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