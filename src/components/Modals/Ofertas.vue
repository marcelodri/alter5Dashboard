<template>
  <div>
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Ofertas <span v-if="cantidad">{{cantidad}}</span></b-button>

    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="a5psModal">
        <h1>Andalucía_copy</h1>
        <p>Ofertas</p>
        <div class="separador"></div>
        <h5>Legal Advisor</h5>
        <label>First legal</label>
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
      </b-row>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props: ['BGClass', 'Display', 'cantidad'],
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