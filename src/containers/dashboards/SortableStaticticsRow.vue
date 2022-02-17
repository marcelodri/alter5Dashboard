<template>
  <b-row class="row">
    <b-colxx xl="4" lg="6" class="mb-4 ">
      <b-card no-body id="eu">
          <b-card-header class="text-inherit pt-4" >
            <h1>75 <span>/100</span></h1>
          </b-card-header>
          <b-card-body class="d-flex justify-content-center flex-column text-inherit pt-0">
              <h5 class="mb-0 card-title">A5 Green Impact Index</h5>
              <p>A higher score indicates better sustainability</p>
          </b-card-body>
      </b-card>
    </b-colxx>
    <b-colxx xl="2" lg="6" class="mb-4">
      <b-card no-body class="">
          <b-card-header class="text-inherit pt-4 px-4">
            <img src="../../assets/img/dashboard/eu.png" alt="Union Eupea" class="border-0">
          </b-card-header>
          <b-card-body class="d-flex justify-content-end flex-column text-inherit pt-0 px-4">
              <h5 class="mb-0 card-title">EU <br>Taxonomy <br>aligned</h5>
              <div class="float-right text-right mt-3">
                <img src="../../assets/img/dashboard/info.png" alt="Info" class="border-0" id="tooltiptaxonomy">
                    <b-tooltip target="tooltiptaxonomy" custom-class="my-tooltip-class">
                      <p class="text-left p-1 mb-0">Alignment with EU taxonomy with mitigation criteria activities</p>
                    </b-tooltip>

              </div>
          </b-card-body>
      </b-card>
    </b-colxx>
    <b-colxx xl="2" lg="6" class="mb-4">
      <b-card no-body>
          <b-card-header class="text-inherit pt-4 px-4" >
            <img src="../../assets/img/dashboard/theGreen.png" alt="Union Eupea" class="list-thumbnail border-0">
          </b-card-header>
          <b-card-body class="d-flex justify-content-end flex-column text-inherit pt-0 px-4">
              <h5>The Green <br>Bond <br>Pinciples</h5>
              <div class="float-right text-right mt-3">
                <img src="../../assets/img/dashboard/info.png" alt="Info" class=" border-0" id="tooltipenergy">
                    <b-tooltip target="tooltipenergy" custom-class="my-tooltip-class">
                      <p class="text-left p-1 mb-0">We followed ICMA’s international standard of the green bond principles reporting for the renewable energy sector</p>
                    </b-tooltip>

              </div>
          </b-card-body>
      </b-card>
    </b-colxx>
    <b-colxx xl="2" lg="6" class="mb-4">
      <b-card no-body>
          <b-card-header class="text-inherit pt-4 px-4" >
            <h2>18.1</h2>
            <h3 class="mb-0 card-title">tCO2e/MW</h3>
          </b-card-header>
          <b-card-body class="d-flex justify-content-end flex-column text-inherit pt-0 px-4">
              <h5>CO2 emissions avoided</h5>
              <br><br><br>
          </b-card-body>
      </b-card>
    </b-colxx>

  </b-row>
</template>
<style scoped>
.card {
  border-radius: 8px !important;
  height: 100%;
}
.col-xl-5 {
  max-width: 36.66667%;
  min-height: 240px;
}
.col-xl-2 {
  min-width: 200px;
  min-height: 150px;
}
.col-xl-2 img {
  max-width: 130px;
  height: auto;
}
.col-xl-2 h5{
  color: #5A5A5A;
  font-size: 18px;
    margin-bottom: 0;

}
.col-xl-2 h2{
  font-weight: 300;
  font-size: 56px;
    margin-bottom: 0;

}
.col-xl-2 h3{
  font-size: 18px;
  color: #BABABA;
  margin-bottom: 0;

}



#eu{
  background: #13285B;
  max-width: 400px;
}
#eu h1 {
  color: #51B6BE;
  font-size: 100px;
  line-height: 32px;
  margin-bottom: 0;
} 
#eu h1 span {
  color: #BABABA;
  font-size: 28px;
}
#eu h5 {
  color: #fff;
  font-size: 28px;
  line-height: 32px;
} 
#eu p {
  color: #fff;
  font-size: 12px;
  line-height: 32px;
  margin-bottom: 0px;
} 
</style>