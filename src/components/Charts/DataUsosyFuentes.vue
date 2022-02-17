<template>
    <div>
        <b-row class="cont-data-usos">
            <b-colxx sm="6" md="4">
                <div class="box-data-uf">
                    <h1>MWp total</h1>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>MWp</span>
                        <input type="text" disabled value="4">
                    </div>
                </div>
            </b-colxx>
            <b-colxx sm="6" md="4">
                <div class="box-data-uf">
                    <h1>Senior Debt Financing</h1>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR</span>
                        <input type="text" disabled value="1.871.114,93">
                    </div>
                </div>
            </b-colxx>
            <b-colxx sm="6" md="4">
                <div class="box-data-uf">
                    <h1>Senior Debt Financing</h1>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>EUR/MW</span>
                        <input type="text" disabled value="467.778,73">
                    </div>
                </div>
            </b-colxx>
        </b-row>
        <div class="separador"></div>
        <b-row class="cont-numeros-usos">
            <b-colxx sm="12" md="6">
                <b-table striped 
                :items="itemsLeft"
                 v-model="visibleRows" >
                    <template slot="top-row">
                        <td class="td-total">Total</td>
                        <td class="td-total">3.879.339</td>
                        <td class="td-total">100</td>
                    </template>
                </b-table>
            </b-colxx>
            <b-colxx sm="12" md="6">
                <b-table striped 
                :items="itemsRight"
                 v-model="visibleRows" >
                    <template slot="top-row">
                        <td class="td-total">Total</td>
                        <td class="td-total">3.879.339</td>
                        <td class="td-total">100</td>
                    </template>
                </b-table>
            </b-colxx>
        </b-row>
    </div>
</template>



<script>
export default {
    data() {
      return {
        visibleRows: [],
        itemsLeft: [
          { usos: 'CAPEX', monto: '3.100.000', '%': '79.91' },
          { usos: 'DSRA Funding', monto: '12.405', '%': '0.32' },
          { usos: 'MRA Funding', monto: '20.751', '%': '0.53' },
          { usos: 'VAT', monto: '651.000', '%': '16.78' },
          { usos: 'Opening fees & costs', monto: '95.183', '%': '2.45' }
        ],
        itemsRight: [
          { usos: "Shareholder's equity	", monto: '1.357.224', '%': '34.99' },
          { usos: 'VAT Financing', monto: '651.000', '%': '16.78' },
          { usos: 'Junior financing	', monto: '0.00', '%': '0.00' },
          { usos: 'Seniot financing	', monto: '1.871.115', '%': '48.23' }
        ]
      }
    },
}
</script>
<style scoped>
.td-total {
    background: #13285B;
    color: #fff
}


</style>