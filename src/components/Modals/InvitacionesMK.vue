<template>
    <div>
        <b-button class="btn-sdf p-0" variant="link" v-b-modal="'InvitacionesMK'+title" size="lg"><img src="../../assets/img/icons/email.svg" alt=""></b-button>
        <b-modal  title="Invitaciones a Andalucía_copy" hide-footer centered v-bind:id="'InvitacionesMK'+title" size="lg" ok-only dialog-class="InvitacionesMK-Table">
            <b-row>
                <b-colxx sm="12" md="6" class="box-left">
                    <b-tabs align="left">
                        <b-tab title="Asesores" active>
                            <div class="cont-dataAsesores">
                                <div class="box-data-asesores">
                                    <h5>SuperAsset Manager (Technical Advisor)</h5>
                                    <b-form-radio value="first">Salvador (salvac@gmail.com)</b-form-radio>
                                </div>
                                <div class="box-data-asesores">
                                    <h5>Molina Asesores Legales (Legal Advisor)</h5>
                                    <b-form-radio value="first">Santiago Molina (santiago.molina+asesor@alter-5.com)</b-form-radio>
                                </div>
                                <div class="box-data-asesores">
                                    <h5>Ashurst (Legal Advisor)</h5>
                                    <b-form-radio value="first">Miguel (msolana@gmail.com)</b-form-radio>
                                </div>
                                <div class="box-data-asesores">
                                    <h5>Santiago Molina Insurance (Insurance Advisor)</h5>
                                    <b-form-radio value="first">Santiago Molina (santiago.molina+insurance@alter-5.com)</b-form-radio>
                                </div>
                                <div class="box-data-asesores">
                                    <h5>Manuel Rojo Asesores (Technical Advisor)</h5>
                                    <b-form-radio value="first">Manuel Rojo Seco (manuel.rojo+asesores@alter-5.com)</b-form-radio>
                                </div>
                            </div> 
                        </b-tab>
                        <b-tab title="Proveedores">
                            <div class="cont-noDataProveedores">
                                <p>No hay registro de Proveedores para este proyecto</p>
                            </div> 
                        </b-tab>
                    </b-tabs>
                </b-colxx>

                <b-colxx sm="12" md="6" class="box-right">
                    <h5>Asesores y proveedores invitados</h5>
                    <div class="separador"></div>
                    <div class="cont-data-aypInvitados">

                        <div class="box-data-aypInvitados">
                            <div class="data-aypInvitados">
                                <h1>Miguel</h1>
                                <p>msolana@gmail.com</p>
                                <div class="separador"></div>
                                <div class="d-flex">
                                    <div class="w-50 text-left">
                                        <span><strong>Ashurst</strong></span>
                                    </div>
                                    <div class="w-50 text-left">
                                        <span>Legal Advisor</span>
                                    </div>
                                </div>
                            </div>
                            <div class="box-icon">
                                <a><img src="../../assets/img/icons/eliminar.png" alt=""></a>
                            </div>
                        </div>  

                        <div class="box-data-aypInvitados">
                            <div class="data-aypInvitados">
                                <h1>Santiago Molina</h1>
                                <p>santiago.molina+insurance@alter-5.com</p>
                                <div class="separador"></div>
                                <div class="d-flex">
                                    <div class="w-50 text-left">
                                        <span><strong>Ashurst</strong></span>
                                    </div>
                                    <div class="w-50 text-left">
                                        <span>Legal Advisor</span>
                                    </div>
                                </div>
                            </div>
                            <div class="box-icon">
                                <a ><img src="../../assets/img/icons/eliminar.png" alt=""></a>
                            </div>
                        </div>  
                    </div>
                </b-colxx>

                <b-colxx sm="12">
                    <div class="d-flex justify-content-between align-items-center footer-invitaciones">
                        <p class="mb-0">Permitir al promotor gestionar las invitaciones y asignaciones</p>
                        <b-form-checkbox switch></b-form-checkbox>
                    </div>
                    <div class="footer-invitaciones-btn">
                        <button class="btn-cerrar">Cerrar</button>
                        <button href="" class="btn-guardar">Guardar</button>
                    </div>
                </b-colxx>

            </b-row>
        </b-modal>
    </div>
</template>
<script>

export default ({
    props: ['title'],
    data() {
      return {
        modalShow: false
      }
    },
})
</script>
