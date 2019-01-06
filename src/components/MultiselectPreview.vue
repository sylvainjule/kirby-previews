<template>
	<div class="k-multiselect-field-preview">
  		<div class="multiselect-entries">
  			<span v-for="entry in value" class="multiselect-entry">{{ entry.text }}</span>
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