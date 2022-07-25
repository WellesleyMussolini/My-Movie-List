export const formatDate = (date) => {
    let myDate = new Date(date);
    const result = myDate.toLocaleDateString("pt-BR", {timeZone: "UTC"});
    return result;
}