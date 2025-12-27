---
layout: home
---

<div style="height: 90vh;">
    <PDFViewer
      :config="{
        src: blobUrl,
        theme: { preference: 'light' },
        disabledCategories: ['annotation', 'redaction', 'document-open', 'document-close', 'document-export', 'panel-sidebar', 'panel-comment', 'export', 'tools']
      }"
      :style="{ width: '100%', height: '100%' }"
    />
</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { PDFViewer } from '@embedpdf/vue-pdf-viewer';
import { data } from './file.data.js';

const CV_RELEASE_VERSION = 4;

const blobUrl = ref(`data:application/pdf;base64,${data.base64Content}`);
</script>
