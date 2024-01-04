<script lang="ts">
    import DatePicker from "$lib/components/DatePicker.svelte"
    import Timeline from "$lib/components/Timeline.svelte";
    import { showDrawer, onMobile } from "$lib/store";
    import Sidebar from "$lib/components/Sidebar.svelte";
</script>
<div class="grid grid-cols-12 gap-1 px-5 mt-3">
    {#if $onMobile}
        <dialog class="modal modal-bottom sm:modal-middle" class:modal-open={$showDrawer}>
            <div class="modal-box">
                <div class="modal-action mt-0">
                    <form method="dialog">
                        <button class="btn btn-neutral btn-sm" on:click={()=>$showDrawer = false}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                            </svg>
                        </button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </dialog>
    {:else }
        <div class="col-span-3 overflow-y-scroll {!$showDrawer ? 'hidden' : ''}">
            <Sidebar />
        </div>
    {/if}
    <div class={$showDrawer ? 'col-span-9' : 'col-span-12'}>
        <Timeline/>
    </div>
</div>
