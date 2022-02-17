<template>
  <div>
      <b-row>
        <b-colxx xl="4" lg="6" class="text-left align-self-center">
          <span class="text-title">Social</span>
        </b-colxx>
        <b-colxx xl="5" lg="6" class="text-center  align-self-center">
            <b-row>
              <b-colxx xl="7" class="align-self-center">
                <b-progress :value="45" variant="warning" id="p-environmental"></b-progress>
              </b-colxx>
              <b-colxx xl="3" class="progress-text-content">
                <span class="progress-text">45</span>
              </b-colxx>
            </b-row>
        </b-colxx>
        <b-colxx xl="3" lg="6" class="text-center  align-self-center">
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

      <b-row>
        <b-colxx xl="12" class="align-self-center">
          <h5>Data</h5>
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
@media( max-width: 460px) {
  #btn-menu img{
    max-width: 40px;
  }
  .number div {
    padding: 2px;
  }
  .col-sm-12 {
    margin-bottom: 40px;
  }
  .progress-text-content {
    margin-top: 40px;
  }
  .text-title {
    font-size: 28px;
  }
}


</style>
