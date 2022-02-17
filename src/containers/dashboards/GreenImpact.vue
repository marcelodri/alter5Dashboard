<template>
  <div>
      <b-row>
        <b-colxx sm="12" xl="4" class="text-left align-self-center">
          <span class="text-title">Environmental</span>
        </b-colxx>
        <b-colxx sm="12" xl="5" class="text-center align-self-center">
            <b-row>
              <b-colxx xl="7" class="align-self-center">
                <b-progress :value="27" variant="success" id="p-environmental"></b-progress>
              </b-colxx>
              <b-colxx xl="3" class="progress-text-content" >
                <span class="progress-text">27</span>
              </b-colxx>
            </b-row>
        </b-colxx>
        <b-colxx xl="3" lg="6" class="text-center align-self-center">
          <b-row class="number">
              <b-colxx class="text-center border-left align-self-center">
                  <h1>25</h1>
                  <p>Average</p>
              </b-colxx>
              <b-colxx class="text-center border-left align-self-center">
                  <h1>96</h1>
                  <p>Best</p>
              </b-colxx>

              <b-colxx class="text-center border-left align-self-center">
                <b-button
                  :class="visible ? null : 'collapsed'"
                  :aria-expanded="visible ? 'true' : 'false'"
                  aria-controls="collapse-4"
                  @click="visible = !visible"
                  id="btn-menu"
                  class="text-center"
                >
                  <img src="../../assets/img/dashboard/Boton-open.png" alt="" class="icon-opend">
                </b-button>
              </b-colxx>
          </b-row>
        </b-colxx>
      </b-row>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <br><br>
      <h2 class="text-Score px-4">Score</h2>
      <div class="separator mb-5"></div>
      <ResourceUse></ResourceUse>
      <br>
      <div class="separator mb-5"></div>
      <Impact></Impact>
      <div class="separator mb-5"></div>
      <Certificates></Certificates>
      <br>
    </b-collapse>
  </div>
</template>
<script>

import ResourceUse from "../../containers/dashboards/ResourceUse";
import Impact from "../../containers/dashboards/Impact";
import Certificates from "../../containers/dashboards/Certificates";



export default {
  components: {
    "ResourceUse": ResourceUse,
    "Impact" : Impact,
    "Certificates" : Certificates

  },
  data() {
      return {
      visible: false
      }
  }
}
</script>

<style scoped>
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
.text-title {
  color: #13285B;
  font-weight: 300;
  font-size: 32px;
}
#p-environmental {
  height: 20px  ;
  border-radius: 10px;
}
.progress-text {
  color: #13285B;
  font-weight: normal;
  font-size: 60px;
}
.number h1 {
  font-weight: lighter;
  font-size: 36px;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #13285B
}

.number p {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #13285B
}
.text-Score {
  text-align: end;
  color: #13285B;
  font-weight: bold;
  font-size: 20px;
}
@media( max-width: 460px) {
  #btn-menu img{
    max-width: 40px;
  }
  .number div {
    padding: 2px;
  }

  .progress-text-content {
    margin-top: 10px;
  }
  .text-title {
    font-size: 28px;
  }
}

</style>
