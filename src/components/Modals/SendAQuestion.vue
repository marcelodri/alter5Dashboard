<template>
  <div>
    <b-button class="w-100" @click="modalShow = !modalShow">Ask a developer</b-button>
    <b-modal dialog-class="SendQuestionModal" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Send a Question</h1>
        <b-form-group
            id="fieldset-1"
            label="Select a topic"
            label-for="input-1"
        >
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-form-group>
        <b-form-group
            id="fieldset-1"
            label="Question"
            label-for="input-2"
        >
            <b-form-textarea id="input-2" rows="6"></b-form-textarea>
        </b-form-group>
        <div class="cont-buttons">
            <button class="btn-cancel">Cancelar</button>
            <button class="btn-send">Send Question</button>
        </div>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modalShow: false,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>
<style scoped>

::v-deep .SendQuestionModal .modal-content{
  height: auto;
}
.rfasModal button {
  margin-top: 40px;
  background: #51B6BE;
  border-radius: 40px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  padding: 10px;
  border: none
}
.rfasModal button:hover {
  filter: brightness(0.9);
}
.rfasModal {
    padding: 55px 18px;
}
.cont-buttons {
    display: flex;
    justify-content: space-between;
}
.cont-buttons .btn-cancel {
    width: 150px;
    border: 1px solid #51B6BE;
    box-sizing: border-box;
    border-radius: 40px;
    background: #fff;
    color: #51B6BE;
}
.cont-buttons .btn-send {
    width: 150px;
    border: 1px solid #51B6BE;
    box-sizing: border-box;
    border-radius: 40px;
    background: #51B6BE;
}
.rfasModal .form-group {
    margin-top: 40px;
}
::v-deep .SendQuestionModal .modal-content .rfasModal .form-group label {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #51B6BE;
    margin-bottom: 15px;
}
</style>