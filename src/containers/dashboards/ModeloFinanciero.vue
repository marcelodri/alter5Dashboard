<template>
    <div>
    <b-button class="omf" v-b-modal="'ModeloFinanciero'" size="lg" >Outputs Modelo Financiero</b-button>
    <b-modal dialog-class="my-class-ModeloFinanciero" title="Outputs Modelo Financiero" hide-footer centered v-bind:id="'ModeloFinanciero'" size="lg" ok-only>
        <b-row>
            <b-colxx sm="12" class="cont-modeloFinanciero">
                <b-tabs align="left">
                    <div class="box-tabs">
                        <b-tab title="Usos y Fuentes" active>
                            <Data-usosyfuentes />
                        </b-tab>
                        <b-tab title="Perfil Deuda">
                            <Data-perfildeuda />
                        </b-tab>
                        <b-tab title="Ingresos">
                            <Data-ingresos />
                        </b-tab>
                    </div>
                </b-tabs>
            </b-colxx>
        </b-row>
    </b-modal>
    </div>
</template>
<script>
import DataUsosyFuentes from "../../components/Charts/DataUsosyFuentes"
import DataPerfilDeuda from "../../components/Charts/DataPerfilDeuda"
import DataIngresos from "../../components/Charts/DataIngresos"

export default {
  components: {
    "Data-usosyfuentes": DataUsosyFuentes,
    "Data-perfildeuda": DataPerfilDeuda,
    "Data-ingresos": DataIngresos
  },
  data() {
    return {
        modalShow: false
    };
  }
};
</script>
<style scoped>
::v-deep .my-class-ModeloFinanciero .modal-content{
  min-height: 700px;
  min-width: 900px;
  padding: 40px;
}
::v-deep .my-class-ModeloFinanciero .modal-content .modal-header{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
}
</style>