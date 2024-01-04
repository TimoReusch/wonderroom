<script lang="ts">
    import Reservation from "$lib/components/Reservation.svelte";

    let modalIsOpen = false;

    let columnDescriptions: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];

    // The start time matters. If the reservation starts at 00:30, then the object index is 0
    let reservationsByRoom = {
        "Seminar Room": [
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
            },
            {
                "reservation_id": 3,
                "starts_at": "01:30",
                "ends_at": "03:15",
                "reserved_by": "Erik"
            }
        ],
        "TV Room": [
            {
                "reservation_id": 4,
                "starts_at": "03:20",
                "ends_at": "04:30",
                "reserved_by": "Timo"
            },
            {
                "reservation_id": 5,
                "starts_at": "01:02",
                "ends_at": "01:44",
                "reserved_by": "Erik"
            },
        ]
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
        {#each Object.entries(reservationsByRoom) as [roomName, reservationsForRoom]}
            <tr>
                <td class="sticky-col">{roomName}</td>
                <td class="timeCell" colspan="25">
                    <div class="timeCellContainer relative">
                        {#each reservationsForRoom as reservation}
                            <div class="cursor-pointer" on:click={() => modalIsOpen = true}>
                                <Reservation reservation={reservation}/>
                            </div>
                        {/each}
                    </div>
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

<dialog class="modal modal-bottom sm:modal-middle" class:modal-open={modalIsOpen}>
    <div class="modal-box">
        <div class="modal-action mt-0">
            <form method="dialog">
                <button class="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                    </svg>
                </button>
                <button class="btn btn-ghost btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                    </svg>
                </button>
                <button class="btn btn-neutral btn-sm" on:click={()=>modalIsOpen = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"/>
                    </svg>
                </button>
            </form>
        </div>
        <table class="detailTable mb-3">
            <tbody>
            <tr>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                    </svg>
                </td>
                <td>Kevin</td>
            </tr>
            <tr>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                    </svg>
                </td>
                <td>Dienstag, 23. Januar 2024</td>
            </tr>
            <tr>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </td>
                <td>00:00 - 01:00 Uhr</td>
            </tr>
            <tr>
                <td>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"/>
                    </svg>
                </td>
                <td>Beschreibung bla bla</td>
            </tr>
            </tbody>
        </table>
        <div class="badge badge-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="inline-block w-4 h-4 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"/>
            </svg>
            &nbsp;001&nbsp;
        </div>
        <div class="badge badge-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="inline-block w-4 h-4 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
            </svg>
            &nbsp; 23.03.2023&nbsp;
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

  .detailTable {
    td {
      padding: 5px 10px;
    }
  }
</style>