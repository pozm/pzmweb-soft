<template >
    <Button class="Button" :class=" this.Type " >

        <span v-if="$slots.default"><slot></slot></span>

    </Button>
</template>

<script lang="ts">

import Vue, {PropType} from "vue";

type AllowedTypes = "default" | "rounded" | "text"

export default Vue.extend({
    name: "hButton",
    props: {
        Type: {
            type:String,
            default:'default'
        },
        Disabled : Boolean
    }
})

</script>

<style scoped lang="scss" >
@import '../assets/Var';

.Button {
    border-radius: 8px;
    padding: 0.75rem 1.25rem;
    transition: background-color .2s,color .2s,border-color .2s,box-shadow .2s;
    min-width: 60px;
    background-color: $--color-primary;
    color: $--color-text-dark;

    display: inline-flex;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;

    font-family: Lato,Helvetica,sans-serif;
    font-size: 1rem;
    font-weight: normal;


    border: 1px solid $--color-primary;
    box-sizing: border-box;
    &.rounded {
        border-radius: 2rem;
    }
    &.disabled {
        opacity: .4;
    }
    &.text {
        background-color: transparent;
        color : $--color-primary;
        border:0;
        &:hover {
            background-color: rgba($--color-primary,.04);
            color : $--color-primary;

        }
    }
    &:hover {
        background: scale-color($--color-primary, $lightness: -6%);
        color: #212529;
        //border-color: #a28af5;
    }
}

</style>
