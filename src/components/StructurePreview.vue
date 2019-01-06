<template>
	<div class="k-structure-field-preview">
        <div class="structure-entries-preview">{{ entriesString }}</div>   
    </div>
</template>

<script>
export default {
    props: {
        value: String,
    },
    computed: {
    	entriesCount() {
            return Object.keys(this.value).length
        },
        entriesString() {
            return this.entriesCount > 0 ? this.entriesCount + this.entryString(this.entriesCount) : ''
        }
    },
    methods: {
        entryString(n) {
            return n == 1 ? ' entry' : ' entries'
        }
    }
};
</script>