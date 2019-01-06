<template>
	<div class="k-color-field-preview">
	    <div class="color-preview" :style="'background-color:'+ value"></div>
	</div>
</template>

<script>
export default {
    props: {
        value: String,
    },
};
</script>