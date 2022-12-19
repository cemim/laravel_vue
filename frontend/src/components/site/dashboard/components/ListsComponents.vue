<template>
    <div class="lists">
        <!-- Importado apenas nessa página para usar a classe badge do bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
        <div class="top">            
            <h2><strong>{{ description }}</strong> <span class="badge badge-info">{{ data.length }}</span></h2>
        </div>

        <div>
            <table class="table table-striped my_table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" v-for="item in columns" :key="item" >{{ item }}</th>                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in data" :key="data.id">
                        <th scope="row">{{ data.id }}</th>
                        <td v-for="chave in chavesArr" :key="chave"><p class="data">{{ data[chave] }}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>  
    </div>
</template>

<script>
    export default {
        name: 'ListsComponent',
        props: {
            //['users'] Poderia ser simplificado assim
            data: [],            
            description: String,
            columns: {},
            chavesArr: [],
    },
    }
</script>

<style lang="scss" scoped>
    .lists {
        width: max-content;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 3px;
        background-color: #fff;
    }
</style>