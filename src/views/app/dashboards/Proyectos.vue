<template>
  <div class="proyectos">
    <Header :title="'Available opportunities for'" :subtitle="'Diego Sanguinetti Investments'" />
    <DataCardsProyect />
  </div>
</template>

<script>
import Header from "../../../components/Headers/HeaderProyecto";
import DataCardsProyect from "../../../containers/dashboards/DataCardsProyect";

export default {
  components: {
    "Header": Header,
    "DataCardsProyect": DataCardsProyect
  }

}
</script>

