<template>
  <div>
    <b-row class="title-box">
      <span>Environmental</span>
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
      <br>
      <b-row class="row">
        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card class="enviro">
            <div class="row px-3">
              <h1>24.97</h1>
              <span>MW</span>
            </div>
            <p>Installed capacity attributable to the bond</p>
          </b-card>
        </b-colxx>
        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card class="enviro">
            <div class="row px-3">
              <h1>48.7</h1>
              <span>MW/year</span>
            </div>
            <p>Estimated Renewable Energy production per year</p>
          </b-card>
        </b-colxx>
        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card class="enviro">
            <div class="row px-3">
              <h1>18.1</h1>
              <span>tCO2e/MW</span>
            </div>
            <p>CO2 emissions avoided</p>
          </b-card>
        </b-colxx>
        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card class="enviro">
            <div class="row px-3">
              <h1>800</h1>
              <span>tCO2t/€</span>
            </div>
            <p>CO2 per euro invested</p>
          </b-card>
        </b-colxx>
        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card class="enviro">
            <div class="row px-3">
              <h1>Negligible</h1>
            </div>
            <p>Biodiversity Impact</p>
          </b-card>
        </b-colxx>
        <div class="separator mb-5"></div>

        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card no-body class="enviro-inferior">
            <b-card-header class="text-inherit pt-4 px-4" >
              <img src="../../assets/img/dashboard/project.png" alt="Union Eupea" class="list-thumbnail border-0" >
            </b-card-header>
            <b-card-body class="d-flex justify-content-top flex-column text-inherit pt-0 px-4">
                <h5>Project Environmental Impact Assessment Approval</h5>
            </b-card-body>
          </b-card>
        </b-colxx>

        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card no-body class="enviro-inferior">
            <b-card-header class="text-inherit pt-4 px-4" >
              <img src="../../assets/img/dashboard/theGreen.png" alt="Union Eupea" class="list-thumbnail border-0">
            </b-card-header>
            <b-card-body class="d-flex justify-content-between flex-column text-inherit pt-0 px-4">
                <h5>The Green Bond Pinciples</h5>
                <div class="text-end">
                  <img src="../../assets/img/info.png" alt="" id="tooltiptrenewable">
                    <b-tooltip target="tooltiptrenewable" >
                      <p class="text-left p-1 mb-0">We followed ICMA’s international standard of the green bond principles reporting for the renewable energy sector</p>
                    </b-tooltip>

                </div>
            </b-card-body>
          </b-card>
        </b-colxx>

        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card no-body class="enviro-inferior">
            <b-card-header class="text-inherit pt-4 px-4" >
              <img src="../../assets/img/dashboard/eu.png" alt="Union Eupea" class="border-0">
            </b-card-header>
            <b-card-body class="d-flex justify-content-between flex-column text-inherit pt-0 px-4">
                <h5>EU Taxonomy aligned</h5>
                <div class="text-end">
                  <img src="../../assets/img/info.png" alt="" id="Alignment">
                  <b-tooltip target="Alignment" >
                    <p class="text-left p-1 mb-0">We followed ICMA’s international standard of the green bond principles reporting for the renewable energy sector</p>
                  </b-tooltip>

                </div>
            </b-card-body>
          </b-card>
        </b-colxx>

        <b-colxx xl="2" lg="6" class="mb-4">
          <b-card no-body class="enviro-inferior">
            <b-card-header class="text-inherit pt-4 px-4" >
              <img src="../../assets/img/dashboard/UNEF.png" alt="Union Eupea" class="border-0" style="max-width: 70px">
            </b-card-header>
            <b-card-body class="d-flex justify-content-between flex-column text-inherit pt-0 px-4">
                <h5 class="mb-0">Certificado UNEF de Excelencia para la Sostenibilidad y la Conservación de la Biodiversidad</h5>
                <div class="text-end">
                  <img src="../../assets/img/info.png" alt=""  id="tooltipSostenibilidad">
                    <b-tooltip target="tooltipSostenibilidad" custom-class="my-tooltip-class">
                      <p class="text-left p-1 mb-0">UNEF Certificate of Excellence for Sustainability and Biodiversity Conservation</p>
                    </b-tooltip>

                </div>
            </b-card-body>
          </b-card>
        </b-colxx>

        <b-colxx xl="4" lg="6" class="mb-4">
          <b-card no-body class="enviro-inferior-last">
            <b-card-header class="text-inherit pt-4 pl-3" >
              <h1>UN SDGs affected</h1>
            </b-card-header>
            <b-card-body class="d-flex justify-content-end flex-column text-inherit pt-0 px-4">
                <div class="row">
                  <div class="col-12 col-md-3 px-0 pl-2">
                  <h5 class="pt-1">Direct impact </h5>
                  </div>
                  <div class="col-12 col-md-9 px-0 pl-3">
                  <div class="d-flex">
                    <img src="../../assets/img/dashboard/E-WEB-Goal-07.png" alt="Union Eupea" class="img-eu border-0" id="tooltip07">
                    <b-tooltip target="tooltip07" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG7</strong></h4>
                      <p class="text-left">Affordable and clean energy: Ensure access to affordable, reliable, sustainable and modern energy for all. This includes promoting broader energy access and increased use of renewable energy</p>
                    </b-tooltip>
                    <img src="../../assets/img/dashboard/E-WEB-Goal-09.png" alt="Union Eupea" class="img-eu border-0" id="tooltip09">
                    <b-tooltip target="tooltip09" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG9</strong></h4>
                      <p class="text-left">Industry, innovation and infrastructure: Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</p>
                    </b-tooltip>
                    <img src="../../assets/img/dashboard/E-WEB-Goal-11.png" alt="Union Eupea" class="img-eu border-0" id="tooltip11">
                    <b-tooltip target="tooltip11" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG11</strong></h4>
                      <p class="text-left">Sustainable cities and communities: Aims to make cities and human settlements inclusive, safe, resilient and sustainable by renewing and planning cities and other human settlements in a way that fosters community cohesion and personal security while stimulating innovation and employment</p>
                    </b-tooltip>
                    <img src="../../assets/img/dashboard/E-WEB-Goal-13.png" alt="Union Eupea" class="img-eu-2 border-0" id="tooltip13">
                    <b-tooltip target="tooltip13" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG13</strong></h4>
                      <p class="text-left">Climate action: Take urgent action to combat climate change and its widespread, unprecedented effects which disproportionately burden the poorest and the most vulnerable.</p>
                    </b-tooltip>
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-3 px-0 pl-2">
                <h5 class="pt-1">Indirect impact</h5>
                </div>
                <div class="col-12 col-md-9 px-0 pl-3">
                <div class="d-flex">
                  <img src="../../assets/img/dashboard/E-WEB-Goal-07 (1).png" alt="Union Eupea" class="img-eu border-0" id="tooltip1">
                  <b-tooltip target="tooltip1" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG1</strong></h4>
                      <p class="text-left">End poverty in all its forms everywhere.</p>
                  </b-tooltip>
                  <img src="../../assets/img/dashboard/E-WEB-Goal-09 (1).png" alt="Union Eupea" class="img-eu border-0" id="tooltip3">
                  <b-tooltip target="tooltip3" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG3</strong></h4>
                      <p class="text-left">Ensure healthy lives and promote well-being for all at all ages.</p>
                  </b-tooltip>
                  <img src="../../assets/img/dashboard/E-WEB-Goal-11 (1).png" alt="Union Eupea" class="img-eu border-0" id="tooltip8">
                  <b-tooltip target="tooltip8" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG8</strong></h4>
                      <p class="text-left">Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.</p>
                  </b-tooltip>
                  <img src="../../assets/img/dashboard/E-WEB-Goal-12.png" alt="Union Eupea" class="img-eu-2 border-0" id="tooltip12">
                  <b-tooltip target="tooltip12" custom-class="my-tooltip-class">
                      <h4 class="text-left"><strong>SDG12</strong></h4>
                      <p class="text-left">Ensure sustainable consumption and production patterns.</p>
                  </b-tooltip>
                </div>
                </div>
                </div>
            </b-card-body>
          </b-card>
        </b-colxx>


      </b-row>

    </b-collapse>
  </div>
</template>
<script>

export default {
 
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
    .separator {
        width: 100%;
    }
    .col-xl-2 {
      /*min-width: 230px*/
      padding: 0px 10px;
    }
    .enviro {
      max-width: 220px;
      min-height: 200px;
    }
  
    .enviro .row{
      padding: 0px 30px 0px;
      align-items: center
    }
    .enviro .row h1 {
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
      min-height: 230px;
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
      min-height: 230px;
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
    .text-end {
      text-align: end;
    }
    .img-eu {
      max-height: 60px;
      max-width: 60px;
      margin-right: 0px;
    }
    .img-eu-2 {
      max-height: 60px;
      max-width: 60px;
      padding: 2px 0px;
      margin-left: 6px;
    }
    @media(max-width: 460px) {
      .enviro {
        margin: auto;
        max-width: none;
        min-height: auto;
      }
      .enviro-inferior {
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