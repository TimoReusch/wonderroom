<script>
    import { DatePicker } from "date-picker-svelte";

    let date = new Date();
</script>

<div class="grid grid-cols-12 gap-1 px-5">
    <div class="col-span-3 overflow-y-scroll">
        <button class="btn btn-primary mb-5" style="width: 70%">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            Add booking
        </button>
        <div class="datePickerParent">
            <DatePicker bind:value={date}/>
        </div>

        <h3 class="text-xl mt-5 mb-2">Rooms</h3>
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox checkbox-sm"/>
                        </label>
                    </th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <!-- row 1 -->
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox checkbox-sm"/>
                        </label>
                    </th>
                    <td>
                        Raum 1
                    </td>
                </tr>
                <!-- row 2 -->
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" class="checkbox checkbox-sm"/>
                        </label>
                    </th>
                    <td>
                        Raum 2
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div class="col-span-9 overflow-scroll tableFixHead border-collapse">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th></th>
                <th>00:00</th>
                <th>01:00</th>
                <th>02:00</th>
                <th>03:00</th>
                <th>04:00</th>
                <th>05:00</th>
                <th>06:00</th>
                <th>07:00</th>
                <th>08:00</th>
                <th>09:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>18:00</th>
                <th>19:00</th>
                <th>20:00</th>
                <th>21:00</th>
                <th>22:00</th>
                <th>23:00</th>
                <th>00:00</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="sticky-col">TV-Room</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Seminar-Room</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Barbecue</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Kitchen</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Kitchen</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Kitchen</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            <tr>
                <td class="sticky-col">Kitchen</td>
                <td class="long">QWERTYUIOPASDFGHJKLZXCVBNM</td>
            </tr>
            </tbody>
        </table>
    </div>
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

  .tableFixHead {
    thead {
      th {
        position: sticky;
        top: 0;
        z-index: 1;
      }
    }

    th {
      background: oklch(var(--b1));
    }

    .sticky-col {
      position: sticky;
      left: 0; // Stick to the left side
      z-index: 2; // Ensure it stays on top of other content
      background: oklch(var(--b1)); // You might need to adjust the background for visibility
    }
  }


</style>