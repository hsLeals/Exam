var i = 0;
var j = 0;
var k = 0;
var l = 0;

$("input").keyup(function () {
    if ($("input").val() == "") {
        $(this).css("font-size", "15px")
    } else {
        $(this).css("font-size", "17px")
    }
});



function signIn() {

    if ($(".psw").val() == "Leals") {
        $(".form").hide()
        $(".info i").append($(".un").val())
        $(".exam").css("display", "flex")
    }
    else {
        $(".psw").css("outline", "2px solid red")

    }
}
$("input").keypress(function (e) {
    if (e.which == 13) {
        signIn();
    }
});
$(".form button").click(function () {
    signIn();
});

function eye() {
    $(".fa-eye-slash").toggle()
    $(".fa-eye").toggle()
    $(".psw").attr("type", "text")
}
$(".fa-eye-slash").toggle()
$(".fa-eye").click(eye);
$(".fa-eye-slash").click(function () {
    eye()
    $(".psw").attr("type", "password")
});

let x = 59;
let y = 1;

function time() {
    if (x == 00) {
        if (y == 00) {
            clearInterval(int)
            finish()
        }
        x = 59;
        y--;
        $(".minute").html(("0" + y).slice(-2) + " :")
    }
    x--;
    $(".second").html(("0" + x).slice(-2))
    $(".minute").html(("0" + y).slice(-2) + " :")
}

var int;
$(".sb").click(function () {
    $(".second").html(("0" + x).slice(-2))
    $(".minute").html(("0" + y).slice(-2) + " :")
    $(".questions").css("filter", "none")
    int = setInterval(time, 1000);
})

$(".number").click(function () {
    $(".number").css("box-shadow", "none")
    $(this).css("box-shadow", "0 0px 25px rgba(0, 255, 0, 1)")
    i = $(this).text() - 1;
    question_answer()
})

var questions = [
    { question: "1. İsmin neçə halı var?", a: "A) 4", b: "B) 5", c: "C) 6", d: "D) 7", ca: "C) 6"},
    { question: "2. 5 %-i 2 olan ədədi tap", a: "A) 43", b: "B) 50", c: "C) 40", d: "D) 53", ca: "C) 40"},
    { question: "3. X=5, y=8 olduqda 20:y+60:x=?", a: "A) 14", b: "B) 14.5", c: "C) 13.5", d: "D) 8.5", ca: "B) 14.5" },
    { question: "4. X=5, y=8 olduqda 20:y+60:x=?", a: "A) 14", b: "B) 14.5", c: "C) 13.5", d: "D) 8.5", ca: "B) 14.5" },
    { question: "5. (x+3)+(x+1)=12 Tənliyi həll edin", a: "A) 12", b: "B) 4", c: "C) 8", d: "D) 45", ca: "B) 4" },
    { question: "6. Sürəti 7 olan neçə düzgün olmayan kəsr var?", a: "A) 4", b: "B) 5", c: "C) 6", d: "D) 7", ca: "D) 7" },
    { question: "7. Hansı kar samitin cingiltili qarşılığı yoxdur?", a: "A) H", b: "B) X", c: "C) J", d: "D) L", ca: "A) H" },
    { question: "8. Bitişdirici samitləri göstərin:", a: "A) l,n", b: "B) m,r,n", c: "C) n,y,s", d: "D) n,s,m", ca: "C) n,y,s" },
    { question: "9. The pencils and paper ......... on your desk.", a: "A) be", b: "B) is", c: "C) to be", d: "D) are", ca: "D) are" },
    { question: "10. There are 12 ......... in a year.", a: "A) weeks", b: "B) months", c: "C) hours", d: "D) days", ca: "B) months" },
]

function question_answer() {
    $(".question").text(`${questions[i].question}`)
    $(".answer").eq(0).text(`${questions[i].a}`)
    $(".answer").eq(1).text(`${questions[i].b}`)
    $(".answer").eq(2).text(`${questions[i].c}`)
    $(".answer").eq(3).text(`${questions[i].d}`)
    $(".number").css("box-shadow", "none")
    $(".number").eq(i).css("box-shadow", "0 0px 25px rgba(0, 255, 0, 1)");
    $(".answer").css("background-color", "rgba(255, 255, 255, 0.34)")
    $(".answer").css("pointer-events", "auto");

}
question_answer()
$(".fa-circle-right").click(function () {
    i++;
    question_answer()
})
$(".fa-circle-left").click(function () {
    i--;
    question_answer()
})

$(".answer").click(function () {
    if ($(this).text() == questions[i].ca) {
        $(this).css("background-color", "rgba(9, 255, 0, 0.39");
        j++


    } else {
        $(this).css("background-color", "rgba(255, 0, 0, 0.39)");
        $(".answer").each(function () {
            if ($(this).text() == questions[i].ca) {
                $(this).css("background-color", "rgba(9, 255, 0, 0.39");
            }
        })
        k++;
        console.log(k);
    }
    $(".answer").css("pointer-events", "none");
});

function finish() {
    if (j >= 7) {
        $(".finish i").text(`Dear ${$(".un").val()} congratulation, you've passed exam!!!`)
        $(".finish i").css("color", "rgba(0, 255, 0, 0.575)")
    } else {
        $(".finish i").text(`Dear ${$(".un").val()} unfortunately you've failed your exam`)
        $(".finish i").css("color", "rgba(223, 5, 5, 0.785)")
    }

    $(".finish").show()
    $(".exam").hide()
    l = k + j
    $(".ra").append(j)
    $(".wa").append(k)
    $(".uq").append(`${10 - l}`)
}

$(".info button:last-child").click(function () {
    clearInterval(int)
    finish()
})
