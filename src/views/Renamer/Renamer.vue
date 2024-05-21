<script>
import { ref } from 'vue';

export default {
  setup() {
    const filePath = ref('');
    const dropAreaStyle = ref({
      width: '100%',
      height: '400px',
      border: '2px dashed #ccc',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
    });

    const onDragOver = () => {
      dropAreaStyle.value.border = '2px solid #000';
    };

    const onDragLeave = () => {
      dropAreaStyle.value.border = '2px dashed #ccc';
    };

    const onDrop = (event) => {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        filePath.value = files[0].path;
        dropAreaStyle.value.border = '2px dashed #ccc';
      }
    };

    return {
      filePath,
      dropAreaStyle,
      onDragOver,
      onDragLeave,
      onDrop,
    };
  },
};
</script>

<template>
  <el-container style="height: 100vh;">
    <el-header>File Drag and Drop</el-header>
    <el-main>
      <div
        id="drop-area"
        @dragover.prevent="onDragOver"
        @dragleave.prevent="onDragLeave"
        @drop.prevent="onDrop"
        :style="dropAreaStyle"
      >
        Drag and drop a file here
      </div>
      <div v-if="filePath" style="margin-top: 20px;">
        File Path: {{ filePath }}
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
#drop-area {
  transition: border 0.3s;
}
</style>
