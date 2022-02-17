<template>
    <div>
    <!-- <vuetable
      ref="vuetable"
      :api-url="logs2"
      :transform="transformData"
      :fields="bestsellers.fields"
      :per-page="6"
      pagination-path
      @vuetable:pagination-data="onPaginationData"
    ></vuetable>-->
    <vuetable ref="vuetable"
        class="my-vuetable"
        api-url="..."
        :fields="logsFiles.fields"
        pagination-path
        @vuetable:pagination-data="onPaginationData"
        :api-mode="false"
        :data="logs2"
        :perpage="2"
    >
    </vuetable>
    <vuetable-pagination-bootstrap
      ref="pagination"
      @vuetable-pagination:change-page="onChangePage"
    /> 
  </div>
</template>
<script>
import Vuetable from "vuetable-2/src/components/Vuetable";
import VuetablePaginationBootstrap from "../../components/Common/VuetablePaginationBootstrap";
import logs2 from "../../data/logs2"

export default {
  props: ["title"],
  components: {
    vuetable: Vuetable,
    "vuetable-pagination-bootstrap": VuetablePaginationBootstrap
  },
  data() {
    return {
        logs2,
        logsFiles: {
            fields: [
            {
                name: "date",
                sortField: "title",
                title: "Fecha",
                titleClass: "",
            },
            {
                name: "accion",
                sortField: "accion",
                title: "Acción",
                titleClass: ""
            },
            {
                name: "inversor",
                sortField: "inversor",
                title: "Inversor",
                titleClass: ""
            },
            {
                name: "usuario",
                sortField: "usuario",
                title: "Usuario",
                titleClass: ""
            },
            {
                name: "estadointerno",
                sortField: "estadointerno",
                title: "Estado interno",
                titleClass: "",
            },
            {
                name: "estadoexterno",
                sortField: "estadoexterno",
                title: "Estado externo",
                titleClass: ""
            }
            ]
        }
    };
  },
  methods: {
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    }
  }
};
</script>
<style scoped>
::v-deep .my-vuetable tbody tr:nth-child(odd) {
    background-color:#fff;
}
::v-deep .my-vuetable tbody tr td {
    padding: 8px 10px;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
}
::v-deep .my-vuetable tbody .log-danger {
    border-radius: 10px;
    color: #fff;
    background: #BD1F1F;
    padding: 4px 8px;
}
::v-deep .my-vuetable tbody .log-info {
    border-radius: 10px;
    color: #fff;
    background: #CDBC22;
    padding: 4px 8px;
}
</style>