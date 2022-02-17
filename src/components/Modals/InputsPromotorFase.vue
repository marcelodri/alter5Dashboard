<template>
    <div>
    <b-button class="ipf" v-b-modal="'InputsPromotorFase'" size="lg" >Inputs Promotor Fase I</b-button>
    <b-modal dialog-class="my-class-InputsPromotorFase" title="Inputs Promotor Fase I" hide-footer centered v-bind:id="'InputsPromotorFase'" size="lg" ok-only>
        <b-row class="cont-InputsPromotorFase">
            <b-colxx sm="12">
                <b-table :items="items" :fields="fields" striped></b-table>
            </b-colxx>
        </b-row>
    </b-modal>
    </div>
</template>
<script>

export default {
  data() {
    return {
        items: [{
            nombredelaplanta: 'Mérida 1',
            provincia: 'Córdoba',
            potenciaPico: '1 MWp',
            p90: '2.000',
            costeAnual: '2.000 €/Ha'
        },
        {
            nombredelaplanta: 'Mérida 2',
            provincia: 'Córdoba',
            potenciaPico: '1 MWp',
            p90: '2.000',
            costeAnual: '2.000 €/Ha'
        },
        {
            nombredelaplanta: 'Mérida 3',
            provincia: 'Córdoba',
            potenciaPico: '1 MWp',
            p90: '2.000',
            costeAnual: '2.000 €/Ha'
        },
        {
            nombredelaplanta: 'Mérida 4',
            provincia: 'Córdoba',
            potenciaPico: '1 MWp',
            p90: '2.000',
            costeAnual: '2.000 €/Ha'
        }],
        fields: [{
            key: 'nombredelaplanta',
            label: 'Nombre de la planta'
        },
        {
            key: 'provincia',
            label: 'Provincia'
        },
        {
            key: 'potenciaPico',
            label: 'Potencia Pico'
        },
        {
            key: 'p90',
            label: 'Producción p-90'
        },
        {
            key: 'costeAnual',
            label: 'Coste de arrendimiento anual'
        }],
        modalShow: false
    };
  }
};
</script>
<style scoped>
::v-deep .my-class-InputsPromotorFase .modal-content{
  padding: 40px;
}
::v-deep .my-class-InputsPromotorFase .modal-content .modal-header{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
}
</style>