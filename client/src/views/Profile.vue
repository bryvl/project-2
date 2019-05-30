<template>
    <div class="profile">
        <div>
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                <b-col md="6"> User Picture Here
                    <b-card-img src="https://picsum.photos/200/200/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Event Title Goes Here">
                    <b-card-text>
                        This is where we will add event information.
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div>

    </div>    
</template>

<script>
export default {
    name:'Profile'
}
</script>

<style lang="scss" scoped>

</style>