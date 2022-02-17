<template>
  <div class="proyectos">
    <Header :title="''" :subtitle="'Proyectos'" />
    <b-row>
      <b-colxx xxs="12">
        <!-- <piaf-breadcrumb :heading="$t('menu.analytics')" /> -->
        <div class="cont-btn-newProyect">
          <button class="btn btn-newProyect">Nuevo Proyecto</button>
        </div>

        <DataPromotor
            :id="'DataAndalucia'"
            :title="'Andalucía_copy'"
            :subtitle="'Teaser name: Ginebra'"
            :data3= "'Brownfield - Financiación (Solar)'"
            :data4= "'4 Plantas - 4 MW'"
            :fase= "'Fase 0'"
            :faseClass="'faseRed'"
            :descripFase="'Data Room en proceso - Sin RFA'"
            :ModeloDisplay="'block'"
            :TeasersDisplay="'block'"
            :TernDisplay="'block'"
            :numberFAQ="3"
            :numberInvitaciones="2"
            :numberOfertas="5"
            :numberAA="1"
            :cantInvitaciones="2"
            :cantOfertas="1"
            :cantAsignaciones="2"
        />

        <DataPromotor
            :id="'DataAndalucia2'"
            :title="'Andalucía_copy'"
            :subtitle="'Teaser name: Ginebra'"
            :data3= "'Brownfield - Financiación (Solar)'"
            :data4= "'4 Plantas - 4 MW'"
            :fase= "'Fase II'"
            :faseClass="'faseBlue'"
            :descripFase="'Data Room en proceso - Sin RFA'"
            :ModeloDisplay="'block'"
            :TeasersDisplay="'block'"
            :TernDisplay="'block'"
            :numberFAQ="3"
            :numberInvitaciones="2"
            :numberOfertas="5"
            :numberAA="1"
            :cantInvitaciones="2"
            :cantOfertas="1"
        />
        <vuetable-pagination-bootstrap
          class="mt-4"
          ref="pagination"
        />
      </b-colxx>
    </b-row>

  </div>
</template>

<script>
import Header from "../../../components/Headers/HeaderProyecto";
import DataPromotor from "../../../containers/dashboards/DataPromotor";
import VuetablePaginationBootstrap from "../../../components/Common/VuetablePaginationBootstrap";




export default {
  data() {
    return {
      styleobj: {
        backgroundColor:"red"
      }
    }
  },
  components: {
    "Header": Header,
    "DataPromotor": DataPromotor,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap,
  },


};
</script>
