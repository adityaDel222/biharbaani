$(document).ready(() => {
    let d = new Date();
    const days = ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरूवार', 'शुक्रवार', 'शनिवार'];
    const months = ['जनवरी', 'फरवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'];
    let dateOutput = days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
    document.getElementById('todayDate').innerHTML = dateOutput;
});
$(document).ready(() => {
    $(document).scroll(() => {
        if(window.pageYOffset > 0) {
            $('header').css('box-shadow', '0 2px 2px 2px rgba(150, 100, 0, 0.25)');
            $('.header-logo').css('padding', '0');
            $('.header-logo h1').css('font-size', '30px');
            $('.bb').css('font-size', '30px');
            $('#todayDate').css('font-size', '15px');
            $('header').css('background-color', '#fcfce3');
        } else {
            $('header').css('box-shadow', 'none');
            $('.header-logo').css('padding', '5px');
            $('.header-logo h1').css('font-size', '50px');
            $('.bb').css('font-size', '72px');
            $('#todayDate').css('font-size', '18px');
            $('header').css('background-color', '#fcfce3');
        }
    });
});
$(document).ready(() => {
    $('.hidden-menu').css('display', 'flex');
    $('.hidden-menu').hide();
    $('.show-menu-icon').click(() => {
        $('.hidden-menu').animate({
            width: 'toggle'
        });
        $('.show-menu-icon').hide(500);
        $('.hide-menu-icon').show(500);
    });
    $('.hide-menu-icon').click(() => {
        $('.hidden-menu').animate({
            width: 'toggle'
        });
        $('.hide-menu-icon').hide(500);
        $('.show-menu-icon').show(500);
    });
});
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