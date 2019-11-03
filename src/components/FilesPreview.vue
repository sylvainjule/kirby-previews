<template>
  <ul v-if="value" class="k-files-field-preview">
    <li v-for="file in value" :key="file.url">
      <k-link :title="file.filename" :to="file.link" @click.native.stop>
        <figure class="files-preview">
            <k-image v-if="file.type === 'image'" v-bind="imageOptions(file)" />
            <k-icon v-else v-bind="file.icon" />
            <figcaption v-html="file.filename"></figcaption>
        </figure>
      </k-link>
    </li>
  </ul>
</template>

<script>
export default {
  extends: 'k-files-field-preview'
};
</script>
