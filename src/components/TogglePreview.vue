<template>
	<div class="k-toggle-field-preview" :value="value">
  		<div class="toggle"></div>
  	</div>
</template>

<script>
export default {
    props: {
        value: String,
    },
};
</script>
