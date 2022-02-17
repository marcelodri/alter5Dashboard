<template>
    <div>
        <b-button class="btn-sdf p-0" variant="link" v-b-modal="'InformesMK'" size="lg"><img src="../../assets/img/icons/inversores.svg" alt=""></b-button>
        <b-modal  title="InformesMK" hide-footer hide-header centered v-bind:id="'InformesMK'" size="lg" ok-only dialog-class="InformesMK-Table my-class2">
          <b-row class="productModal">
            <h1>Andalucía_copy</h1>
            <p>Informe de Asesores</p>

            <div class="separador"></div>
            <div class="box-InformesMK-Table">
              <span>Informe de asesoría legal</span>
              <a >Ver Informe</a>
            </div>

            <div class="separador"></div>
            <div class="box-InformesMK-Table">
              <span>Informe de asesoría técnica</span>
              <a >Ver Informe</a>
            </div>

            <div class="separador"></div>
            <div class="box-InformesMK-Table">
              <span>Informe de asesoría de seguros</span>
              <a>Ver Informe</a>
            </div>
            <div class="box-informeMK-hab">
              <div class="d-flex justify-content-between">
                <span>Habilitar a Promotor</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <Habilitar-Inversores />
            </div>
            <div class="separador"></div>
            <div class="box-InformesMK-Table">
              <span>Informe de asesoría impositiva y financiera</span>
              <a >Ver Informe</a>
            </div>

          </b-row>
        </b-modal>
    </div>
</template>
<script>
import HabilitarInversores from "../../components/Modals/HabilitarInversores"

export default ({
    components: {"Habilitar-Inversores":HabilitarInversores},
    data() {
      return {
        modalShow: false
      }
    },
})
</script>
<style scoped>
::v-deep .my-class2 {
  position: absolute!important;
  right: 0;
  top: 0;
  width: 400px;
  margin-top: 0;
}
::v-deep .my-class2 .modal-content{
  height: 100%;
}
</style>
