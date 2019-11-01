<template>
	<div class="k-tags-field-preview" :value="value">
  		<div class="tags-preview">
  			<div v-for="tag in value" class="tag">{{ tag.text }}</div>
  		</div>
  	</div>
</template>

<script>
export default {
    props: {
        value: [Array, Object, String],
    },
};
</script>

<style lang="scss">
    @import '../assets/css/styles.scss'
</style>
