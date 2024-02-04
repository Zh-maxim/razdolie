window.onload = () => {
    let svgLoader = document.querySelector(".svgLoader")
    let opacityDisapear = () => {
        svgLoader.style.transition = "0.5s"
        svgLoader.style.opacity = 0
    }
    let loaderDistract = () => {
        svgLoader.style.display = "none"
    }
    setTimeout(opacityDisapear, 2000)
    setTimeout(loaderDistract, 2500)
}

let slider = document.querySelector(".sliderDown")
let counter = 0
let cont1 = document.querySelector(".cont1")
let cont2 = document.querySelector(".cont2")
let cont3 = document.querySelector(".cont3")
let timerSlider = 3000
let toSlide = () => {
    counter = counter - 800
    if (counter == -2400) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
        counter = 0
    }
    if (counter == 0) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont1.classList.add('redCont')
    }
    if (counter == -800) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont2.classList.add('redCont')
    }
    if (counter == -1600) {
        cont1.classList.remove('redCont')
        cont2.classList.remove('redCont')
        cont3.classList.remove('redCont')
        cont3.classList.add('redCont')
    }
    slider.style.left = counter + 'px'
}
let setik = setInterval(toSlide, timerSlider)
cont1.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.remove('redCont')
    cont1.classList.add('redCont')
    clearInterval(setik)
    counter = 0
    slider.style.left = counter + 'px'
}
cont2.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.add('redCont')
    cont3.classList.remove('redCont')
    clearInterval(setik)
    counter = -800
    slider.style.left = counter + 'px'
}
cont3.onclick = () => {
    cont1.classList.remove('redCont')
    cont2.classList.remove('redCont')
    cont3.classList.add('redCont')
    clearInterval(setik)
    counter = -1600
    slider.style.left = counter + 'px'
}
let brnJourneyTour = document.querySelector('.brnJourneyTour')
let brnJourneyCult = document.querySelector('.brnJourneyCult')
let brnJourneyEco = document.querySelector('.brnJourneyEco')
let generalOffersUp = document.querySelector('.generalOffersUp')
let cultOffersUp = document.querySelector('.cultOffersUp')
let ecoOffersUp = document.querySelector('.ecoOffersUp')
brnJourneyCult.onclick = () => {
    brnJourneyCult.classList.add('redTrvl')
    brnJourneyEco.classList.remove('redTrvl')
    brnJourneyTour.classList.add('greyTrvl')
    generalOffersUp.classList.remove('generalOffersToggleUp')
    cultOffersUp.classList.add('generalOffersToggleUp')
    ecoOffersUp.classList.remove('generalOffersToggleUp')
    generalOffersUp.style.display = "none"
}
brnJourneyEco.onclick = () => {
    brnJourneyCult.classList.remove('redTrvl')
    brnJourneyEco.classList.add('redTrvl')
    brnJourneyTour.classList.add('greyTrvl')
    generalOffersUp.classList.remove('generalOffersToggleUp')
    cultOffersUp.classList.remove('generalOffersToggleUp')
    ecoOffersUp.classList.add('generalOffersToggleUp')
    generalOffersUp.style.display = "none"
}
brnJourneyTour.onclick = () => {
    brnJourneyCult.classList.remove('redTrvl')
    brnJourneyEco.classList.remove('redTrvl')
    brnJourneyTour.classList.remove('greyTrvl')
    generalOffersUp.classList.add('generalOffersToggleUp')
    cultOffersUp.classList.remove('generalOffersToggleUp')
    ecoOffersUp.classList.remove('generalOffersToggleUp')
}
let btnToUp = document.querySelector('.btnToUp')
scrollCount = window.scrollY;
if (scrollCount == 0) {
    btnToUp.style.display = 'none'
}
addEventListener("scroll", () => {
    scrollCount = window.scrollY;
    if (scrollCount == 0) {
        btnToUp.style.display = 'none'
    }
    else {
        btnToUp.style.display = "flex"
    }
})
btnToUp.onclick = () => {
    window.scrollTo(0, 0);
}
let infoBtnToggles = document.getElementsByClassName("infoBtnToggles")
let NameOfArticle = document.querySelector('.NameOfArticle')
let paragraphOfCity = document.getElementsByClassName('paragraphOfCity')
let NameOfPlace = document.querySelector('.NameOfPlace')
let picOfPlace = document.getElementsByClassName('picOfPlace')
infoBtnToggles[1].onclick = () => {
    NameOfArticle.innerHTML = "Байкал"
    paragraphOfCity[0].innerHTML = "Длина озера 636 км. Ширина в разных местах изменяется от 24 до 79 км. Это самый крупный пресный водоём по площади. Озеро является самым глубоким в мире. Максимальная его глубина 1642 м. Средняя глубина 744,4 м. Это озеро содержит 19% всей пресной воды, содержащейся в озёрах мира. В Байкал впадает 336 рек, а вытекает только одна – Ангара."
    paragraphOfCity[1].innerHTML = "Учитывая, что протяженность озера с севера на юг превышает 600 км и в самой широкой части – 81 км, за одну поездку увидеть все красоты и достопримечательности вряд ли получиться. Но вы просто обязаны посетить популярные места отдыха на Байкале: Листвянка, Ольхон, Малое море."
    NameOfPlace.innerHTML = "БА<br>ЙК<br>АЛ"
    picOfPlace[0].classList.remove('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[0].onclick = () => {
    NameOfArticle.innerHTML = "Горный Алтай"
    paragraphOfCity[0].innerHTML = "В зимние месяцы туристов ждут горнолыжные курорты, поездки на снегоходах и лошадях, рыбалка, охота, экскурсии к озерам и застывшим водопадам. Горный Алтай — это красивый курортный край. Ежегодно количество туристов растёт, многие приезжают уже не первый раз. Тем не менее, большинство знакомы с летним Алтаем. Зимний же отдых значительно отличается."
    paragraphOfCity[1].innerHTML = "Алтайские горы — это самая настоящая жемчужина Сибири. Они огромны: с северо- запада до юго-востока простираются на 2000 километров. Вам обязательно стоит посетить популярные места: перевал Чике-Таман, место слияния Чуи и Катуни, Катунские террасы."
    NameOfPlace.innerHTML = "АЛ<br>Т<br>АЙ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.remove('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[2].onclick = () => {
    NameOfArticle.innerHTML = "Карелия"
    paragraphOfCity[0].innerHTML = "Если вы не боитесь долгих зимних прогулок, любите снегоходы и заснеженные пейзажи, при этом предпочитаете не сильные морозы, а мягкий климат, то Карелия встретит вас объятьями с начала декабря по конец марта. И, в отличие от летней поездки в этот регион, зимой его красотами можно наслаждаться без насекомых."
    paragraphOfCity[1].innerHTML = "Зимняя Карелия — это настоящая сказка. Это белые сугробы и свежий мороз, это пушистые ели и замерзшие водопады, это активный отдых и вкусная кухня. Вы обязаны посетить: городище Паасо, горный парк Рускеала, незамерзающий водопад Кивач."
    NameOfPlace.innerHTML = "КА<br>РЕЛ<br>ИЯ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.remove('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[3].onclick = () => {
    NameOfArticle.innerHTML = "Санкт-Петербург"
    paragraphOfCity[0].innerHTML = "Петербург — северная столица России, которую больше 300 лет назад основал Пётр Первый. Сюда едут за историей и архитектурой XVIII-XX века, ради прогулок по речным каналам и разводных мостов. Город привлекает массу туристов, которые с удовольствием возвращаются сюда и всегда находят что-то новое."
    paragraphOfCity[1].innerHTML = "Зимний Санкт-Петербург похож на ожившую сказку: уже после 16:00 он утопает в мерцающих огоньках и волшебной подсветке, почти на каждом углу открываются киоски с горячим кофе и чаем, а в самых модных арт-пространствах работают открытые катки. Места для культурного обогащения, которые вы посетите: Эрмитаж (Зимний Дворец), Царское село, Охта парк."
    NameOfPlace.innerHTML = "ПЕТ<br>ЕРБ<br>УРГ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.remove('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[4].onclick = () => {
    NameOfArticle.innerHTML = "Республика Коми"
    paragraphOfCity[0].innerHTML = "Наступление зимы означает, что пора посетить северную часть России, заняться активным отдыхом, рыболовством, охотой, покататься на собачьих упряжках и т.д. Республика Коми сочетает в себе природную красоту, культуру и традиции, также является подходящим местом для зимнего туризма."
    paragraphOfCity[1].innerHTML = "Если вы думаете, что зима — это скучно, холодно и серо, то вы ошибаетесь. Коми уникальна своей природой и традициями. И в это время года они раскрываются с совершенно другой стороны. Мы составили подборку самых интересных туристических мест республики, которые можно посетить зимой. Маньпупунер, Кадамскому озеро, Финно-угорский регион. Все эти места считаются наиболее актуальными в зимнее время года."
    NameOfPlace.innerHTML = "К<br>ОМ<br>И"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.remove('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[5].onclick = () => {
    NameOfArticle.innerHTML = "Астраханская область"
    paragraphOfCity[0].innerHTML = "Чёрная икра, арбузы и рыба — вот с чем обычно ассоциируется Астрахань. Даже немного обидно, ведь это один из наиболее самобытных городов юга России. У Астрахани богатая история, здесь много старинной архитектуры и удивительных мест, способных впечатлить даже бывалого путешественника. Узнавать Астрахань лучше всего через пешие прогулки по центру города. От кремля до набережной, от роскошных купеческих особняков у Волги до деревянного квартала Татарской слободы, от рыбного рынка до ресторанов местной кухни."
    paragraphOfCity[1].innerHTML = "Астрахань — город небольшой, но очень интересный. Найти Астрахань на карте России очень легко — это точка, где Волга распадается на множество рукавов перед впадением в Каспийское море. Вот несколько важных мест, которые стоит посетить: Астраханский кремль, Краеведческий музей, набережная."
    NameOfPlace.innerHTML = "АСТ<br>РАХ<br>АНЬ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.remove('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[6].onclick = () => {
    NameOfArticle.innerHTML = "Забайкалье"
    paragraphOfCity[0].innerHTML = "Забайкальский край славится дивной природой и минеральными источниками, по количеству которых после Кавказа он занимает второе место. Заснеженные горные вершины, вековая тайга, прозрачные озера и горные реки восхищают и очаровывают человека, впервые попавшего на эту землю. Забайкальский край – территория, на которой разные народы оставили свои вековые следы в виде архитектурных и археологических памятников, интересных обычаев, верований и обрядов. Здесь много памятников бурятской национальной культуры."
    paragraphOfCity[1].innerHTML = "Обязательно стоит посетить Алханайский национальный парк – единственное в России место, где природные достопримечательности гармонично соседствуют со священными объектами буддизма. А также Даурский заповедник, Бутинский дворец, Чарские пески."
    NameOfPlace.innerHTML = "ЗАБ<br>АЙКА<br>ЛЬЕ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.remove('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[7].onclick = () => {
    NameOfArticle.innerHTML = "Якутия"
    paragraphOfCity[0].innerHTML = "Якутия – дикий и неповторимый по своей красоте северный край. Это край резких контрастов. Край двух сезонов. Студеная зима очень быстро переходит в жаркое лето и наоборот, а полутона — весна или осень — здесь попросту отсутствуют. Якутия богата своей неповторимой историей, неистощимыми природными ископаемыми, уникальными ландшафтами. Где-то по бескрайней тундре неторопливо бредут тени давно вымерших мамонтов, по берегам могучей Лены стоят величественные Ленские столбы, а по соседству с многовековой мерзлотой раскинулась настоящая пустыня."
    paragraphOfCity[1].innerHTML = "В Якутии очень много мест, которые стоит посетить: полюс холода Оймякон, Ленские столбы, Кимберлитовая трубка «Мир», Синские столбы, горы Кисилях."
    NameOfPlace.innerHTML = "ЯК<br>УТ<br>ИЯ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.remove('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[8].onclick = () => {
    NameOfArticle.innerHTML = "Архангельская область"
    paragraphOfCity[0].innerHTML = "Архангельск — это удивительный город. Архангельск до сих пор хранит многочисленные памятники истории, напоминающие о давно ушедших эпохах. Старинные дома, храмы, монастыри, музеи, памятники и даже крепости — здесь есть весь спектр исторических достопримечательностей, которыми должен обладать любой уважающий себя город с богатым прошлым. Похвастаться Архангельск и его окрестности могут и удивительной северной природой, которая веками очаровывала людей."
    paragraphOfCity[1].innerHTML = "Архангельск — город на севере России в тридцати километрах от побережья Белого моря. Эта близость чувствуется во всём — в суровых очертаниях кораблей у причала Северной Двины, в душевной открытости людей, которых называют поморами. Популярные места: острова на Северной Двине, Новодвинская крепость, музей деревянного зодчества «Малые Корелы»."
    NameOfPlace.innerHTML = "АРХА<br>НГЕЛ<br>ЬСК"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.remove('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[9].onclick = () => {
    NameOfArticle.innerHTML = "Улан-Удэ"
    paragraphOfCity[0].innerHTML = "Улан-Удэ — столица солнечной Бурятии и один из крупнейших центров буддизма в России. Это не самая популярная туристическая локация, многие путешественники оказываются здесь проездом, например по пути на Байкал. Размеры Улан-Удэ небольшие, поэтому познакомиться с бурятской столицей можно даже за один день. В городе расположено много символичных памятников, красивый буддийский монастырь и весьма необычная скульптура Ленина."
    paragraphOfCity[1].innerHTML = "Улан-Удэ — это невероятно красивый, солнечный и, что самое прекрасное, многонациональный город. Благодаря этому здесь сплелись традиции и обычаи разных народов, но превалирует культура бурятская. Популярные места: вято-Одигитриевский кафедральный собор, памятник Гэсэру, Величественная «Мать Бурятия».";
    NameOfPlace.innerHTML = "УЛАН<br><br>УДЭ"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.remove('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[10].onclick = () => {
    NameOfArticle.innerHTML = "Калининград"
    paragraphOfCity[0].innerHTML = "Калининград — город на западе России, центр одноимённой области. Сюда едут ради желания почувствовать себя хоть одной ногой в Европе, особенно в плане климата, готической архитектуры и кухни. До 1946 года город был известен как Кенигсберг и принадлежал Германии, но по итогам Второй мировой войны вошел в состав СССР, а затем и России. Это лишь малый отрезок богатой истории Калининграда, который появился в 1255 году."
    paragraphOfCity[1].innerHTML = "Поездка по Калининградской области — настоящее путешествие во времени: если внимательно смотреть по сторонам, подмечая приметы разных эпох, то непростая история этих мест начинает оживать. Её первыми героями были прусские племена, о владычестве которых напоминают сегодня древние курганы и необхватные дубы в некогда священных рощах. Популярные места: крепость «Кенигсберг», Озерск, замок Шаакен, музей Мирового океана.";
    NameOfPlace.innerHTML = "КАЛИ<br>НИН<br>ГРАД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.remove('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[11].onclick = () => {
    NameOfArticle.innerHTML = "Новгород"
    paragraphOfCity[0].innerHTML = "Живописные земли на северо-западе европейской части нашей страны — один из древнейших регионов России. Туристы приезжают в Новгородскую область полюбоваться лесами, красивыми озерами, старинными храмами и монастырями. Немало интересных мест ждут путешественников в областном центре — Великом Новгороде, на бальнеологическом курорте Старая Русса, в исторических городах Боровичи, Чудово, Холм, Малая Вишера, на просторах Валдайской возвышенности и в Валдайском национальном парке."
    paragraphOfCity[1].innerHTML = "Новгородская область – регион России, богатый на исторические достопримечательности. Свидетельства прошлого можно встретить в ряде поселений, но особенно много их в Великом Новгороде – ключевом городе для Руси. Популярные места: Новгородский детинец, Софийский собор, озеро Селигер.";
    NameOfPlace.innerHTML = "НОВ<br>ГО<br>РОД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.remove('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[12].onclick = () => {
    NameOfArticle.innerHTML = "Камчатский край"
    paragraphOfCity[0].innerHTML = "Практически на самом краю России раскинулся камчатский полуостров, омываемый с одной стороны Охотским морем, а с другой водами Тихого океана. Камчатка — это предмет национальной гордости, ведь на её территории сосредоточено всё многообразие северной природы. Густые леса, кристально чистые озера, стремительные реки и, что самое главное, вулканы. Камчатка входит в состав Тихоокеанского вулканического огненного кольца, так как на её территории существует больше 300 вулканов: большинство из них время от времени проявляют активность."
    paragraphOfCity[1].innerHTML = "Камчатка у туристов прежде всего ассоциируется с природными особенностями. В этом направлении у края огромное разнообразие: водопады, сопки, вулканы, парки, горячие источники и многое другое. Они разбросаны по всему региону, так что осмотреть всё за одну поездку будет непросто. Однако, вот самые популярные места: олина Гейзеров, командорские острова, ключевская сопка.";
    NameOfPlace.innerHTML = "КАМ<br>ЧАТ<br>КА"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.remove('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[13].onclick = () => {
    NameOfArticle.innerHTML = "Волгоградская область"
    paragraphOfCity[0].innerHTML = "Бескрайние степи и солёные озёра, меловые горы на месте доисторического моря, стометровые скальные останцы и даже своя Волжская Швейцария — всё это необычайно живописная природа Волгоградской области. Отдых в регионе придётся по душе не только любителям экотуризма, но и поклонникам малых городов с красивой архитектурой и необычными музеями, например, казачьего городка под открытым небом."
    paragraphOfCity[1].innerHTML = "Край широких рек и соленых озер, необъятных степей и заповедных лесов, регион с богатой историей. Волгоградская область — один из самых интересных, при этом один из самых неочевидных вариантов провести отпуск на юге. Популярные места: озеро Эльтон, природный парк «Донской», природный парк «Щербаковский».";
    NameOfPlace.innerHTML = "ВОЛ<br>ГОГ<br>РАД"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.remove('disabledPic')
    picOfPlace[14].classList.add('disabledPic')
}
infoBtnToggles[14].onclick = () => {
    NameOfArticle.innerHTML = "Остров Сахалин"
    paragraphOfCity[0].innerHTML = "Сахалин — место для тех, кто хочет почувствовать себя первооткрывателем на краю света. Главное на этом далеком острове — почти нетронутая человеком природа: горы, мысы, бухты, озера, водопады, Охотское и Японское моря. Куда ни посмотри — пейзажи завораживают. Исследовать Сахалин можно бесконечно, каждый раз открывая для себя новые достопримечательности. И все это без шума и излишков цивилизации."
    paragraphOfCity[1].innerHTML = "Далекий и загадочный остров. Край озер, источников и вулканов. Таким кажется Сахалин большинству туристов. Поэтому, как магнитом тянет сюда все больше людей: своими глазами увидеть живописную природу и прикоснуться к истории острова.";
    NameOfPlace.innerHTML = "СА<br>ХА<br>ЛИН"
    picOfPlace[0].classList.add('disabledPic')
    picOfPlace[1].classList.add('disabledPic')
    picOfPlace[2].classList.add('disabledPic')
    picOfPlace[3].classList.add('disabledPic')
    picOfPlace[4].classList.add('disabledPic')
    picOfPlace[5].classList.add('disabledPic')
    picOfPlace[6].classList.add('disabledPic')
    picOfPlace[7].classList.add('disabledPic')
    picOfPlace[8].classList.add('disabledPic')
    picOfPlace[9].classList.add('disabledPic')
    picOfPlace[10].classList.add('disabledPic')
    picOfPlace[11].classList.add('disabledPic')
    picOfPlace[12].classList.add('disabledPic')
    picOfPlace[13].classList.add('disabledPic')
    picOfPlace[14].classList.remove('disabledPic')
}