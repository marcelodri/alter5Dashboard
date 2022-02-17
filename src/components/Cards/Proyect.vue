<template>
    <b-card
        :title="title"
        :img-src="imagen"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 400px;"
        class="my-2"
    >
        <b-card-text>
            <div class="tablaDatelle">
                <h1>{{name}}</h1>
                <h5>{{subtitle}}</h5>
                <div class="separador"></div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Project Type</p>
                    <p class="data-tablaDatelle">{{projectType}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Project Size</p>
                    <p class="data-tablaDatelle">{{projectSize}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Maximum amount available for investment</p>
                    <p class="data-tablaDatelle">{{mAAFI}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Project Stage</p>
                    <p class="data-tablaDatelle">{{projectStage}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Yield Range</p>
                    <p class="data-tablaDatelle">{{yieldRange}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Term</p>
                    <p class="data-tablaDatelle">{{term}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Investment Instrument</p>
                    <p class="data-tablaDatelle">{{investmentInstrument}}</p>
                </div>
                <div class="d-flex justify-content-between box-data-tablaDatelle">
                    <p class="title-tablaDatelle">Expected Closing by</p>
                    <p class="data-tablaDatelle">{{expectedClosing}}</p>
                </div>
            </div>
        </b-card-text>
        <div class="d-flex justify-content-between box-buton">
            <b-button href="#" class="btn-setAs">Set as Priority</b-button>
            <b-button href="#" class="btn-viewInv">View Investment</b-button>
        </div>
    </b-card>

</template>

<script>
export default {
    props: ['title', 'imagen', 'name', 'subtitle', 'projectType', 'projectSize', 'mAAFI', 'projectStage', 'yieldRange', 'term', 'investmentInstrument', 'expectedClosing'],
}
</script>
