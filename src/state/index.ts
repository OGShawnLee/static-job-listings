import { type StartStopNotifier, writable, derived } from 'svelte/store';

function useFilters(initialValue: Filters, start?: StartStopNotifier<Filters>) {
  const store = writable(initialValue, start);
  const { subscribe, update } = store;

  function filterBySkill(skills: string[], filters: string[]) {
    return skills.length ? filters.every((filter) => skills.includes(filter)) : true;
  }

  return {
    subscribe,
    add(this: void, skill: string) {
      update((filters) => {
        if (filters.skills.includes(skill)) return filters;
        return { ...filters, skills: [skill, ...filters.skills] };
      });
    },
    clear(this: void) {
      update(() => {
        return { level: null, role: null, skills: [] };
      });
    },
    filter(this: void, listings: Listing[], { level, role, skills }: Filters) {
      return listings.filter(({ languages, tools, ...listing }) => {
        const hasLevel = level ? level === listing.level : true;
        const hasRole = role ? role === listing.role : true;

        return hasLevel && hasRole && filterBySkill([...languages, ...tools], skills);
      });
    },
    remove(this: void, skill: string) {
      update((filters) => {
        return { ...filters, skills: filters.skills.filter((member) => member !== skill) };
      });
    },
    setLevel(this: void, level: string | null) {
      update((filters) => {
        return { ...filters, level };
      });
    },
    setRole(this: void, role: string | null) {
      update((filters) => {
        return { ...filters, role };
      });
    },
    isSelected(value: string, { level, role, skills }: Filters) {
      return skills.includes(value) || value === role || value === level;
    },
    hasFilters: derived(store, (store) => {
      return Boolean(store.level || store.role || store.skills.length);
    }),
  };
}

export const filters = useFilters({ level: null, role: null, skills: [] });
