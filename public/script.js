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
            $('header').css('background-color', '#fafad2');
        } else {
            $('header').css('box-shadow', 'none');
            $('.header-logo').css('padding', '30px');
            $('.header-logo h1').css('font-size', '50px');
            $('.bb').css('font-size', '72px');
            $('#todayDate').css('font-size', '18px');
            $('header').css('background-color', '#fff');
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