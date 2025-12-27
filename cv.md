---
layout: home
---
<div style="height: 90vh;">
    <PDFViewer
      :config="{
        src: '/cv-v4.pdf',
        theme: { preference: 'light' },
        disabledCategories: ['annotation', 'redaction', 'document-open', 'document-close', 'document-export', 'panel-sidebar', 'panel-comment', 'export', 'tools']
      }"
      :style="{ width: '100%', height: '100%' }"
    />
</div>

<script setup>
import { PDFViewer } from '@embedpdf/vue-pdf-viewer';
</script>
