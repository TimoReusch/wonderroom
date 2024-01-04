<script lang="ts">
    export let reservation: reservation;

    type reservation = {
        "reservation_id": number,
        "starts_at": string,
        "ends_at": string,
        "reserved_by": string
    }

    function leftMargin(time: string): number {
        let timeSplit: string[] = time.split(':');
        let hours: number = parseInt(timeSplit[0]);
        let minutes: number = parseInt(timeSplit[1]);

        return hours*120 + minutes*2;
    }

    function width(startTime: string, endTime: string): number {
        const [startHours, startMinutes] = startTime.split(":").map(Number);
        const [endHours, endMinutes] = endTime.split(":").map(Number);

        const startTotalMinutes = startHours * 60 + startMinutes;
        const endTotalMinutes = endHours * 60 + endMinutes;

        // Calculate duration in minutes
        return (endTotalMinutes - startTotalMinutes) * 2;
    }
</script>

<div class="reservationContainer absolute bg-primary p-2 rounded"
     style="width: {width(reservation.starts_at, reservation.ends_at)}px; margin-left: {leftMargin(reservation.starts_at)}px;">
    <div class="reservationContainerText">
        {reservation.reserved_by}<br>
        <span class="font-light">{reservation.starts_at} - {reservation.ends_at}</span>
    </div>
</div>

<style lang="scss">
  .reservationContainer {
    top: 0;
    z-index: 1;
    margin-top: -3px;
    border: 1px solid oklch(var(--b1));
  }

  .reservationContainerText {
    color: oklch(var(--pc));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>