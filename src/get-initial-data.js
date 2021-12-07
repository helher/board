let uniqueId = 0;
function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const id = uniqueId++;
    return {
      id: `id:${id}`,
      text: `item ${id}`
    };
  });
}

const initial = {
  columns: {
    "column-0": {
      id: "column-0",
      title: "IDEA",
      items: getItems(10)
    },

    "column-1": {
      id: "column-1",
      title: "TODAY",
      items: getItems(10)
    },

    "column-2": {
      id: "column-2",
      title: "TOMORROW",
      items: getItems(10)
    },

    "column-3": {
      id: "column-3",
      title: "DAY AFTER TOMORROW",
      items: getItems(10)
    },

    "column-4": {
      id: "column-4",
      title: "ON HOLD",
      items: getItems(10)
    }
  },
  columnOrder: ["column-0", "column-1", "column-2", "column-3", "column-4"]
};

export default function getInitialData() {
  return initial;
}
