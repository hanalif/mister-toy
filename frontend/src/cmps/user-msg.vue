<template>
  <div v-if="alive" class="alert" :class="alertClass">
    {{ msg.txt }}
  </div>
</template>

<script>
export default {
     created() {
        eventBusService.$on(SHOW_MSG, msg=>{
            this.msg = msg;
            var delay = msg.delay || 2000;
            this.alive = true;
            setTimeout(() => {
                this.alive = false;
            }, delay)
        })
    },
    data() {
        return {
            alive : false,
            msg: null
        }
    },
    computed: {
        alertClass() {
            if (!this.msg) return;
            return `alert-${this.msg.type}`
        }
    }
};
</script>

<style lang="scss" scoped>
</style>