// import FilesPreview        from './components/FilesPreview.vue'
import ColorPreview        from './components/ColorPreview.vue'
import ColorsPreview       from './components/ColorsPreview.vue'
import ColorPalettePreview from './components/ColorPalettePreview.vue'
import StructurePreview    from './components/StructurePreview.vue'
import TagsPreview         from './components/TagsPreview.vue'
import MultiselectPreview  from './components/MultiselectPreview.vue'
import BlocksPreview       from './components/BlocksPreview.vue'

panel.plugin('sylvainjule/previews', {
  components: {
    // 'k-files-field-preview': FilesPreview,
    'k-color-field-preview': ColorPreview,
    'k-colors-field-preview': ColorsPreview,
    'k-color-palette-field-preview': ColorPalettePreview,
    'k-structure-field-preview': StructurePreview,
    'k-tags-field-preview': TagsPreview,
    'k-multiselect-field-preview': MultiselectPreview,
    'k-blocks-field-preview': BlocksPreview,
  }
});
