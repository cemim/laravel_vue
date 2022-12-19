<template>    
    <DashboardComponent>
        <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title_pages">
                    <h1>Clientes</h1>
                </header>
            </div>
        </template>
    </DashboardComponent>
</template>

<script>

import DashboardComponent from '../dashboard/DashboardComponent.vue';

export default {
    name: 'ClientesComponent',
    components: {
        DashboardComponent,
    }
}
</script>