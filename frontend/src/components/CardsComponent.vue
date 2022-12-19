<template>
    <div class="my-cards">
        <div class="card-top card-content">
            <h3>{{type}}</h3>
            <p class="percentage"><i class="fa fa-arrow-up"></i> {{percentage}}</p>
        </div>
        <div class="card-bottom card-content">
            <i :class="['fa icone', icone]"></i>
            <p class="qtd">{{qtd}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
    props: {
        type: String,
        percentage: String,
        icone: String,
        qtd: String
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/_main';

    .my-cards{
        display: flex;
        flex-direction: column;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: #fff;

        .card-content{
            display: flex;
            justify-content: space-between;
        }

        .card-top{
            .percentage{
                color: $green;
            }
        }
        
        .card-bottom{

            padding-top: 20px;

            .icone{
                font-size: 40px;
            }

            .qtd{
                font-size: 30px;
            }
            
        }
    }
</style>