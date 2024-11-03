<template>
    <Teleport to="#modal">
        <dialog class="modal" ref="dialog">
            <header class="modal-header">
                <h2></h2>
                <h2>{{ title }}</h2>
                <h2 class="close" @click="closeModal">X</h2>
            </header>

            <div class="modal-content">
                <slot></slot>
            </div>
        </dialog>
    </Teleport>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import { BaseModalProps } from '../../models/BaseModalProps';
const { title } = defineProps<BaseModalProps>();
const dialog = ref<InstanceType<typeof HTMLDialogElement>>();

function closeModal() {
    dialog.value?.close();
}
function openModal() {
    dialog.value?.showModal();
}

defineExpose({
    openModal,
    closeModal
});
</script>

<style scoped>
* {
    --modal-width: 60vw;
    --modal-height: 40vh;
}

@media (max-height: 1000px) {
    * {
        --modal-width: 70vw;
        --modal-height: 70vh;
    }

}

.modal {
    --modal-content-padding: 3em;
    position: fixed;
    top: -30vh;
    bottom: 0;
    width: var(--modal-width);
    height: var(--modal-height);
    background-color: var(--hover-element-color);
    color: var(--main-text-color);
    border: none;
    border-radius: 2em;
    padding: 0;
}

.modal-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid var(--main-text-color);
    height: calc(var(--modal-height)/8);
}

.modal-header h2 {
    font-size: 1.3em;
}

.modal-header h2:last-child {
    margin-left: auto;
    margin-right: 1em;
    width: 1em;
    cursor: pointer;
}

.modal-header h2:first-child {
    margin-right: auto;
    margin-left: 1em;
    width: 1em;
}

.modal-content {
    padding: var(--modal-content-padding);
    padding-top: var(--modal-content-padding)/2;
}

.modal::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>