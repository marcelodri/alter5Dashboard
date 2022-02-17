<template>
  <div>
    <b-row >
      <b-colxx xxs="12">
        <div class="container-fluid banner" :style="{ backgroundImage: `url('../../assets/img/dashboard/header.png')` }">
          <div class="row h-100">
            <div class="col-12 col-md-6">
              <a href="proyectos"><img class="flecha" v-bind:src="'../../assets/img/dashboard/felcha-izquierda.png'" alt=""></a>
              <h1>Budapest</h1>
            </div>
          </div>
        </div>
      </b-colxx>
    </b-row>
    <b-colxx sm="12" class="cont-tab-project bg-white px-4">

      <b-dropdown :text="tabs[currentTab].title">
        <b-dropdown-item v-for="({ title, disabled }, index) in tabs" @click="currentTab = index" :disabled="disabled" :key="index">
          {{ title }}
        </b-dropdown-item>
      </b-dropdown>

      <b-tabs align="left" class="tabnav-principal" v-model="currentTab">

        <b-tab title="Project Information" active>
          <b-row>
            <b-colxx sm="12" md="8" class="pr-md-0 pr-2">
              <b-tabs align="left" class="tabnav-secundario">

                <b-tab title="Project Summary" active>
                  <div class="cont-button">
                    <Sponsor />
                    <b-button><img style="margin-right: 10px; margin-top: -3px" v-bind:src="'../../assets/img/icons/download.png'" alt=""> Teaser</b-button>
                    <b-button><img style="margin-right: 10px; margin-top: -3px" v-bind:src="'../../assets/img/icons/download.png'" alt=""> Termsheet</b-button>
                    <b-button><img style="margin-right: 10px; margin-top: -3px" v-bind:src="'../../assets/img/icons/download.png'" alt=""> Key Financial Project</b-button>
                    <b-button><img style="margin-right: 10px; margin-top: -3px" v-bind:src="'../../assets/img/icons/download.png'" alt=""> Financial Model</b-button>
                    <!-- <ProyectQA /> -->
                  </div>
                  <b-row>
                    <b-colxx md="12" class="cont-left-ps">
                      <h5>Investment Purpose</h5>
                      <p>Financing of development and construction works related to a portfolio of 5 solar PV plants in Spain carried out by a mid-sized developer and operator. Financing will be used to finance construction works until Commercial Operation Date (CoD). In addition to the financing, the sponsor is exploring the sale of the project at RtB or COD depending on the terms of the acquisition. Investment opportunities available for this asset are:</p>
                      <ul><li>Senior financing</li><li>Asset Acquisition</li></ul>

                      <div class="separador"></div>
                      <div class="cont-data-sponsors container px-0">
                        <h5>Project Status</h5>
                        <b-row>
                          <b-list-group v-for="(item, key) in items" :key="key" class="col-6 col-md-3">
                            <b-list-group-item>
                              <div>{{item.title}}</div>
                              <p>{{item.data}}</p>
                            </b-list-group-item>
                          </b-list-group>
                        </b-row>
                      </div>

                      <div class="separador"></div>
                      <div class="cont-data-sponsors">
                        <h5>Project Status</h5>
                        <b-row>
                          <b-colxx sm="12" md="6">
                            <span>Interconnection</span>
                            <p>Achieved</p>
                          </b-colxx>
                          <b-colxx sm="12" md="6">
                            <span>Land</span>
                            <p>Leased</p>
                          </b-colxx>
                        </b-row>
                      </div>

                      
                      <div class="separador"></div>
                      <div class="cont-data-sponsors">
                        <h5>Sponsors</h5>
                        <p>Mid-sized Spanish renewable energy developer with over 10 years of experience in the sector. The developer focuses on plants under 20MW in southern Spain.</p>
                      </div>
                    </b-colxx>
                  </b-row>
       
                </b-tab>

                <b-tab title="Summary of Plants" id="SummaryData">
                    <b-table :items="itemsTable" :fields="fieldsTable" responsive class="table-Summary"></b-table>
                </b-tab>
                <span class="number-data">05</span>

              </b-tabs>
            </b-colxx>
            
            <b-colxx sm="12" md="4" class="px-0">
              <div class="cont-button-inferior">
                <UploadindicativeTermSheet />
                <Accessdataroom />
                <AskAquestion />
                <ScheduleWithAlter5Team />
              </div>   
            </b-colxx>
          </b-row>
        </b-tab>

        <b-tab title="Financial Dashboard" >
        </b-tab>

        <b-tab title="ESG Dashboard" >
          <div class="dashboard-body" style="padding-top: 40px">
            <sortable-statictics-row></sortable-statictics-row>
            <b-row>
              <b-colxx sm="12" md="5" class="mb-4">
                <website-visit-chart-card></website-visit-chart-card>
              </b-colxx>
              <b-colxx sm="12" md="5" class="mb-4">
                <converconversion-rates-chart-card></converconversion-rates-chart-card>
              </b-colxx>
              <b-colxx sm="12" md="2" class="mb-4">
                <News></News>
              </b-colxx>
            </b-row>
            <b-row>
              <div class="separator mb-5"></div>
              <b-colxx sm="12" md="12" class="mb-4">
                <Environmental></Environmental>
              </b-colxx>
              <div class="separator mb-5"></div>
              <b-colxx sm="12" md="12" class="mb-4">
                <Social></Social>
              </b-colxx>
              <div class="separator mb-5"></div>
              <b-colxx sm="12" md="12" class="mb-4">
                <Governance></Governance>
              </b-colxx>
            </b-row>
          </div>
          <b-row>
            <div class="separator mb-5"></div>
            <b-colxx sm="12" md="12" class="mb-4">
              <Alter5GreenImpactIndex></Alter5GreenImpactIndex>
            </b-colxx>
          </b-row>
        </b-tab>

      </b-tabs>
    </b-colxx>
  </div>
</template>

<script>

import ConversionRatesChartCard from "../../../containers/dashboards/ConversionRatesChartCard";
import SortableStaticticsRow from "../../../containers/dashboards/SortableStaticticsRow";
import WebsiteVisitsChartCard from "../../../containers/dashboards/WebsiteVisitsChartCard";

//nuevos
import Environmental from "../../../containers/dashboards/Environmental";
import Social from "../../../containers/dashboards/Social";
import Governance from "../../../containers/dashboards/Governance";
import News from "../../../containers/dashboards/News";
import Alter5GreenImpactIndex from "../../../containers/dashboards/Alter5GreenImpactIndex";
import UploadindicativeTermSheet from "../../../components/Modals/UploadindicativeTermSheet"
import Accessdataroom from "../../../components/Modals/Accessdataroom"
import AskAquestion from "../../../components/Modals/AskAquestion"
import ScheduleWithAlter5Team from "../../../components/Modals/ScheduleWithAlter5Team"
// import ProyectQA from "../../../components/Modals/ProyectQ&A"
import Sponsor from "../../../components/Modals/Sponsor"

export default {
  components: {
    "converconversion-rates-chart-card": ConversionRatesChartCard,
    "sortable-statictics-row": SortableStaticticsRow,
    "website-visit-chart-card": WebsiteVisitsChartCard,
    "Environmental":Environmental,
    "Social" : Social,
    "Governance" : Governance,
    "News" : News,
    "Alter5GreenImpactIndex": Alter5GreenImpactIndex,
    "UploadindicativeTermSheet": UploadindicativeTermSheet,
    "Accessdataroom": Accessdataroom,
    "AskAquestion": AskAquestion,
    "ScheduleWithAlter5Team": ScheduleWithAlter5Team,
    // "ProyectQA": ProyectQA,
    "Sponsor": Sponsor
  },
  data() {
    return {
      myToggle: false,
      buttons: [
        { caption: 'Teaser', state: false },
        { caption: 'Key Financial Project', state: false },
        { caption: 'Project Q&A', state: false },
        { caption: 'Schedule a meeting with Alter5 Asset Team', state: false }
      ],
      items: [
        {title: 'Project Type',data: 'Solar PV' },
        {title: 'Project Size',data: '10.6 MWp'},
        {title: 'Project Stage',data: 'Development'},
        {title: 'Maximum amount available for investment',data: 'EUR 0'},
        {title: 'Yield Range',data: '2-2.5%'},
        {title: 'Term',data: '20 Years'},
        {title: 'Investment Instrument',data: 'Direct Lending or Alter5 Green Bond'},
        {title: 'Expected Closing by',data: '30-12-2021'}
      ],
      itemsTable: [
        { projectName: 'Plant 1', p: '2', interconnection: 'OK', Land: 'OK',equivalent: '2.135', RtB: '31-01-2022', COD: '31-07-2022' },
        { projectName: 'Plant 2', p: '2,6', interconnection: 'OK', Land: 'OK',equivalent: '2.144', RtB: '31-01-2022', COD: '31-07-2022' },
        { projectName: 'Plant 1', p: '2', interconnection: 'OK', Land: 'OK',equivalent: '1.995', RtB: '01-03-2022', COD: '01-11-2022' },
        { projectName: 'Plant 1', p: '2', interconnection: 'OK', Land: 'OK',equivalent: '1.973', RtB: '01-03-2022', COD: '01-09-2022' },
        { projectName: 'Plant 1', p: '2', interconnection: 'OK', Land: 'OK',equivalent: '1.973', RtB: '01-03-2022', COD: '01-09-2022' },
      ],
      fieldsTable:[
        {key:'projectName',label:'Project Name'},
        {key:'p',label:'P (MW)'},
        {key:'interconnection',label:'Interconnection'},
        {key:'Land',label:'Land'},
        {key:'equivalent',label:'Equivalent Hours'},
        {key:'RtB',label:'RtB Expected Date'},
        {key:'COD',label:'COD Expected Date'}
      ],
      currentTab: 0,
      tabs: [{
          title: 'Project Information'
        },
        {
          title: 'Financial Dashboard'
        },
        {
          title: 'ESG Dashboard',
        }
      ]
      
    }
  }
};
</script>
<style scoped>
.separator {
  width: 100%;
}
.banner {
  /*background: url('/assets/img/dashboard/header.png');*/
  background-size: cover;
  min-height: 190px;
  background-repeat: no-repeat;
  border-radius: 8px 0px 0px 0px;
}

.banner .row .col-md-6 {
  align-self: center;
  display: flex;
  align-items: center;
  padding: 60px;
}
.banner .col-md-6 h1 {
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 0!important;
  color: #fff;
  margin-left: 35px;
  padding-bottom: 0;
}
.banner .col-md-6 div a{ 
  display: flex;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  align-items: center;
  background: #51B6BE;
  border-radius: 40px;
  padding: 4px 24px
}
.banner .col-md-6 div a img {
  padding: 10px;
}
@media(max-width: 460px) {
  .col-12 .col-md-6 {
    flex-direction: column;
  }
  .banner .col-md-6 h1 {
    margin: 0;
    margin-top: 40px;
  }
  .btn-pdf {
    padding-top: 10px!important;
  }

}
.titledashboard h1 {
  color: #51B6BE;
  font-weight: bold;
  font-size: 28px;
}
.titledashboard p {
  font-weight: normal;
  font-size: 18px;
  color: #5A5A5A;
}
.titledashboard p a {
  color: #51B6BE;
  border-bottom: 1px solid rgb(81, 182, 190);

}
.dashboard-body {
  padding: 0px;
}
@media(max-width: 460px) {
  .dashboard-body {
    padding: 10px 0px;
  }
}
.btn-download {
  transition: 0.3s all;
}
.btn-download:hover {
  background: #47868d!important;
}
::v-deep .table th, .table td {
  border-top: none
}
::v-deep table thead tr {
  margin-bottom: 10px;
}
::v-deep table tbody tr:nth-child(even){
   background-color:#e3e3e3;
}
::v-deep .tabnav-secundario ul li:nth-child(2){
  position: relative;
}
.number-data {
  position: absolute;
  top: 30px;
  left: 350px;
  background: #BABABA;
  color: #fff;
  border-radius: 7px;
  font-size: 10px;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media(max-width: 443px) {
  .number-data {
    top: 108px;
    left: 190px;
  }
}

</style>