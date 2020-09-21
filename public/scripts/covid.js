$(document).ready(() => {
    fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            document.getElementById('covid-india').innerHTML = data.Countries.filter(country => {
                return country.Country === "India";
            })[0].TotalConfirmed})
        .catch(err => console.error(err));
    fetch('https://api.covidindiatracker.com/state_data.json')
        .then(res => res.json())
        .then(data => {
            document.getElementById('covid-bihar').innerHTML = data.filter(state => {
                return state.id === "IN-BR";
        })[0].confirmed})
        .catch(err => console.error(err));
});
let flag = false;
let covidBtn = document.getElementsByClassName('btn')[0];
const covidUpdate = () => {
    if(flag === false) {
        covidBtn.classList.add('btnChange');
        flag = true;
    } else {
        covidBtn.classList.remove('btnChange');
        flag = false;
    }
    return;
};
$(document).ready(() => {
    setInterval(covidUpdate, 3000);
});
$(document).ready(() => {
    $('.covid').draggable();
});