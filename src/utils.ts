export let currRub = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "rub",
    maximumFractionDigits: 0,
})

export const smUnit = (value: number) => value > 0 && value + " см.";
