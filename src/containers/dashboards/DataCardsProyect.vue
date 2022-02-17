<template>
    <b-row>
        <b-colxx v-for="(item, index) in items" :key="index" sm="6" md="4" class="mt-4">
            <CardsProyect 
                :imagen="item.imagen"
                :title="item.title"
                :name="item.name"
                :subtitle="item.subtitle"
                :projectType="item.projectType"
                :projectSize="item.projectSize"
                :mAAFI="item.mAAFI"
                :projectStage="item.projectStage"
                :yieldRange="item.yieldRange"
                :term="item.term"
                :investmentInstrument="item.investmentInstrument"
                :expectedClosing="item.expectedClosing"
            />
        </b-colxx>
    </b-row>
</template>

<script>
import CardsProyect from "../../components/Cards/Proyect";

export default {
    components: {
        "CardsProyect": CardsProyect
    },
    data(){
        return {
            items: [
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Bern',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Budapest',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Faro',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto2.png',
                    title: 'Project',
                    name: 'Gades',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Geneva',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Lowbrook',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Maastricht 1',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Maastricht 2',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
                {
                    imagen: '../../assets/img/proyecto1.png',
                    title: 'Project',
                    name: 'Maastricht 3',
                    subtitle: 'Senior Construction Debt',
                    projectType: 'Solar PV',
                    projectSize: '10.6 MWp',
                    mAAFI: 'EUR 0',
                    projectStage: 'Development',
                    yieldRange: '2-2.5%',
                    term: '20 Years',
                    investmentInstrument: 'Direct Lending or Alter5 Green Bond',
                    expectedClosing: '30-12-2021'
                },
            ]
        }
    }
    

}
</script>
<style scoped>
::v-deep table > thead {
  display: none
}
::v-deep table > tbody {
  display: flex
}
</style>