<template>
  <div>
    <b-button @click="modalShow = !modalShow">Project Q&A</b-button>
    <b-modal dialog-class="my-class" v-model="modalShow" hide-footer hide-header modal-class="modal-right">
      <b-row class="rfasModal">
        <h1>Project Q&A</h1>
        <b-button>Ask Alter 5</b-button>
        <b-button>Schedule a meeting</b-button>
        <SendAQuestion />
      </b-row>
    </b-modal>
  </div>
</template>

<script>
    import SendAQuestion from "./SendAQuestion"
    export default {
        components: {
            "SendAQuestion": SendAQuestion
        },
        data() {
            return {
            modalShow: false
            }
        }
    }
</script>
<style scoped>

::v-deep .my-class .modal-content{
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
</style>