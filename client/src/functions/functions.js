function descendingComparator(a, b, orderBy) {
  console.log("comparisson", orderBy, a, b);
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  console.log("getComparator", orderBy);
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const createIngredientsString = ingredients =>
  ingredients.map(
    (ingredient, i) => ingredient + (ingredients.length - 1 === i ? "" : " | ")
  );

function readableDate(isoString) {
  const date = new Date(isoString);
  const day = date.getDate();
  const month = date.getMonth();
  const uur = date.getHours();
  const minuten = date.getMinutes();
  return `op ${day}/${month} om ${uur}:${minuten}`;
}

function filterOutIds(orders, orderids) {
  const new_orders = orders.filter(({ id }) => !orderids.includes(id));
  console.log(new_orders, "new_orders");
  return new_orders;
}

module.exports = {
  stableSort,
  getComparator,
  createIngredientsString,
  readableDate,
  filterOutIds
};
