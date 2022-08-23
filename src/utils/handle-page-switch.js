export const handlePageSwitch = (
    page,
    currentPage,
    pageSwitch,
    newPage,
) => {
    const clickedPage = page.target.textContent;
    const convertStringToNumber = Number(clickedPage);
    pageSwitch(convertStringToNumber);
    currentPage.page = newPage;
};