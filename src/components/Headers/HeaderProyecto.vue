<template>
  <div class="header-proyectos container-fluid">
    <b-row class="mx-0">
        <br>
        <b-colxx sm="12" md="5">
            <h5>{{title}}</h5>
            <h1>{{subtitle}}</h1>
        </b-colxx>
        <b-colxx sm="12" md="7" class="align-self-end pb-3">
            <b-row>
                <b-colxx xxs="7" sm="9">
                    <div class="contenedor-serch">
                      <span>Search Opportunities  </span>
                      <div :class="{'search':true, 'mobile-view':isMobileSearch}"
                      ref="searchContainer"
                      @mouseenter="isSearchOver=true"
                      @mouseleave="isSearchOver=false">
                        <b-input
                        :placeholder="$t('menu.search')"
                        @keypress.native.enter="search"
                        v-model="searchKeyword"
                        />
                        <span class="search-icon" >
                          <i class="simple-icon-magnifier"></i>
                        </span>
                      </div>
                    </div>
                </b-colxx>
                <b-colxx xxs="5" sm="3">
                    <div>
                      <b-button v-b-toggle.filter class="btn-filter"><img src="../../assets/img/icons/filter.svg" alt=""> Filter</b-button>
                    </div>
                </b-colxx>
            </b-row>
        </b-colxx>
        <b-colxx sm="12">
          <b-collapse id="filter" class="mt-2">
            <div>
                <h5>Filtrar Proyectos por</h5>
                <b-table :items="items" responsive="sm" class="tableFilter">
                  <template #cell(buttons)="row">
                    <b-button v-for="(btn, idx) in row.item.buttons" :key="idx" :pressed.sync="btn.state">
                      {{ btn.caption }}
                    </b-button> 
                  </template>
                </b-table>
            </div>
          </b-collapse>
        </b-colxx>
    </b-row>
  </div>
</template>

<script>
import { searchPath } from "../../constants/config";

export default {
    props: ['title', 'subtitle'],
    data() {
      return {
          searchPath,
          isMobileSearch: false,
          searchKeyword: "",
          myToggle: false,
          items: [
            { title: 'Strategies', buttons: [
              {caption:'Mezzanine Construction Debt', state: false}, 
              {caption:'Senior Development Debt', state: false},
              {caption:'Senior Construction Debt', state: false},
              {caption:'Minority Equity Shareholding', state: false},
              {caption:'Co-development/Grid Connection Bonds', state: false},
              ]
            },
            { title: 'Installed capacity', buttons: [
              {caption:'<10MW', state: false}, 
              {caption:'10MW-50MW', state: false},
              {caption:'>50MW', state: false},
              ]
            },
            { title: 'Countries', buttons: [
              {caption:'España', state: false}, 
              {caption:'Reino Unido', state: false},
              {caption:'Estados Unidos', state: false},
              ]
            },
            { title: 'Project Types', buttons: [
              {caption:'Solar PV', state: false}, 
              {caption:'Wind', state: false},
              ]
            },
            { title: 'My activity', buttons: [
              {caption:'New Oportunity / Not Reviewed', state: false}, 
              {caption:'Investment page viewed', state: false},
              {caption:'Teaser downloaded', state: false},
              {caption:'Q&A active', state: false},
              {caption:'Data room accessed', state: false},
              {caption:'Offer provided', state: false},
              {caption:'Offer accepted', state: false},
              {caption:'Exclusivity period', state: false},
              {caption:'Binding offer', state: false},
              {caption:'Priority investment', state: false},
              ]
            }
          ]
      }
    },
    methods: {
        search() {
        this.$router.push(`${this.searchPath}?search=${this.searchKeyword}`);
        this.searchKeyword = "";
        }
    },
    computed: {
      btnStates() {
        return this.buttons.map(btn => btn.state)
      }
    }
  }
</script>
<style scoped>
::v-deep table > thead {
  display: none
}
::v-deep table > tbody > tr > td:nth-child(odd){
  width: 125px;
}
::v-deep table > tbody > tr > td {
  border-top: none;
  padding: 10px 0px
}
</style>