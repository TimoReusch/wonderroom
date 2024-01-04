<script>
    import { DatePicker } from "date-picker-svelte";

    let date = new Date();
</script>

<div class="datePickerParent">
    <DatePicker bind:value={date}/>
</div>

<style lang="scss">
  * {
    --date-picker-foreground: oklch(var(--bc));
    --date-picker-background: oklch(var(--b1));
    --date-picker-highlight-border: oklch(var(--pc));
    --date-picker-highlight-shadow: oklch(var(--p));
    --date-picker-selected-color: oklch(var(--p));
    --date-picker-selected-background: oklch(var(--pc));
  }

  .datePickerParent {
    :global(.date-time-picker) {
      border: none !important;
      box-shadow: none !important;
    }
  }
</style>