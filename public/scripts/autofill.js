$(document).ready(() => {
    $('#article-entry').ready(() => {
        const newDate = new Date();
        const monthsList = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
        document.getElementById('day-select').value = newDate.getDate();
        document.getElementById('month-select').value = monthsList[newDate.getMonth() + 1];
        document.getElementById('year-select').value = newDate.getFullYear();
        document.getElementById('hour-select').value = newDate.getHours();
        document.getElementById('minute-select').value = newDate.getMinutes();
    });
});