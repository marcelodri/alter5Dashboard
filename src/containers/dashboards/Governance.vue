<template>
  <div>
      <b-row class="title-box">
        <span>Governance</span>
          <b-button
            :class="visible ? null : 'collapsed'"
            :aria-expanded="visible ? 'true' : 'false'"
            aria-controls="collapse-4"
            @click="visible = !visible"
            id="btn-menu"
          >
          <img src="../../assets/img/dashboard/Boton-open.png" alt="" class="border-0">
          </b-button>
        </b-row>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <draggable class="row">

          <b-colxx xl="4" lg="6" class="mb-4">
            <b-card class="governance">
              <div class="row px-3 justify-content-between">
                <h1>EUR 6 million</h1>
              </div>
              <p>GDP Contribution</p>
            </b-card>
          </b-colxx>

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="governance">
              <div class="row px-3 justify-content-between">
                <h2>Tax commitment and permits acquisition </h2><br>
              </div>
              <div class="float-right">
                <img src="../../assets/img/info.png" alt="" id="tooltip-button-variant">
                <b-tooltip target="tooltip-button-variant" style="width: 600px!important; max-width: 6900px!important">
                  <p class="text-left">The necessary documentation for construction tax, local tax and permits are in place</p>
                <ul class="text-left">
                  <li>Impuestos locales y comparables / Impuesto sobre Construcciones, Instalaciones y Obras (ICIO)</li>
                  <li>Autorización Administrativa previa</li>
                  <li>Autorización Administrativa de construcción</li>
                  <li>Aporte de garantia</li>
                  <li>Admisión a trámite en Órgano Sustantivo de Comunidad Autónoma</li>
                  <li>Permiso de conexión (SI)</li>
                  <li>Contrato Tecnico de Encargos</li>
                  <li>Información Pública (Publicada/Completada)</li>
                </ul>
                </b-tooltip>
              </div>
            </b-card>
          </b-colxx>

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="governance">
              <div class="row px-3 justify-content-between">
                <h2>Stakeholder<br> compliance <br> commitments</h2>
              </div>
              <div class="float-right">
                <img src="../../assets/img/info.png" alt=""  id="tooltipagreement">
                <b-tooltip target="tooltipagreement">
                  <p class="text-left pt-2">Ease of agreement between stakeholders with transparency and dialogue. </p>
                </b-tooltip>
              </div>
            </b-card>
          </b-colxx>


        </draggable>
    </b-collapse>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
//import RadialProgressCard from "../../components/Cards/RadialProgressCard";
export default {
    components:{
        draggable: Draggable
        // "radial-progress-card": RadialProgressCard,
    },    
    data() {
      return {
        visible: false
      }
    }
}
</script>

<style scoped>
    .title-box {
        background: transparent;
        padding: 0px 20px;
        color: #51B6BE;
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        text-align: left;
        border: none;
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }
    #btn-menu {
      border: none;
      background: transparent;
      width: 60px;
      transition: 1s all;
    }
    #btn-menu img{
      border-radius: 50%;
    }
    #btn-menu:hover img{
      background: rgb(218, 240, 241)!important;
    }

    .governance {
      min-height: 124px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .governance h1 {
      color: #5A5A5A;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 40px;
    }
    .governance p{
      color: #5A5A5A;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      margin-bottom: 0px!important;
    }
    .governance h2{
      color: #13285B;
      font-family: Inter, sans-serif;
      font-weight: normal;
      font-size: 16px;
    }
    .card .card-body {
      padding: 1rem;
    }
          @media(max-width: 460px) {

      .title-box {
        padding: 0px 20px
      }
      .title-box button {
        width: 40px;
      }
    }

.tooltip-inner {
   max-width: 600px!important;
}
</style>