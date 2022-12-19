<template>    
    <DashboardComponent>
        <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title_pages">
                    <h1>Home</h1>
                </header>
                <div class="row">
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Clientes'" :percentage="'7%'" :icone="'fa-users'" :qtd="clients.length" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Produtos'" :percentage="'12%'" :icone="'fa-box'" :qtd="products.length" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Serviços'" :percentage="'3%'" :icone="'fa-store'" :qtd="'270'" />
                    </div>
                    <div class="col-12 col-md-3">
                        <CardsComponent :type="'Relatórios'" :percentage="'25%'" :icone="'fa-chart-bar'" :qtd="'30'" />
                    </div>
                </div>

                <div class="contaimer mt-5">
                    <div class="row">
                        <div class="col-lg">
                            <ListsComponent :data="clients" 
                                            :description="'Clientes'" 
                                            :columns="['Nome','Email']" 
                                            :chavesArr="['nome','email']" />
                        </div>
                        <div class="col-lg">
                            <ListsComponent :data="products" 
                                            :description="'Produtos'" 
                                            :columns="['Nome','Valor']" 
                                            :chavesArr="['nome','valor']" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </DashboardComponent>
</template>

<script>

import DashboardComponent from '../dashboard/DashboardComponent.vue';
import CardsComponent from '../../CardsComponent.vue';
import ListsComponent from '../dashboard/components/ListsComponents.vue';
import axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            // Cria Objeto que retorna dados da API usando Axios
            clients: [],
            products: [],
        }
    },
    // Inicia a função assim que o objeto for montado
    mounted() {
        this.getData();
    },
    methods: {
        async getData(){            
            // API para testar o axios
            // let response = await axios.get('https://jsonplaceholder.typicode.com/users');
            // console.log(response.data);
            // // Insere os valores da API no objeto users
            // this.data = response.data;

            try {
                // await aguarda a resposta e exige que a função seja declarada como async
                // O caminho da API completo está configurado no arquivo de rotas (axios.defaults.baseURL = 'http://127.0.0.1:8000/api';)
                let response = await axios.get('/'); 
                if (response.status == 200){                    
                    // Insere os valores da API no objeto users
                    this.clients = response.data.clients;
                    this.products = response.data.products;
                } else {
                    console.error("Ocorreu um erro na API")
                }
                
            } catch (error) {
                console.error('Aconteceu um erro ao acessar a API: ' + error.response.status);
            }
        }
    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent,
    }
}
</script>