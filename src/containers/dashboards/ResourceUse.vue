<template>
  <div>
        <b-row class="justify-content-between px-2">   
            <b-colxx class="col-7 col-md-10 text-left  align-self-center">
            <span class="text-title">ResourceUse</span>
            </b-colxx>
            <b-colxx class="col-5 col-md-2 text-center  align-self-center">
                <b-row class="align-items-center justify-content-end">   
                    <h1 class="text-total mr-3">70</h1>
                    <b-button
                    :class="visible ? null : 'collapsed'"
                    :aria-expanded="visible ? 'true' : 'false'"
                    aria-controls="collapse-4"
                    @click="visible = !visible"
                    id="btn-menu"
                    >
                    <img src="/assets/img/dashboard/Boton-open.png" alt="" class="icon-opend-1">
                    </b-button>
                </b-row>
            </b-colxx>
        </b-row>

    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
        <br>
        <div class="content">
            <div class="dato">
                <h2>Water consumption and withdrawal in water stressed areas</h2>
                <h2>70</h2>
            </div>
            <div class="separator mb-5"></div>
            <div class="dato">
                <h2>Low-impact site</h2>
                <h2>70</h2>
            </div>
            <div class="separator mb-5"></div>
            <div class="dato">
                <h2>Respectful construction and maintenance</h2>
                <h2>70</h2>
            </div>
            <div class="separator mb-5"></div>
            <br><br>
        </div>
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
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 0;
    padding: 0
}
.text-total {
    color: #13285B;
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 0;
    padding: 0
}
.icon-opend-1 {
    max-width: 30px;
}
.content {
    padding: 0px 80px;
}
.dato {
    display: flex;
    justify-content: space-between;
}
.dato h2 {
    color: #13285B
}
@media (max-width: 460px) {
    .dato h2 {
        font-size: 20px
    }
    .text-title {
        font-size: 20px;
    }
    .content {
        padding: 0px 0px;
    }
}
</style>
