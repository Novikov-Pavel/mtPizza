export let currRub = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "rub",
    maximumFractionDigits: 0,
});

export const smUnit = (value: number) =>
    value >= 100 ? value / 100 + " м." : value + " см.";
