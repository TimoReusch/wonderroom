<script lang="ts">
    import DatePicker from "$lib/components/DatePicker.svelte"
    import Timeline from "$lib/components/Timeline.svelte";

    let columnDescriptions: string[] = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];
    let rowDescriptions: string[] = ["TV Room", "Seminar Room", "Shishabar"]
</script>

<div class="grid grid-cols-12 gap-1 px-5 mt-3">
    <div class="col-span-3 overflow-y-scroll">
        <button class="btn btn-primary mb-5" style="width: 70%">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
            </svg>
            Add booking
        </button>
        <DatePicker />
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
    <div class="col-span-9">
        <Timeline rowDescriptions={rowDescriptions} columnDescriptions={columnDescriptions}/>
    </div>
</div>