<template>
	<div class="k-color-palette-field-preview">
	    <div v-for="color in convertedValue" class="color-preview" :style="'background-color:'+ color"></div>
	</div>
</template>

<script>
export default {
    props: {
        value: String,
    },
    computed: {
    	convertedValue() {
    		if(this.value !== null && typeof this.value == 'object') {
    			return Object.keys(this.value).map(key => this.value[key])
    		}
    		else {
    			return [this.value]
    		}
    	}
    }
};
</script>