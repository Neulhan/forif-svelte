import { writable } from 'svelte/store';

export const countStore = writable(0);
export const textStore = writable("");