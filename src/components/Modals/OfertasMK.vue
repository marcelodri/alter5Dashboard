<template>
    <div>
        <b-button class="btn-sdf p-0" variant="link" v-b-modal="'OfertasMK'" size="lg"><img src="../../assets/img/icons/ofertas.svg" alt=""></b-button>
        <b-modal  title="Ofertas a Andalucía_copy" hide-footer centered v-bind:id="'OfertasMK'" size="lg" ok-only dialog-class="OfertasMK-Table">
          <template>
            <b-row class="cont-ofertas">
              <b-colxx sm="12" md="6" class="box-oferta">
                <h5>Legal Advisor</h5>
                <p>Molina Asesores Legales</p>
                <div class="cont-data">
                  <b-row>
                    <b-colxx sm="10">
                      <h5>Proyecto Dos Hermanas</h5>
                      <span>163.2Kb</span>
                    </b-colxx>
                    <b-colxx sm="2">
                      <a ><img src="../../assets/img/pdf.png" alt=""></a>
                    </b-colxx>
                  </b-row>
                </div>
              </b-colxx>
              <b-colxx sm="12" md="6" class="box-oferta">
                <h5>Insurance Advisor</h5>
                <p>Santiago Molina Insurance</p>
                <div class="cont-data">
                  <b-row>
                    <b-colxx sm="10">
                      <h5>Proyecto Mérida</h5>
                      <span>163.2Kb</span>
                    </b-colxx>
                    <b-colxx sm="2">
                      <a ><img src="../../assets/img/pdf.png" alt=""></a>
                    </b-colxx>
                  </b-row>
                </div>
              </b-colxx>
            </b-row>
          </template>
        </b-modal>
    </div>
</template>
<script>

export default ({
    data() {
      return {
        modalShow: false
      }
    },
})
</script>
<style scoped>
::v-deep .OfertasMK-Table .modal-content {
  border-radius: 10px;
  padding: 30px;
}
::v-deep .OfertasMK-Table .modal-body {
  padding: 0px;
}
::v-deep .OfertasMK-Table .modal-content .modal-header{
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 20px
}
::v-deep .OfertasMK-Table .modal-content .modal-header h5 {
  font-weight: 300;
  font-size: 28px;
  line-height: 40px;
  color: #000000;
}
</style>
