import { writable } from 'svelte/store';

const createElements = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    local: elements => {
      set(elements);
    },
    add: element => {
      update(elements => (elements = [...elements, element]));
    },
    delete: id => {
      update(elements => (elements = elements.filter(item => item.id !== id)));
    },
    put: id => {
      update(
        elements =>
          (elements = elements.map(item => {
            if (item.id === id) {
              return {
                ...item,
                estado: !item.estado
              };
            } else {
              return item;
            }
          }))
      );
    }
  };
};

export const elements = createElements();

const createOpc = () => {
  const {
    subscribe,
    update
  } = writable({texto: '', color: '', estado: false})

  return {
    subscribe,
    mostrar: (opciones) => {
      update(n => n = opciones)
    }
  }
}

export const opc = createOpc()