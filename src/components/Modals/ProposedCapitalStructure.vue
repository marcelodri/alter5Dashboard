<template>
    <div>
    <b-button class="pcs" v-b-modal="'ProposedCapitalStructure'" size="lg" >Proposed Capital Structure</b-button>
    <b-modal dialog-class="my-class-ProposedCapitalStructure" title="Proposed Capital Structure" hide-footer centered v-bind:id="'ProposedCapitalStructure'" size="lg" ok-only>
        <b-row class="cont-ProposedCapitalStructure">
            <b-colxx sm="12" md="6">
                <div class="box-data">
                    <h5>Estimated total project costs</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input disabled :value="'3.879.339,19'">
                    </div>
                </div>
            </b-colxx>
        </b-row>
        <div class="separador"></div>
        <b-row class="cont-ProposedCapitalStructure">
            <b-colxx sm="12" md="6" class="pr-4">
                <div class="box-data">
                    <h5>Coeficiente de VAT Financing</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <input disabled :value="'16,78'">
                        <span class="px-4">%</span>
                    </div>
                </div>
                <div class="box-data">
                    <h5>Coeficiente de apalancamiento senior</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <input disabled :value="'48,23'">
                        <span class="px-4">%</span>
                    </div>
                </div>
                <div class="box-data">
                    <h5>Coeficiente de apalancamiento junior</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <input disabled :value="''">
                        <span class="px-4">%</span>
                    </div>
                </div>
                <div class="box-data">
                    <h5>Coeficiente de Equity</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <input disabled :value="'34,99'">
                        <span class="px-4">%</span>
                    </div>
                </div>
            </b-colxx>
            <b-colxx sm="12" md="6">
                <div class="box-data">
                    <h5>VAT Financing</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input disabled :value="'34,99'">
                    </div>
                </div>
                <div class="box-data">
                    <h5>Senior Debt</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input disabled :value="'1.871.114,93'">
                    </div>
                </div>
                <div class="box-data">
                    <h5>Junior Debt</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input disabled :value="''">
                    </div>
                </div>
                <div class="box-data">
                    <h5>Shareholder's Equity</h5>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input disabled :value="'1.357.224,25'">
                    </div>
                </div>
            </b-colxx>
        </b-row>
    </b-modal>
    </div>
</template>
<script>

export default {
  data() {
    return {
        modalShow: false
    };
  }
};
</script>
<style scoped>
::v-deep .my-class-ProposedCapitalStructure .modal-content{
  padding: 40px;
  padding-bottom: 0px;
}
::v-deep .my-class-ProposedCapitalStructure .modal-content .modal-header{
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
}
</style>