<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span><i class="fa fa-user"></i></span>
            </div>
            <div class="info">
                <p class="name">Filipe</p>
                <p class="status">online</p>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Início</router-link></li>
                <li><router-link :to="{name: 'clientes'}"><i class="fas fa-address-card"></i> Clientes</router-link></li>
                <li><router-link :to="{name: 'produtos'}"><i class="fa fa-box"></i> Produtos</router-link></li>
                <li><router-link :to="{name: 'produtos'}"><i class="fa fa-store"></i> Vendas</router-link></li>
                <li><router-link :to="{name: 'produtos'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarComponent',

}
</script>

<style lang="scss">
    .sidebar{
        .top{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 25px 5px;
            margin-top: 40px;

            .avatar{
                margin-right: 10px;

                span{
                    
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #ccc;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 25px;
                    color: #666666;
                }
            }

            .info{
                color: #fff;

                .name{
                    font-size: 14px;
                }
                .status{
                    font-size: 10px;
                    margin-top: 8px;
                }
            }
        }

        .menu{
            margin-top: 15px;
            padding: 10px 20px;

            ul li{
                margin: 15px 0px;
                font-size: 18px;
                font-weight: 200;

                a {
                    color: #fff;                    
                }
            }
        }
    }
</style>