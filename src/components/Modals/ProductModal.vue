<template>
  <div >
    
    <b-button v-bind:class="BGClass" v-bind:style="{ 'display':Display}" @click="modalShow = !modalShow">Product</b-button>

    <b-modal dialog-class="my-class" modal-class="modal-right" v-model="modalShow" hide-footer hide-header>
      <b-row class="productModal">
        <h1>Andalucía_copy</h1>
        <p>Product</p>

        <div class="separador"></div>
        <div class="box-data-button">
          <b-button v-b-toggle.GEBondPublic @click="isShow = !isShow">
            <div class="box-title-GEB">
              <h1>Green Energy Bond</h1>
              <img class="toggleUpDown" :class='{ "rotate": isShow }' src="../../assets/img/flechabtn.png" alt="">
            </div>
          </b-button>
          <b-collapse id="GEBondPublic" class="mt-2">
            <div class="box-GEB-public">
              <label for="">Senior Long Term GEB</label>
              <div class="d-flex justify-content-between align-items-end">
                <span>Publicado</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <span>Publicar Modelo Financiero</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
            </div>
            <div class="box-GEB-public">
              <label for="">Senior Bridge GEB</label>
              <div class="d-flex justify-content-between align-items-end">
                <span>Publicado</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <div class="d-flex justify-content-between align-items-end">
                <span>Publicar Modelo Financiero</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>          
            </div>
          </b-collapse>
        </div>
        <div class="separador"></div>
        <div class="box-data-button2">
          <b-button v-b-toggle.GEBondPublic2 @click="isShowInvest = !isShowInvest">
            <div class="box-title-GEB">
              <h1>Direct Invest</h1>
              <img class="toggleUpDown" :class='{ "rotate": isShowInvest }' src="../../assets/img/flechabtn.png" alt="">
            </div>
          </b-button>
          <b-collapse id="GEBondPublic2" class="mt-2">
            <div class="box-GEB-public">
              <label for="">Senior Development Financing</label>
              <div class="d-flex justify-content-between align-items-center">
                <span>Publicado</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span>Solicitar Process Leter en lugar de Términos y Condiciones</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span>Requerir Indicative Termsheet</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <span>¿Adjuntar Termsheet?</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>          
              <div class="d-flex justify-content-between align-items-center">
                <span>Publicar Modelo Financiero</span>
                <b-form-checkbox switch></b-form-checkbox>
              </div>          
            </div>
          </b-collapse>
        </div>
        <div class="separador"></div>
        <div class="box-GEBPublic-button">
          <b-button class="GEBPublic-black" v-b-modal="`Blacklist${id}`" size="lg">Blacklist</b-button>
          <b-button class="GEBPublic-alert" v-b-modal="`InvestorAlert${id}`"  size="lg">Investor Alert</b-button>
        </div>
      </b-row>
    </b-modal>

    <b-modal  title="Blacklist de Senior Development Financing" hide-footer centered v-bind:id="`Blacklist${id}`" size="lg" ok-only dialog-class="modalContent-black">
      <div class="cont-blacklist">
        <div class="box-blacklist">
          <label for="" class="title-blacklist">Inversor</label>
          <div class="tablaInversor">
            <b-list-group-item variant="secondary">
              <b-form-radio value="first">Dcapital</b-form-radio>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <b-form-radio value="first">Protein Capital</b-form-radio>
            </b-list-group-item>
            <b-list-group-item variant="secondary">
              <b-form-radio value="first">Demeter</b-form-radio>
            </b-list-group-item>
            <b-list-group-item variant="light">
              <b-form-radio value="first">Diego Sanguinetti investments </b-form-radio>
            </b-list-group-item>
            <b-list-group-item variant="secondary">
              <b-form-radio value="first">Molina Investment</b-form-radio>
            </b-list-group-item>
          </div>
          <div class="footerInversor">
            <button class="btn btn-cerrar">Cerrar</button>
            <button class="btn btn-guardar">Guardar</button>
          </div> 
        </div>
      </div>      
    </b-modal>

    <b-modal centered v-bind:id="`InvestorAlert${id}`" hide-footer size="lg" title="Whitelist de Senior Development Financing" ok-only dialog-class="modalContent-inversor">
      <div class="cont-inversor">
        <div class="box-inversor">
          <b-row>
            <b-colxx sm="12" md="6" class="box-right">
              <label for="">Dcapital</label>
              <b-form-radio value="first">Miguel Solana (msolana@dcapital.io - )</b-form-radio>
              <b-form-radio value="first">Alberto Corchero (acorchero@acoboo.com - Tester)</b-form-radio>
              <div class="separador"></div>
              <label for="">Protein Capital</label>
              <b-form-radio value="first">Salvador Carillo Investor (salvador@carsanventures.com)</b-form-radio>
              <div class="separador"></div>
              <label for="">Demeter</label>
              <b-form-radio value="first">Sin Usuarios registrados</b-form-radio>
              <div class="separador"></div>
              <label for="">Diego Sanguinetti Investments </label>
              <b-form-radio value="first">Sin Usuarios registrados</b-form-radio>
              <div class="separador"></div>
              <label for="">Moina Investments</label>
              <b-form-radio value="first">Santiago Molina (hello@finaned.com - CEO)</b-form-radio>
            </b-colxx>
            <b-colxx sm="12" md="6" class="box-left">

              <b-form-group id="Asunto" description="" label="Asunto" label-for="input-1"               valid-feedback="Thank you!" >
                <b-form-input id="Asunto" placeholder="New opportunity in Alter5 Investor Portal - Project [OPPORTUNITY]" trim></b-form-input>
              </b-form-group>

              <b-form-group id="Mensaje" description="" label="Mensaje" label-for="input-1"               valid-feedback="Thank you!" >
                <b-form-textarea id="Mensaje" placeholder="Dear [USERNAME], This is to let you know that a new opportunity has been published in Alter5 Investor Portal.Name - [OPPORTUNITY] Strategy - [STRATEGY]" rows="3" max-rows="6" ></b-form-textarea>
              </b-form-group>
              <div class="box-data-inversores">[USERNAME] = Username <br> [EMAIL] = User Email <br>[INVESTOR] = Investor name <br>[OPPORTUNITY] = Opportunity name <br>[STRATEGY] = Strategy name</div>

              <b-form-group id="Textodelbotón" description="" label="Texto del botón" label-for="input-1"        valid-feedback="Thank you!" >
                <b-form-input id="Texto del botón" placeholder="Access opportunity"  ></b-form-input>
              </b-form-group>

              <b-form-group id="Nombreemisor" description="" label="Nombre emisor" label-for="input-1"               valid-feedback="Thank you!" >
                <b-form-input id="Nombreemisor" placeholder="Alter5" ></b-form-input>
              </b-form-group>

              <b-form-group id="Emailemisor" description="" label="Email emisor" label-for="input-1"               valid-feedback="Thank you!" >
                <b-form-input id="Emailemisor" placeholder="noreply"  ></b-form-input>
                <span>@alter-5.com</span>
              </b-form-group>


            </b-colxx>
          </b-row>
          <div class="footerInversor">
            <button class="btn btn-cerrar">Cerrar</button>
            <button class="btn btn-guardar">Guardar</button>
          </div> 
        </div>
      </div>      
    </b-modal>

  </div>
</template>

<script>
  export default {
    props: ['BGClass', 'Display', 'title', 'id'],
    data() {
      return {
        modalShow: false,
        isShow: false,
        isShowInvest: false
      }
    }
  }
</script>
<style scoped>
::v-deep .my-class .modal-content{
  height: auto;
}
::v-deep .modalContent-black .modal-content, ::v-deep .modalContent-inversor .modal-content{
  padding: 40px;
  border-radius: 10px
}
::v-deep .modalContent-black .modal-content .modal-header, ::v-deep .modalContent-inversor .modal-content .modal-header{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

::v-deep .modalContent-black .modal-content .modal-body, ::v-deep .modalContent-inversor .modal-content .modal-body{
  padding-left: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
}


</style>