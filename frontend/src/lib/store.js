import { writable } from 'svelte/store';

export const showDrawer = writable(true);
export const onMobile = writable(false);