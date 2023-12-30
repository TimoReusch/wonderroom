<script>
	import {DatePicker} from 'date-picker-svelte'
	let date = new Date()
</script>

<div class="grid grid-cols-12 gap-1 px-5">
	<div class="col-span-3">
		<button class="btn btn-primary mb-5" style="width: 70%">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
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
							<input type="checkbox" class="checkbox checkbox-sm" />
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
							<input type="checkbox" class="checkbox checkbox-sm" />
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
							<input type="checkbox" class="checkbox checkbox-sm" />
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
		<table>
			<tr>
				<th>Raum 1</th>
				<th>Raum 2</th>
			</tr>
			<tr>
				<td></td>
				<td></td>
			</tr>
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

	.datePickerParent{
		:global(.date-time-picker) {
			border: none !important;
			box-shadow: none !important;
		}
	}
</style>