<template>
    <div class="tamplateGreen">
      <div class="d-flex justify-content-between">
            <h1 class="title-tamplateGreen">Alter5 Green Impact Index</h1>
            <a href="Senior Construction Debt" class="btn-tamplateGreen"><img src="../../assets/img/dashboard/download.png" alt="">Alter5 Green Impact Index (.pdf)</a>
      </div>
        <b-card class="tamplateGreen-data">
            <b-colxx xl="12" lg="12" class="text-left px-0">
                <GreenImpact></GreenImpact>
            </b-colxx>
        </b-card>
        <b-card class="tamplateGreen-data">
            <b-colxx xl="12" lg="12" class="text-left px-0">
                <SocialImpact></SocialImpact>
            </b-colxx>
        </b-card>
        <b-card class="tamplateGreen-data">
            <b-colxx xl="12" lg="12" class="text-left px-0">
                <GovernanceImpact></GovernanceImpact>
            </b-colxx>
        </b-card>
    </div>
</template>
<script>

import GreenImpact from "../../containers/dashboards/GreenImpact";
import SocialImpact from "../../containers/dashboards/SocialImpact";
import GovernanceImpact from "../../containers/dashboards/GovernanceImpact";



export default {
 
 components: {
    "GreenImpact": GreenImpact,
    "SocialImpact": SocialImpact,
    "GovernanceImpact": GovernanceImpact
  }

}
</script>

<style scoped>
    .btn-tamplateGreen {
    transition: 0.3s all;
    }
    .btn-tamplateGreen:hover {
    background: #47868d!important;
    }

    .tamplateGreen-data {
        margin-bottom: 50px
    }
    .tamplateGreen {
        background: #F8F8F8;
        padding: 40px 0px;
    }
    .btn-tamplateGreen {
        background: #51B6BE;
        color: #fff;
        font-weight: bold;
        font-size: 14px;
        padding: 10px 20px;
        border-radius: 20px;
        margin-bottom: 50px;
    }
    .btn-tamplateGreen img{
        padding: 0px 10px;
    }
    .title-tamplateGreen {
        font-weight: bold;
        font-size: 36px;
        color: #13285B
    }
    @media(max-width: 460px) {
        .tamplateGreen .d-flex {
            flex-direction: column
        }
        .tamplateGreen {
            padding: 40px 10px;
        }
    }
</style>