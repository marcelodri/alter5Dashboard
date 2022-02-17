<template>
  <b-row>
      <b-colxx sm="12">
          <div class="d-flex align-items-center mb-4">
            <a :href="adminRoot+'/dashboards/proyectos'"><img :src="rutaImage+'/assets/img/icons/FlechaLeft.svg'" alt=""></a>
            <h1 class="ml-4 mb-0 pb-0" >Log de actividad en el proyecto Andalucía</h1>
          </div>
      </b-colxx>
      <div class="separador mb-4 mx-3"></div>
      <b-colxx sm="12">
          <Cont-Logs />
      </b-colxx>
  </b-row>
</template>
<script>
import ContLogs from "../../../containers/dashboards/ContLogs";
import { adminRoot, rutaImage } from "../../../constants/config";

export default {
  data() {
    return {
      adminRoot,
      rutaImage
    }
  },
  components: {
    "Cont-Logs": ContLogs,
  }
}
</script>
