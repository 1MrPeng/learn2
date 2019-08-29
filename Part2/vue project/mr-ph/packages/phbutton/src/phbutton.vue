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
            type: String,
            default: 'normal'
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
    .button{
        border-radius: 2px;
        width: 100px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        background: white;
    }
    .button:hover{
        opacity: 0.8;
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
        color: #fff;
    }
    .success{
        background: #67C23A;
        color: #fff;
    }
    .info{
        background: #909399;
        color: #fff;
    }
    .warning{
        background: #E6A23C;
        color: #fff;
    }
    .danger{
        background: #F56C6C;
        color: #fff;
    }

    // .plain{
    //     opacity: 0.5;
    // }
    .round{
        border-radius: 50%;
    }
    .primary.plain{
        background: rgb(80, 156, 231);
        color: white;
    }
    .success.plain{
        background:rgb(121, 204, 79);
        color: white;
    }
    .info.plain{
        background:#b6b7bb;
        color: white;
    }
    .warning.plain{
        background:rgb(226, 165, 74);
        color: white;
    }
    .danger.plain{
        background:rgb(223, 115, 115);
        color: white;
    }
</style>