<template>
<b-row>
    <b-colxx sm="12">
        <b-row>
            <b-colxx sm="6" class="pr-0 container">
                <b-row class="buttonEstadoFase">
                    <b-colxx class="pr-0 col-2">
                        <div class="box-faseEstado" v-bind:class="faseClass">{{fase}}</div>
                    </b-colxx>
                    <b-colxx class="align-self-center ml-4 col-9">
                        <span>{{descripFase}}</span>
                    </b-colxx>
                </b-row>
            </b-colxx>
            <b-colxx sm="6">
                <b-row class="justify-content-end h-100 px-3">
                    <div class="d-flex group-btn-modelos">
                        <button class="faseGreen" :style="{display: ModeloDisplay}">Modelo de Financiación</button>
                        <button class="faseGreen" :style="{display: TeasersDisplay}">Teasers</button>
                        <button class="faseGreen" :style="{display: TernDisplay}">Term Sheets</button>
                    </div>
                </b-row>
            </b-colxx>
        </b-row>
    </b-colxx>
    <b-colxx sm="12" class="mt-3 cont-btn-inferior" >
        <b-row>
            <b-colxx sm="12" md="2">
                <div class="h-100 d-flex align-items-center group-buttons-acciones">
                    <button>
                        <div class="d-flex align-items-center"><img src="../../assets/img/icons/faq.png" alt=""><p>Preguntas</p><span  v-if="numberFAQ">{{numberFAQ}}</span></div>
                    </button>
                    <div class="separador-vertical">-</div>
                </div>
            </b-colxx>
            <b-colxx sm="12" md="10" class="group-buttons-acciones">
                <b-row >
                    
                    <label>Asesores y proveedores</label>
                
                    <invitacionesInversores :id="id" :cantidad="cantInvitaciones" />
                    <ofertas :id="id" :cantidad="cantOfertas"/>
                    <asignacionesInversores :id="id" :cantidad="cantAsignaciones" />
                    <informeInversores />

                </b-row>
            </b-colxx>
        </b-row>
    </b-colxx>
</b-row>
</template>
<script>
import informeInversores from "../Modals/InformeInversores.vue";
import invitacionesInversores from "../Modals/InvitacionesInversores.vue";
import asignacionesInversores from "../Modals/AsignacionesInversores.vue";
import ofertas from "../Modals/Ofertas.vue";

export default {
    props: ['faseClass', 'fase', 'descripFase', 'ModeloDisplay', 'TeasersDisplay', 
    'TernDisplay','extraData', 'BgExtraData', 'numberFAQ', 'numberInvitaciones', 'numberOfertas','numberAA', 'id', 'cantAsignaciones', 'cantInvitaciones', 'cantOfertas'],
    components: {
        "informeInversores": informeInversores,
        "invitacionesInversores": invitacionesInversores,
        "asignacionesInversores": asignacionesInversores,
        "ofertas": ofertas
    },
    data() {
        return {
             isShow: false,
        }
    }
}
</script>
