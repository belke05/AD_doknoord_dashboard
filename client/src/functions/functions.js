const tableheadMap = {
  omzet: "totaal",
  "cheque delhaize": "cheque_delhaize",
  "op krediet": "op_krediet",
  totaal: "som_totaal",
  datum: "datum_dateformat"
};

function descendingComparator(a, b, orderBy) {
  console.log("comparisson", orderBy, a[orderBy], b[orderBy], a);
  orderBy = checkMapping(orderBy);
  if (orderBy === "datum_dateformat") {
    const { dateA, dateB } = convertDate(a[orderBy], b[orderBy]);
    a[orderBy] = dateA;
    b[orderBy] = dateB;
    console.log(a[orderBy], b[orderBy]);
  }
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

function convertDate(dateA, dateB) {
  console.log(dateA, dateB);
  return { dateA: dateA._seconds, dateB: dateB._seconds };
}

function checkMapping(orderBy) {
  if (tableheadMap[orderBy]) {
    return tableheadMap[orderBy];
  } else {
    return orderBy;
  }
}

module.exports = {
  stableSort,
  getComparator,
  createIngredientsString,
  readableDate,
  filterOutIds
};
