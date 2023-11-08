$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navigation').addClass('fixed-top');
        }else {
            $('.navigation').removeClass('fixed-top');
        }

        if (this.scrollY > 500) {
            $('.ButtonTrigger').addClass('fixed-ButtonTrigger');
        }else {
            $('.ButtonTrigger').removeClass('fixed-ButtonTrigger');
        }
    })
})


alert("Está On")
