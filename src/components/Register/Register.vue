<template>
<el-form :model="form" label-width="120px">
    <el-form-item label="User name">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="Password">
      <el-input v-model="form.password" />
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
</el-form>
</template>

<script>
</script>