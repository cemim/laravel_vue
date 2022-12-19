<template>    
    <DashboardComponent>
        <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title_pages">
                    <h1>Produtos</h1>
                </header>
            </div>
        </template>
    </DashboardComponent>
</template>

<script>

import DashboardComponent from '../dashboard/DashboardComponent.vue';

export default {
    components: {
        DashboardComponent,
    }
}
</script>