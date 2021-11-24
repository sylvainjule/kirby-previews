<template>
    <div class="k-blocks-field-preview">
        <div class="blocks-preview">{{ blocksString }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: Array,
    },
    computed: {
        blocksCount() {
            return this.value.length
        },
        blocksString() {
            return this.blocksCount > 0 ? this.blocksCount + this.blockString(this.blocksCount) : ''
        }
    },
    methods: {
        blockString(n) {
            return n == 1 ? ' block' : ' blocks'
        }
    }
};
</script>
