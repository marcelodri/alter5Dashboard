<template>
    <b-card no-body class="dataProyectos">
        <b-card-body class="justify-content-end d-flex flex-column">
            <b-row>
                <b-colxx sm="4">
                    <h1>{{title}}</h1>
                    <p>{{subtitle}}</p>
                </b-colxx>
                <b-colxx sm="8">
                    <b-row class="row-data">
                        <b-colxx sm="4">
                            <p>{{data1}}</p>
                            <p>{{data2}}</p>
                        </b-colxx>
                        <b-colxx sm="5">
                            <p><strong>{{data3}}</strong></p>
                            <p>{{data4}}</p>
                        </b-colxx>
                        <b-colxx sm="3">
                            <p class="title-data">{{data5}}</p>
                            <p>{{data6}}</p>
                        </b-colxx>
                    </b-row>
                </b-colxx>
            </b-row>
            <div class="separador"/>
            <AndaluciaFase 
                :id="id"
                :fase ="fase"
                :faseClass="faseClass" 
                :descripFase="descripFase"
                :RfasModalClass="RfasModalClass"
                :RfasModalDisplay="RfasModalDisplay"
                :A5psModalClass="A5psModalClass"
                :A5psModalDisplay="A5psModalDisplay"
                :DocumentationModalClass="DocumentationModalClass"
                :DocumentationModalDisplay="DocumentationModalDisplay"
                :ProductModalClass="ProductModalClass"
                :ProductModalDisplay="ProductModalDisplay"
                :ProductManagentModalClass="ProductManagentModalClass"
                :ProductManagentModalDisplay="ProductManagentModalDisplay"
                :ReviewModalClass="ReviewModalClass"
                :ReviewModalDisplay="ReviewModalDisplay"
                :MarketPlaceModalClass="MarketPlaceModalClass"
                :MarketPlaceModalDisplay="MarketPlaceModalDisplay"
                :MarketPlaceModalNODATAClass="MarketPlaceModalNODATAClass"
                :MarketPlaceModalNODATADisplay="MarketPlaceModalNODATADisplay"
            />
        </b-card-body>
    </b-card>
</template>

<script>
import AndaluciaFase from "./AndaluciaFase"

export default {
    props: ['id', 'title', 'subtitle', 'data1', 'data2', 
    'data3', 'data4', 'data5', 'data6', 'fase', 'faseClass', 'descripFase', 'RfasModalClass', 'RfasModalDisplay', 'A5psModalClass', 'A5psModalDisplay', 'DocumentationModalClass', 'DocumentationModalDisplay', 'ProductModalClass', 'ProductModalDisplay', 'ProductManagentModalClass', 'ProductManagentModalDisplay', 'ReviewModalClass', 'ReviewModalDisplay', 'MarketPlaceModalClass', 'MarketPlaceModalDisplay', 'MarketPlaceModalNODATAClass', 'MarketPlaceModalNODATADisplay'],
    components: {
        "AndaluciaFase": AndaluciaFase,
    }
}
</script>
<style scoped>
.row-data > div {
    text-align: end
}
.dataProyectos {
    margin-top: 40px;
}

</style>
