<template>
    <div>
    <b-button class="btn-habilita" v-b-modal="'HabilitarInversores'" size="lg" >Habilitar a Inversores</b-button>
    <b-modal dialog-class="my-class-HabilitarInversores" title="Inversores habilitados de Informe de asesoría de seguros" hide-footer centered v-bind:id="'HabilitarInversores'" size="lg" ok-only>
        <b-row class="cont-HabilitarInversores">
            <b-colxx sm="12">
                <div class="cont-habilitaciones">
                    <div class="d-flex justify-content-between align-items-center box-title">
                        <div class="box-label"><h5>Inversor</h5></div>
                        <div class="box-punto"><h5>Habilitar</h5></div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center box-item">
                        <div class="box-label"><h5>Dcapital</h5></div>
                        <b-form-radio></b-form-radio>
                    </div>
                    <div class="d-flex justify-content-between align-items-center box-item">
                        <div class="box-label"><h5>Protein Capital</h5></div>
                        <b-form-radio></b-form-radio>
                    </div>
                    <div class="d-flex justify-content-between align-items-center box-item">
                        <div class="box-label"><h5>Demeter</h5></div>
                        <b-form-radio></b-form-radio>
                    </div>
                    <div class="d-flex justify-content-between align-items-center box-item">
                        <div class="box-label"><h5>Diego Sanguinetti investments </h5></div>
                        <b-form-radio></b-form-radio>
                    </div>
                    <div class="d-flex justify-content-between align-items-center box-item">
                        <div class="box-label"><h5>Molina Investment</h5></div>
                        <b-form-radio></b-form-radio>
                    </div>
                </div>
            </b-colxx>
            <b-colxx sm="12">
                <div class="footer-HabilitarInversores-btn">
                    <button class="btn-cerrar">Cerrar</button>
                    <button href="" class="btn-guardar">Guardar</button>
                </div>
            </b-colxx>

        </b-row>
    </b-modal>
    </div>
</template>
<script>

export default {
  data() {
    return {
        modalShow: false
    };
  }
};
</script>
<style scoped>
::v-deep .my-class-HabilitarInversores .modal-content{
  padding: 40px;
}
::v-deep .my-class-HabilitarInversores .modal-content .modal-header{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    align-items: center;
}
</style>