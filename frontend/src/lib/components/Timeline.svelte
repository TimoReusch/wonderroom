<script lang="ts">
    import Reservation from "$lib/components/Reservation.svelte";

    let modalIsOpen = false;

    export let rowDescriptions: string[];
    export let columnDescriptions: string[];

    // The start time matters. If the reservation starts at 00:30, then the object index is 0
    let reservationsByHour = {
        0: [
            {
                "reservation_id": 1,
                "starts_at": "00:00",
                "ends_at": "00:40",
                "reserved_by": "Kevin"
            },
            {
                "reservation_id": 2,
                "starts_at": "00:50",
                "ends_at": "01:30",
                "reserved_by": "Erik"
            }
        ],
        1: [
            {
                "reservation_id": 3,
                "starts_at": "01:30",
                "ends_at": "03:15",
                "reserved_by": "Erik"
            }
        ],
        2: [],
        3: [
            {
                "reservation_id": 4,
                "starts_at": "03:20",
                "ends_at": "04:30",
                "reserved_by": "Timo"
            }
        ],
        4: []
    }
</script>

<div class="overflow-scroll tableFixHead">
    <table class="table">
        <thead>
        <tr>
            <th class="intersection"></th>
            {#each columnDescriptions as columnDescription}
                <th class="timeCell">{columnDescription}</th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each rowDescriptions as rowDescription}
            <tr>
                <td class="sticky-col">{rowDescription}</td>
                <td class="timeCell" colspan="25">
                    <div class="timeCellContainer relative">
                        {#each Object.entries(reservationsByHour) as [hour, reservationsForHourX]}
                            {#each reservationsForHourX as reservation}
                                {#each reservationsForHourX as reservation}
                                    <div class="cursor-pointer" on:click={() => modalIsOpen = true}>
                                        <Reservation reservation={reservation}/>
                                    </div>
                                {/each}
                            {/each}
                        {/each}
                    </div>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<dialog class="modal" class:modal-open={modalIsOpen}>
    <div class="modal-box">
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn" on:click={()=>modalIsOpen = false}>Close</button>
            </form>
        </div>
    </div>
</dialog>

<style lang="scss">
  .tableFixHead {
    thead {
      th {
        position: sticky;
        top: 0;
        z-index: 2;
        background: oklch(var(--b1));
        padding-left: 0;
        min-width: 120px;
      }
    }

    tbody {
      .sticky-col {
        position: sticky;
        left: 0;
        z-index: 3;
        background: oklch(var(--b1));
      }

      .timeCell {
        padding: 0;
        min-width: 120px;
        max-width: 120px;
        height: 80px;

        .timeCellContainer {
          padding: 0;
          z-index: 1;
          height: 50px;
        }
      }
    }

    .intersection {
      position: sticky;
      top: 0;
      left: 0;
      z-index: 4; /* Highest to stay on top */
      background: oklch(var(--b1)); /* Match the background */
    }
  }
</style>