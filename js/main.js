$(document).ready(function() {
    $(".nav1").click(function(e){
        $(".mobile-nav").removeClass("active");
        $(".sandwich").removeClass("active");
        $("html, body").animate({
            scrollTop: $(".catalog").offset().top +40
        }, {
            duration: 1500
        });
        e.preventDefault();
    });
    $(".nav2").click(function(e){
        $(".mobile-nav").removeClass("active");
        $(".sandwich").removeClass("active");
        $("html, body").animate({
            scrollTop: $(".steps").offset().top
        }, {
            duration: 3000
        });
        e.preventDefault();
    });
    $(".nav3").click(function(e){
        $(".mobile-nav").removeClass("active");
        $(".sandwich").removeClass("active");
        $("html, body").animate({
            scrollTop: $(".response").offset().top +100
        }, {
            duration: 3500
        });
        e.preventDefault();
    });
    $(".nav4").click(function(e){
        $(".mobile-nav").removeClass("active");
        $(".sandwich").removeClass("active");
        $("html, body").animate({
            scrollTop: $("footer").offset().top
        }, {
            duration: 4000
        });
        e.preventDefault();
    });

    $(".bonus-btn").click(function(e){
        $("html, body").animate({
            scrollTop: $(".watch.hit").offset().top -50
        }, {
            duration: 500
        });
        e.preventDefault();
    });

    $(".sandwich").click(function(e) {
        $(".mobile-nav").toggleClass("active");
        $(this).toggleClass("active");
    });

    $("#close-modal").click(function(e) {
        $(".modal-bg").fadeOut();
        $(".thx").fadeOut();
        e.preventDefault();
    });

    $(".read-more").click(function (e) {
        $(this).siblings("p:not(:first-child)").slideToggle("hidden");
        $(this).html($(this).text() == 'Скрыть текст' ? 'Читать полностью' : 'Скрыть текст');
        e.preventDefault();
    });


    $(".send-btn").click(function() {
        if($(this).text() == 'Заказать сейчас!') {
            $(this).parent(".watch-btn").siblings(".order").show();
            $(this).text("Отправить заявку").addClass("send-btn");
        } else if ($(this).text() == 'Отправить заявку') {
            var name = $(this).parent(".watch-btn").siblings(".order").children(".form-name"),
                phone = $(this).parent(".watch-btn").siblings(".order").children(".form-phone"),
                model = $(this).parent(".watch-btn").siblings(".order").children(".form-item"),
                orderStatus = true;

            function checkPhone(value) {
                regExp = /^\d+$/;
                if (regExp.test(value)) {
                    return true;
                } else{
                    return false;
                }
            };

            if (name.val() !== '') {
                name.removeClass("err");
                orderStatus = true;
            } else {
                name.addClass("err").attr("placeholder", "Input error");
                orderStatus = false;
            }

            if (phone.val() !== '' && checkPhone(phone.val())) {
                phone.removeClass("err");
                orderStatus = true;
            } else {
                phone.addClass("err").attr("placeholder", "Input error");
                orderStatus = false;
            }

            if(orderStatus == true) {send();};
            function send() {
                if(orderStatus){
                    $.ajax({
                        url: '/tomail.php',
                        type: 'POST',
                        data: {
                        name: name.val(),
                        tel: phone.val(),
                        item: model.val(),
                    }
                    })
                    .done(function(data) {
                        if(data){
                            $(".modal-bg").fadeIn(200);
                            $(".thx").fadeIn(400);
                            name.val("");
                            phone.val("");
                        }
                    })
                    .fail(function() {
                        console.log("-");
                    });

              }
            };
        };
        
    });

});



