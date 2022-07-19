export const filterList = (inputSearch, array) => {
    const result = !inputSearch ? array : array.filter(e => e.name.toLowerCase().includes(inputSearch.toLowerCase()));
    return result;
}