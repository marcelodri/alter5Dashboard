<template>
    <b-card no-body class="dataProyectos">
        <b-card-body class="justify-content-end d-flex flex-column px-3 pb-0">
            <b-row>
                <b-colxx sm="4">
                    <h1>{{title}}</h1>
                    <p>{{subtitle}}</p>
                </b-colxx>
                <b-colxx sm="8">
                    <b-row class="row-data">
                        <b-colxx sm="12">
                            <p><strong>{{data3}}</strong></p>
                            <p>{{data4}}</p>
                        </b-colxx>
                    </b-row>
                </b-colxx>
            </b-row>
            <div class="separador"/>
            <ProyectoPromotor 
                :id="id"
                :fase ="fase"
                :faseClass="faseClass" 
                :descripFase="descripFase"
                :ModeloDisplay="ModeloDisplay"
                :TeasersDisplay="TeasersDisplay"
                :TernDisplay="TernDisplay"
                :numberFAQ="numberFAQ"
                :numberInvitaciones="numberInvitaciones"
                :numberOfertas="numberOfertas"
                :numberAA="numberAA"
                :cantInvitaciones="cantInvitaciones"
                :cantOfertas="cantOfertas"
                :cantAsignaciones="cantAsignaciones"
            />
        </b-card-body>
    </b-card>
</template>

<script>
import ProyectoPromotor from "../../components/Cards/ProyectoPromotor"

export default {
    props: ['id', 'title', 'subtitle', 'data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'fase', 'faseClass', 'descripFase', "ModeloDisplay","TeasersDisplay", "TernDisplay", "numberFAQ", "numberInvitaciones", "numberOfertas", "numberAA", "cantInvitaciones", "cantOfertas", "cantAsignaciones"],
    components: {
        "ProyectoPromotor": ProyectoPromotor,
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
