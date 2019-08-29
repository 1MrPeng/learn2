<template>
  <button class="button" :class="[type,plain?'plain':'',round?'round':'']">
      <span>
          <slot></slot>
      </span>
  </button>
</template>

<script>
export default {
    name: 'phbutton',
    props: {
        type: {
            type: String
        },
        plain: {
            type:Boolean,
            default:false
        },
        round: {
            type:Boolean,
            default:false
        }
    }
};
</script>

<style lang="scss" scoped>
    button{
        border-radius: 4px;
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        background: white;
        cursor: pointer;
        color: white;
    }
    button:hover{
        opacity: 0.9;
    }
    .button{
        color: #333;
    }
    span{
        display: inline-block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .primary{
        background: #409EFF;
        color: white;
        border: none;
    }
    .success{
        background: #67C23A;
        color: white;
        border: none;
    }
    .info{
        background: #909399;
        color: white;
        border: none;
    }
    .warning{
        background: #E6A23C;
        color: white;
        border: none;
    }
    .danger{
        background: #F56C6C;
        color: white;
        border: none;
    }
    .plain:hover{
        border: 1px solid #409EFF;
        color: #409EFF;
    }
    .round{
        border-radius: 20px;
    }
    .round:hover{
        opacity: 0.9;
    }
    .primary.plain{
        background: #ECF5FF;
        color: #409EFF;
        border: 1px solid #409EFF;
    }
    .primary.plain:hover{
        background: #409EFF;
        color: white;
    }
    .success.plain{
        background:#F0F9EB;
        color: #67C23A;
        border: 1px solid #67C23A;
    }
    .success.plain:hover{
        background: #67C23A;
        color: white;
    }
    .info.plain{
        background:#F4F4F5;
        color: #909399;
        border: 1px solid #909399;
    }
    .info.plain:hover{
        background: #909399;
        color: white;
    }
    .warning.plain{
        background:#FDF6EC;
        color: #E6A23C;
        border: 1px solid #E6A23C;
    }
    .warning.plain:hover{
        background:#E6A23C;
        color: white;
    }
    .danger.plain{
        background:#FEF0F0;
        border: 1px solid #F56C6C;
        color: #F56C6C;
    }
    .danger.plain:hover{
        background:#F56C6C;
        color: white;
    }
</style>