<script>
import DatePicker from "$lib/components/DatePicker.svelte";
import { onMobile } from "$lib/store.js";
</script>

<div class="{$onMobile ? 'text-center' : ''}">
<button class="btn btn-primary mb-5 btn-wide">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
         stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
    Add booking
</button>
<DatePicker/>
</div>

<h3 class="text-xl mt-5 mb-2">Rooms</h3>
<table class="selectRooms mb-3">
    <tbody>
    <tr>
        <td>
            <input type="checkbox" checked="checked" class="checkbox checkbox-sm checkbox-primary"/>
        </td>
        <td>Seminar Room</td>
    </tr>
    <tr>
        <td>
            <input type="checkbox" class="checkbox checkbox-sm checkbox-primary"/>
        </td>
        <td>TV Room</td>
    </tr>
    </tbody>
</table>

<style lang="scss">
  .selectRooms {
    td {
      vertical-align: center;
      padding: 5px;
    }

    .checkbox {
      margin-top: 6px;
    }
  }
</style>