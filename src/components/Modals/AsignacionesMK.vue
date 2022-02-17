<template>
    <div>
        <b-button class="btn-sdf p-0" variant="link" v-b-modal="'AsignacionesMK'" ><img src="../../assets/img/icons/user.svg" alt=""></b-button>
        <b-modal  title="AsignacionesMK" hide-footer v-bind:id="'AsignacionesMK'" size="lg" ok-only dialog-class="OfertasMK-Table" >
          <template>
            <b-row class="cont-asignaciones">
              <b-colxx sm="12" md="6">

                <div class="box-input">
                <b-form-group :label="'Asesor legal'">
                    <b-form-input type="text" placeholder="Molina Asesores Legales" />
                </b-form-group>
                <b-form-group :label="'Asesor legal - Usuarios del grupo'">
                  <div class="d-flex justify-content-between grupo">
                    <b-form-radio value="first">Santiago Molina</b-form-radio>
                    <div class="d-flex align-items-center">
                      <span class="mr-4">Puede firmar</span>
                      <b-form-checkbox switch></b-form-checkbox>
                    </div>
                  </div>
                </b-form-group>
                </div>

                <div class="separador"></div>
                <div class="box-input">
                <b-form-group :label="'Asesor técnico'" class="box-input">
                    <b-form-input type="text" placeholder="Manuel Rojo Asesores" />
                </b-form-group>
                <b-form-group :label="'Asesor técnico - Usuarios del grupo'">
                  <div class="d-flex justify-content-between grupo">
                    <b-form-radio value="first">Manuel Rojo Seco</b-form-radio>
                    <div class="d-flex align-items-center">
                      <span class="mr-4">Puede firmar</span>
                      <b-form-checkbox switch></b-form-checkbox>
                    </div>
                  </div>
                </b-form-group>
                </div>

                <div class="separador"></div>
                <div class="box-input">
                <b-form-group :label="'Asesor de seguros'" class="box-input">
                    <b-form-input type="text" placeholder="Santiago Molina Insurance" />
                </b-form-group>
                <b-form-group :label="'Asesor de seguros - Usuarios del grupo'">
                  <div class="d-flex justify-content-between grupo">
                    <b-form-radio value="first">Santiago Molina</b-form-radio>
                    <div class="d-flex align-items-center">
                      <span class="mr-4">Puede firmar</span>
                      <b-form-checkbox switch></b-form-checkbox>
                    </div>
                  </div>
                </b-form-group>
              </div>
              </b-colxx>
              <b-colxx sm="12" md="6" class="cont-select">

                <b-form-group :label="'Asesor financiero'">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group :label="'Proveedor EPC'">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group :label="'Proveedor AM'">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group :label="'Proveedor de seguros'">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

                <b-form-group :label="'Proveedor de Ingeniería de la propiedad'">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                </b-form-group>

              </b-colxx>
              <div class="separador"></div>
              <b-colxx sm="12">
                <div class="footer-input">
                  <button class="btn-cerrar">Cerrar</button>
                  <button href="" class="btn-guardar">Guardar</button>
                </div>
              </b-colxx>
            </b-row>
          </template>
        </b-modal>
    </div>
</template>
<script>

export default ({
    data() {
      return {
        modalShow: false,
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    },
})
</script>
<style scoped>
::v-deep .OfertasMK-Table .modal-content {
  padding: 40px;
  border-radius: 10px;
}
::v-deep .OfertasMK-Table .modal-content .modal-header{
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}
</style>
