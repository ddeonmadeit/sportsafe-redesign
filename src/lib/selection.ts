import { useSyncExternalStore } from "react";

export type SelectionItem = {
  id: string;
  name: string;
  img: string;
};

const KEY = "ssa:selected-mouthguards";

let state: SelectionItem[] = [];
const listeners = new Set<() => void>();

function load() {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = JSON.parse(raw);
  } catch {
    state = [];
  }
}
load();

function persist() {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function emit() {
  persist();
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return [] as SelectionItem[];
}

export function toggleSelection(item: SelectionItem) {
  const exists = state.some((s) => s.id === item.id);
  state = exists ? state.filter((s) => s.id !== item.id) : [...state, item];
  emit();
}

export function clearSelection() {
  state = [];
  emit();
}

export function isSelected(id: string) {
  return state.some((s) => s.id === id);
}

export function useSelection() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
