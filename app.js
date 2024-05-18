let bg = document.querySelectorAll('.infoDiv1');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}

let sg = document.querySelectorAll('.infoDiv2');
for (let i = 0; i < sg.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        sg[i].style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
    });
}
var q, w, r, u, o, p, s, f, h, j, l, z, c, m = false
const up = document.querySelector("#up");
const habr = document.querySelector("#habr");
const NB = document.querySelector("#NB");
const NB1 = document.querySelector("#NB1");
let rI = document.getElementsByClassName('r0')
let right = document.getElementsByClassName('po8')
let block = document.getElementsByClassName('bo1')
let block1 = document.getElementsByClassName('po9')
let block2 = document.getElementsByClassName('bo2')
let block3 = document.getElementsByClassName('bo3')
let block4 = document.getElementsByClassName('bo4')
let block5 = document.getElementsByClassName('bo5')
let block6 = document.getElementsByClassName('bo6')
let block7 = document.getElementsByClassName('bo7')
let block8 = document.getElementsByClassName('bo8')
let block9 = document.getElementsByClassName('bo9')
let block10 = document.getElementsByClassName('bo10')
let block11 = document.getElementsByClassName('bo11')
let block12 = document.getElementsByClassName('bo12')
let block13 = document.getElementsByClassName('bo13')
let block14 = document.getElementsByClassName('bo14')
let block15 = document.getElementsByClassName('bo15')
let block16 = document.getElementsByClassName('bo16')
let block17 = document.getElementsByClassName('bo17')
let block18 = document.getElementsByClassName('bo18')
let siv = document.querySelector('.siv')
window.addEventListener('scroll', e => {
    if (pageYOffset >= 100) {
        up.classList.add("up");
    } else {
        up.classList.remove("up");
    }
    if (pageYOffset > 2500 && pageYOffset < 4000) {
        siv.children[0].style.color = '#fe8700';
    } else {
        siv.children[0].style.color = '#73827d';
    }
    if (pageYOffset > 4000 && pageYOffset < 4800) {
        siv.children[1].style.color = '#fe8700';
    } else {
        siv.children[1].style.color = '#73827d';
    }
    if (pageYOffset >4800 && pageYOffset < 6200) {
        siv.children[2].style.color = '#fe8700';
    } else {
        siv.children[2].style.color = '#73827d';
    }
    if (pageYOffset > 6200 && pageYOffset < 8200) {
        siv.children[3].style.color = '#fe8700';
    } else {
        siv.children[3].style.color = '#73827d';
    }
    if (pageYOffset > 8200 && pageYOffset < 9000) {
        siv.children[4].style.color = '#fe8700';
    } else {
        siv.children[4].style.color = '#73827d';
    }
    if (pageYOffset > 9000 && pageYOffset < 9900) {
        siv.children[5].style.color = '#fe8700';
    } else {
        siv.children[5].style.color = '#73827d';
    }
    if (pageYOffset > 9900) {
        siv.children[6].style.color = '#fe8700';
    } else {
        siv.children[6].style.color = '#73827d';
    }
    if (window.innerWidth > 1000) {
        if (!q) {
            if (pageYOffset >= 800) {
                habr.classList.add("op");
                q = true;
            }
        }
        if (!w) {
            if (pageYOffset >= 1100) {
                NB.classList.add("left");
                w = true;
            }
        }
        if (!p) {
            if (pageYOffset >= 3000) {
                NB1.classList.add("left");
                p = true;
            }
        }
        if (!r) {
            if (pageYOffset >= 2100) {
                for (let i = 0; i < rI.length; i++) {
                    rI[i].classList.add("left");
                }
                for (let i = 0; i < right.length; i++) {
                    right[i].classList.add("right");
                }
                for (let i = 0; i < block.length; i++) {
                    block[i].classList.add("block");
                }
                r = true;
            }
        }
        if (!o) {
            if (pageYOffset >= 2400) {
                for (let i = 0; i < block2.length; i++) {
                    block2[i].classList.add("block");
                }
                o = true;
            }
        }
        if (!s) {
            if (pageYOffset >= 3600) {
                for (let i = 0; i < block3.length; i++) {
                    block3[i].classList.add("left");
                }
                for (let i = 0; i < block4.length; i++) {
                    block4[i].classList.add("top1");
                }
                for (let i = 0; i < block5.length; i++) {
                    block5[i].classList.add("top2");
                }
                s = true;
            }
        }
        if (!u) {
            if (pageYOffset >= 2600) {
                for (let i = 0; i < block1.length; i++) {
                    block1[i].classList.add("right");
                }
                u = true;
            }
        }
        if (!f) {
            if (pageYOffset >= 4000) {
                for (let i = 0; i < block6.length; i++) {
                    block6[i].classList.add("left");
                }
                for (let i = 0; i < block7.length; i++) {
                    block7[i].classList.add("right");
                }
                f = true;
            }
        }
        if (!h) {
            if (pageYOffset >= 4700) {
                for (let i = 0; i < block8.length; i++) {
                    block8[i].classList.add("left");
                }
                h = true;
            }
        }
        if (!j) {
            if (pageYOffset >= 5600) {
                for (let i = 0; i < block9.length; i++) {
                    block9[i].classList.add("left");
                }
                for (let i = 0; i < block10.length; i++) {
                    block10[i].classList.add("bottom1");
                }
                j = true;
            }
        }
        if (!l) {
            if (pageYOffset >= 7900) {
                for (let i = 0; i < block11.length; i++) {
                    block11[i].classList.add("left");
                }
                l = true;
            }
        }
        if (!z) {
            if (pageYOffset >= 8200) {
                for (let i = 0; i < block12.length; i++) {
                    block12[i].classList.add("left");
                }
                for (let i = 0; i < block13.length; i++) {
                    block13[i].classList.add("left1");
                }
                z = true;
            }
        }
        if (!c) {
            if (pageYOffset >= 9300) {
                for (let i = 0; i < block14.length; i++) {
                    block14[i].classList.add("top2");
                }
                for (let i = 0; i < block15.length; i++) {
                    block15[i].classList.add("op");
                }
                for (let i = 0; i < block16.length; i++) {
                    block16[i].classList.add("left");
                }
                for (let i = 0; i < block17.length; i++) {
                    block17[i].classList.add("right");
                }
                c = true;
            }
        }
        if (!m) {
            if (pageYOffset >= 9900) {
                for (let i = 0; i < block18.length; i++) {
                    block18[i].classList.add("left");
                }
                m = true;
            }
        }
    } else if (window.innerWidth > 500 && window.innerWidth < 1000) {
        if (!q) {
            if (pageYOffset >= 500) {
                habr.classList.add("op");
                q = true;
            }
        }
        if (!w) {
            if (pageYOffset >= 800) {
                NB.classList.add("left");
                w = true;
            }
        }
        if (!p) {
            if (pageYOffset >= 2400) {
                NB1.classList.add("left");
                p = true;
            }
        }
        if (!r) {
            if (pageYOffset >= 1700) {
                for (let i = 0; i < rI.length; i++) {
                    rI[i].classList.add("left");
                }
                for (let i = 0; i < right.length; i++) {
                    right[i].classList.add("right");
                }
                for (let i = 0; i < block.length; i++) {
                    block[i].classList.add("block");
                }
                r = true;
            }
        }
        if (!o) {
            if (pageYOffset >= 1800) {
                for (let i = 0; i < block2.length; i++) {
                    block2[i].classList.add("block");
                }
                o = true;
            }
        }
        if (!s) {
            if (pageYOffset >= 2800) {
                for (let i = 0; i < block3.length; i++) {
                    block3[i].classList.add("left");
                }
                for (let i = 0; i < block4.length; i++) {
                    block4[i].classList.add("top1");
                }
                for (let i = 0; i < block5.length; i++) {
                    block5[i].classList.add("top2");
                }
                s = true;
            }
        }
        if (!u) {
            if (pageYOffset >= 2000) {
                for (let i = 0; i < block1.length; i++) {
                    block1[i].classList.add("right");
                }
                u = true;
            }
        }
        if (!f) {
            if (pageYOffset >= 3500) {
                for (let i = 0; i < block6.length; i++) {
                    block6[i].classList.add("left");
                }
                for (let i = 0; i < block7.length; i++) {
                    block7[i].classList.add("right");
                }
                f = true;
            }
        }
        if (!h) {
            if (pageYOffset >= 4200) {
                for (let i = 0; i < block8.length; i++) {
                    block8[i].classList.add("left");
                }
                h = true;
            }
        }
        if (!j) {
            if (pageYOffset >= 4800) {
                for (let i = 0; i < block9.length; i++) {
                    block9[i].classList.add("left");
                }
                for (let i = 0; i < block10.length; i++) {
                    block10[i].classList.add("bottom1");
                }
                j = true;
            }
        }
        if (!l) {
            if (pageYOffset >= 6800) {
                for (let i = 0; i < block11.length; i++) {
                    block11[i].classList.add("left");
                }
                l = true;
            }
        }
        if (!z) {
            if (pageYOffset >= 7300) {
                for (let i = 0; i < block12.length; i++) {
                    block12[i].classList.add("left");
                }
                for (let i = 0; i < block13.length; i++) {
                    block13[i].classList.add("left1");
                }
                z = true;
            }
        }
        if (!c) {
            if (pageYOffset >= 8400) {
                for (let i = 0; i < block14.length; i++) {
                    block14[i].classList.add("top2");
                }
                for (let i = 0; i < block15.length; i++) {
                    block15[i].classList.add("op");
                }
                for (let i = 0; i < block16.length; i++) {
                    block16[i].classList.add("left");
                }
                for (let i = 0; i < block17.length; i++) {
                    block17[i].classList.add("right");
                }
                c = true;
            }
        }
        if (!m) {
            if (pageYOffset >= 8900) {
                for (let i = 0; i < block18.length; i++) {
                    block18[i].classList.add("left");
                }
                m = true;
            }
        }
    } else if (window.innerWidth > 350 && window.innerWidth < 500) {
        if (!q) {
            if (pageYOffset >= 1) {
                habr.classList.add("op");
                q = true;
            }
        }
        if (!w) {
            if (pageYOffset >= 200) {
                NB.classList.add("left");
                w = true;
            }
        }
        if (!p) {
            if (pageYOffset >= 2100) {
                NB1.classList.add("left");
                p = true;
            }
        }
        if (!r) {
            if (pageYOffset >= 1200) {
                for (let i = 0; i < rI.length; i++) {
                    rI[i].classList.add("left");
                }
                for (let i = 0; i < right.length; i++) {
                    right[i].classList.add("right");
                }
                for (let i = 0; i < block.length; i++) {
                    block[i].classList.add("block");
                }
                r = true;
            }
        }
        if (!o) {
            if (pageYOffset >= 1700) {
                for (let i = 0; i < block2.length; i++) {
                    block2[i].classList.add("block");
                }
                o = true;
            }
        }
        if (!s) {
            if (pageYOffset >= 2300) {
                for (let i = 0; i < block3.length; i++) {
                    block3[i].classList.add("left");
                }
                for (let i = 0; i < block4.length; i++) {
                    block4[i].classList.add("top1");
                }
                for (let i = 0; i < block5.length; i++) {
                    block5[i].classList.add("top2");
                }
                s = true;
            }
        }
        if (!u) {
            if (pageYOffset >= 1700) {
                for (let i = 0; i < block1.length; i++) {
                    block1[i].classList.add("right");
                }
                u = true;
            }
        }
        if (!f) {
            if (pageYOffset >= 2800) {
                for (let i = 0; i < block6.length; i++) {
                    block6[i].classList.add("left");
                }
                for (let i = 0; i < block7.length; i++) {
                    block7[i].classList.add("right");
                }
                f = true;
            }
        }
        if (!h) {
            if (pageYOffset >= 4200) {
                for (let i = 0; i < block8.length; i++) {
                    block8[i].classList.add("left");
                }
                h = true;
            }
        }
        if (!j) {
            if (pageYOffset >= 4800) {
                for (let i = 0; i < block9.length; i++) {
                    block9[i].classList.add("left");
                }
                for (let i = 0; i < block10.length; i++) {
                    block10[i].classList.add("bottom1");
                }
                j = true;
            }
        }
        if (!l) {
            if (pageYOffset >= 6500) {
                for (let i = 0; i < block11.length; i++) {
                    block11[i].classList.add("left");

                }
                l = true;
            }
        }
        if (!z) {
            if (pageYOffset >= 7100) {
                for (let i = 0; i < block12.length; i++) {
                    block12[i].classList.add("left");
                }
                for (let i = 0; i < block13.length; i++) {
                    block13[i].classList.add("left1");
                }
                z = true;
            }
        }
        if (!c) {
            if (pageYOffset >= 8400) {
                for (let i = 0; i < block14.length; i++) {
                    block14[i].classList.add("top2");
                }
                for (let i = 0; i < block15.length; i++) {
                    block15[i].classList.add("op");
                }
                for (let i = 0; i < block16.length; i++) {
                    block16[i].classList.add("left");
                }
                for (let i = 0; i < block17.length; i++) {
                    block17[i].classList.add("right");
                }
                c = true;
            }
        }
        if (!m) {
            if (pageYOffset >= 8900) {
                for (let i = 0; i < block18.length; i++) {
                    block18[i].classList.add("left");
                }
                m = true;
            }
        }
    }
});

function parallax1() {
    var s = document.getElementById("floater1");
    var yPos = 0 - window.pageYOffset/3;
    s.style.top = 2700 + yPos + "px";
}
function parallax2() {
    var s = document.getElementById("floater2");
    var yPos = 0 - window.pageYOffset/5;
    s.style.top = -1600 - yPos + "px";
}
function parallax3() {
    var s = document.getElementById("floater3");
    var yPos = 0 - window.pageYOffset/5;
    s.style.top = 1800 + yPos + "px";
}

window.addEventListener("scroll", function(){
    parallax1();
    parallax2();
    parallax3()
});































