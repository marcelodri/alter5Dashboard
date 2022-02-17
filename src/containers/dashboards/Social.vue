<template>
  <div>
    <b-row class="title-box">
        <span>Social</span>
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

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="enviro">
              <div class="row px-3">
                <h1>500</h1>
                <span>Workers</span>
              </div>
              <p>Total Workforce</p>
            </b-card>
          </b-colxx>

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="enviro">
              <div class="row px-3">
                <h1>Positive</h1>
                <!-- <span>MW</span> -->
              </div>
              <p>Community Impact</p>
            </b-card>
          </b-colxx>

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="enviro">
              <div class="row px-3">
                <h1>0</h1>
                <!-- <span>MW</span> -->
              </div>
              <p>Project-related fatalities</p>
            </b-card>
          </b-colxx>

          <b-colxx xl="2" lg="6" class="mb-4">
            <b-card class="enviro-progress">
              <div class="row px-3 justify-content-between">
                <h1>155</h1>
                <div class="progress-bar-circle">
                  <product-categories-doughnut></product-categories-doughnut>
                </div>
              </div>
              <p>Jobs created in Construction</p>
            </b-card>
          </b-colxx>

        </draggable>
    </b-collapse>
  </div>
</template>
<script>
import Draggable from "vuedraggable";
import ProductCategoriesDoughnut from "../dashboards/ProductCategoriesDoughnut.vue";


export default {
    components:{
        draggable: Draggable,
        "product-categories-doughnut": ProductCategoriesDoughnut,
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
    .enviro, .enviro-progress {
      max-width: 220px;
      min-height: 155px;
    }
    .enviro .row{
      padding: 0px 30px 0px;
      align-items: center
    }
    .enviro .row h1, .enviro-progress .row h1{
      color: #5A5A5A;
      font-weight: 300;
      font-size: 32px;
      margin-bottom: 0px;
      padding-bottom: 0px;
    }
    .enviro p {
      padding-top: 20px;
      margin-bottom: 0;
    }
    .enviro .row span {
      color: #BABABA;
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 0px;
      padding-bottom: 0px;
      padding-left: 10px;
    }
    .card-body {
      padding: 1.75rem 1.2rem
    }
    .enviro-inferior {
      max-width: 220px;
      min-height: 260px;
    }
    .enviro-inferior .card-header{
      min-height: 120px;
    }

    .enviro-inferior h5 {
      color: #5A5A5A;
      font-weight: normal;
      font-size: 12px;
    }

    .enviro-inferior img{
      max-width: 120px;
      height: auto;
    }
    .card-body {
      padding: 1rem;
    }
    .enviro-inferior-last {
      min-height: 250px;
      min-width: 250px
    }
    .enviro-inferior-last h1 {
      font-weight: bold;
      font-size: 16px;
      color: #51B6BE;
      padding-bottom: 0;   
      margin-bottom: 0;   
    }

    .enviro-inferior-last h5 {
      font-weight: normal;
      font-size: 12px;
      color: #5A5A5A;
      margin-bottom: 0;   
    }

    .enviro-inferior-last img {
      width: 70px !important;
      height: auto;
    }
    .radial-progress-container circle {
    stroke-width: 10px !important;
  }
      @media(max-width: 460px) {
      .enviro, .enviro-progress {
        margin: auto;
        max-width: none;
        min-height: auto;
      }
      .title-box {
        padding: 0px 20px
      }
      .title-box button {
        width: 40px;
      }
    }
</style>

<style scoped>

</style>
