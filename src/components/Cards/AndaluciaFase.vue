<template>
<b-row>
    <b-colxx sm="12">
        <b-row>
            <b-colxx sm="10" class="pr-0">
                <b-row class="buttonEstadoFase">
                    <b-colxx sm="1" class="pr-0">
                        <div class="box-faseEstado" v-bind:class="faseClass">{{fase}}</div>
                    </b-colxx>
                    <b-colxx sm="11" class="align-self-center ml-0 ml-md-4 text-left">
                        <span>{{descripFase}}</span>
                    </b-colxx>
                </b-row>
            </b-colxx>
            <b-colxx sm="2">
                <b-row class="justify-content-end h-100 px-3">
                    <b-button @click="isShow = !isShow" v-b-toggle="id"  class="btn-acciones collapsed">Acciones <img class="toggleUpDown" :class='{ "rotate": isShow }' src="../../assets/img/flechabtn.png" alt=""></b-button>
                </b-row>
            </b-colxx>
        </b-row>
        <b-row>
            <b-collapse v-bind:id="id" class="w-100 px-3 collapse">
                <div class="separador"/>
                <b-row class="contModals justify-content-between ">
                    <b-row>
                        <RfasModal :BGClass="RfasModalClass" :Display="RfasModalDisplay"/>
                        <A5psModal :BGClass="A5psModalClass" :Display="A5psModalDisplay"/>
                        <DocumentationModal :BGClass="DocumentationModalClass" :Display="DocumentationModalDisplay"/>
                        <ProductModal :BGClass="ProductModalClass" :Display="ProductModalDisplay" :id="id"/>
                        <ProductManagentModal :BGClass="ProductManagentModalClass" :Display="ProductManagentModalDisplay"/>
                        <ReviewModal :BGClass="ReviewModalClass" :Display="ReviewModalDisplay"/>
                        <MarketPlaceModal :BGClass="MarketPlaceModalClass" :Display="MarketPlaceModalDisplay" :title="id"/>
                        <MarketPlaceModalNODATA :BGClass="MarketPlaceModalNODATAClass" :Display="MarketPlaceModalNODATADisplay" />
                    </b-row>
                    <ConfigModal />
                </b-row>
            </b-collapse>
        </b-row>
    </b-colxx>
</b-row>
</template>
<script>
import A5psModal from "../Modals/A5psModal";
import DocumentationModal from "../Modals/DocumentationModal";
import MarketPlaceModal from "../Modals/MarketPlaceModal";
import ProductManagentModal from "../Modals/ProductManagentModal";
import ProductModal from "../Modals/ProductModal";
import ReviewModal from "../Modals/ReviewModal";
import RfasModal from "../Modals/RfasModal";
import MarketPlaceModalNODATA from "../Modals/MarketPlaceModalNODATA"
import ConfigModal from "../Modals/ConfigModal";

export default {
    props: ['faseClass', 'descripFase', 'colorFase', 'id', 'fase', 'RfasModalClass', 'RfasModalDisplay', 'A5psModalClass', 'A5psModalDisplay', 'DocumentationModalClass', 'DocumentationModalDisplay', 'ProductModalClass', 'ProductModalDisplay', 'ProductManagentModalClass', 'ProductManagentModalDisplay', 'ReviewModalClass', 'ReviewModalDisplay', 'MarketPlaceModalClass', 'MarketPlaceModalDisplay', 'MarketPlaceModalNODATAClass', 'MarketPlaceModalNODATADisplay'],
    components: {
        "A5psModal": A5psModal,
        "DocumentationModal": DocumentationModal,
        "MarketPlaceModal": MarketPlaceModal,
        "ProductManagentModal": ProductManagentModal,
        "ProductModal": ProductModal,
        "ReviewModal": ReviewModal,
        "RfasModal": RfasModal,
        "MarketPlaceModalNODATA": MarketPlaceModalNODATA,
        "ConfigModal": ConfigModal
    },
    data() {
        return {
             isShow: false,
        }
    }
}
</script>
<style scoped>
    .buttonEstadoFase {
        padding: 20px 10px 20px 0px;
        flex-wrap: nowrap;
    }
    .buttonEstadoFase .box-faseEstado {
        width: 75px;
        text-align: center;
        padding: 8px 0px;
        margin: 0;
    }
    .btn-acciones {
        background: #fff;
        color: #51B6BE;
        padding: 0;
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        border: none
    }
    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
        background: #fff;
        color: #13285B
    }
    .toggleUpDown {
        transition: transform .3s ease-in-out !important;
        margin-left: 10px;  
    }
    .rotate {
        transform: rotate(180deg);
    }
</style>