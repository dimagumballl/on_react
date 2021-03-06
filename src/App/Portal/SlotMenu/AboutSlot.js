const Bluzka=true
const VerhOdezda=true
const Bruki=true
const Obuv=true
const Platty=true
const Sumka=true
const Dzins=true
const Vyzanoe=true

const AboutSlot=[
    {
        id:1, 
        name:"Блузка",
        description:"Стильная рубашка свободного кроя из поплина со спущенной линией плечевого шва. Объёмный рукав с защипами разбавляет классический образ. Состав: 70% коттон, 20% вискоза, 10% полиэстер.",
        price:549,
        image:["/Item/bl1/belaya-rubashka-so-spushchennoy-liniey-plech-44065-1.jpg"],
        Bluzka
    },
    {
        id:26, 
        name:"Курточка",
        description:"Длинная зимняя куртка с молнией по всей длине. Верхняя часть изделия выполнена из плащевки, подкладка – из нейлона. Съемный капюшон дополнен искусственным мехом на пуговицах. Прорезные карманы на полочке декорированы зеркальным украшением и шнурками с бусинами. Утеплитель – биопух. Изделие рассчитано на температурный режим до -15°С.",
        price:1549,
        image:["/Item/vr2/vr (1).jpg","/Item/vr2/vr (2).jpg","/Item/vr2/vr (3).jpg"],
        VerhOdezda
    },
    
    
    {
        id:2, 
        name:"Блузка",
        description:"Повседневная блузка прямого кроя из струящегося софта. Модель дополнена планкой и накладными карманами из искусственной кожи. Отлично сочетается с юбкой или брюками.        ",
        price:499,
        image:["/Item/bl2/bl (1).jpg","/Item/bl2/bl (2).jpg"],
        Bluzka
    },
    {
        id:6, 
        name:"Брюки",
        description:"Повседневная блузка прямого кроя из струящегося софта. Модель дополнена планкой и накладными карманами из искусственной кожи. Отлично сочетается с юбкой или брюками.",
        price:499,
        image:["/Item/br2/br.jpg"],
        Bruki
    },
    {
        id:7, 
        name:"Брюки",
        description:"Практичные брюки прямого кроя из тиара в клетку. Модель с высокой посадкой и карманами по бокам. Застёгиваются на молнию и пуговицу. Пояс в тон в комплекте.",
        price:899,
        image:["/Item/br3/br.jpg"],
        Bruki
    },
    {
        id:16, 
        name:"Обувь",
        price:1995,
        image:["/Item/ob4/ob.jpg"],
        Obuv
    },
    {
        id:17, 
        name:"Плаття",
        description:"Стильное платье приталенного силуэта из вельвета.Изделие с V-образным вырезом горловины и крупными накладными карманами с клапаном.Застегивается на молнию сзади.Пояс в комплекте. Отлично подойдёт обладательницам фигуры типа песочные часы и прямоугольни.",
        price:1840,
        image:["/Item/pl1/pl (1).jpg","/Item/pl1/pl (2).jpg","/Item/pl1/pl (3).jpg"],
        Platty
    },
    {
        id:10, 
        name:"Джинсы",
        description:"Синие джинсы-скинни с посадкой на талии, декорированы стразами спереди.",
        price:879,
        image:["/Item/dz2/dz.jpg"],
        Dzins
    },
    {
        id:30, 
        name:"Свитер",
        description:"Уютный джемпер со спущенной линией плечевого шва. Модель с объёмными рукавами отлично сочетается как с брюками так и с юбкой.",
        price:595,
        image:["/Item/vz2/vz (1).jpg","/Item/vz2/vz (2).jpg","/Item/vz2/vz (3).jpg"],
        Vyzanoe
    },
    {
        id:3, 
        name:"Блузка",
        description:"Лёгкая блузка свободного кроя из летящего шифона. Модель с длинным рукавом, застегивается сзади на две пуговицы.        ",
        price:599,
        image:["/Item/bl3/bl.jpg"],
        Bluzka
    },
    {
        id:11, 
        name:"Джинсы",
        description:"Классические джинсы прямого кроя с потёртостями. Сзади на поясе кожаная вставка. Состав: 98% коттон, 2% лайкра.",
        price:590,
        image:["/Item/dz3/dz.jpg"],
        Dzins
    },
    {
        id:4, 
        name:"Блузка",
        description:"",
        price:599,
        image:["/Item/bl4/bl (1).jpg","/Item/bl4/bl (2).jpg","/Item/bl4/bl (3).jpg"],
        Bluzka
    },
    {
        id:5, 
        name:"Брюки",
        description:"Универсальные брюки прямого кроя из костюмной ткани. Для удобства в носке предусмотрены прорезные карманы в боковых швах. Изделие застегивается на молнию сбоку. Отлично сочетаются с кофтой или блузкой.",
        price:699,
        image:["/Item/br1/br (1).jpg","/Item/br1/br (2).jpg"],
        Bruki
    },
    
    {
        id:14, 
        name:"Обувь",
        price:1895,
        image:["/Item/ob2/ob.jpg"],
        Obuv
    },
    {
        id:8, 
        name:"Брюки",
        description:"Укороченные ,БРЮКИ с высокой посадкой. Состав: 97% коттон, 3% лайкра.",
        price:595,
        image:["/Item/br4/br.jpg"],
        Bruki
    },
    {
        id:9, 
        name:"Джинсы",
        description:"Графитово-черные джинсы-скинни с высокой посадкой, дополнены россыпью страз в тон изделию.",
        price:799,
        image:["/Item/dz1/dz.jpg"],
        Dzins
    },
    {
        id:15, 
        name:"Обувь",
        price:1840,
        image:["/Item/ob3/ob.jpg"],
        Obuv
    },
    
    {
        id:18, 
        name:"Плаття",
        description:"Атласное платье с расклешенной юбкой и лифом на фиксированный запах. V-образный вырез горловины визуально вытягивает силуэт. Широкие рукава собраны резинкой на манжетах. Элегантная модель дополнена поясом из основного материла с пряжкой. Идеально подойдет обладательницам типов фигуры «прямоугольник», «груша», «песочные часы», «перевернутый треугольник».",
        price:999,
        image:["/Item/pl2/pl (1).jpg","/Item/pl2/pl (2).jpg"],
        Platty
    },
    {
        id:19, 
        name:"Плаття",
        description:"Закрытое платье-футляр из костюмной ткани. Изделие с рукавом ¾, дополнено прорезными карманами спереди. Застегивается на молнию сзади. Отлично подойдёт обладательницам фигуры типа песочные часы и прямоугольник.",
        price:799,
        image:["/Item/pl3/pl (1).jpg","/Item/pl3/pl (2).jpg"],
        Platty
    },
    {
        id:12, 
        name:"Джинсы",
        description:"Черные джинсы-скинни с посадкой на талии. Модель с необработанными краями и россыпью страз.",
        price:799,
        Dzins
        
    },
    {
        id:13, 
        name:"Обувь",
        price:2495,
        image:["/Item/ob1/ob.jpg"],
        Obuv
    },
    
    {
        id:22, 
        name:"Сумка",
        price:999,
        image:["/Item/sm2/sm.jpg"],
        Sumka
    },
    {
        id:23, 
        name:"Сумка",
        price:700,
        image:["/Item/sm3/sm.jpg"],
        Sumka
    },
    {
        id:24, 
        name:"Сумка",
        price:880,
        image:["/Item/sm4/sm.jpg"],
        Sumka
    },
    {
        id:25, 
        name:"Курточка",
        description:"Длинная зимняя куртка с молнией по всей длине. Верхняя часть изделия выполнена из плащевки, подкладка – из нейлона. Съемный капюшон дополнен искусственным мехом на пуговицах. Прорезные карманы на полочке декорированы зеркальным украшением и шнурками с бусинами. Утеплитель – биопух. Изделие рассчитано на температурный режим до -15°С.",
        price:2349,
        image:["/Item/vr1/vr (1).jpg","/Item/vr1/vr (2).jpg"],
        VerhOdezda
    },
    {
        id:27, 
        name:"Курточка",
        description:"Двусторонняя стеганая куртка из водонепроницаемой плащевки «Lacce». Модель с прорезными карманами на полочке и объёмным капюшоном. Застегивается изделие на кнопки с двух сторон по всей длине. Утеплитель – силикон 200. Рассчитана на температурный режим до -15°С.",
        price:1795,
        image:["/Item/vr3/vr (1).jpg","/Item/vr3/vr (2).jpg","/Item/vr3/vr (3).jpg"],
        VerhOdezda
    },
    {
        id:28, 
        name:"Курточка",
        description:"",
        price:1999,
        image:["/Item/vr4/vr (1).jpg","/Item/vr4/vr (2).jpg"],
        VerhOdezda
    },
    {
        id:29, 
        name:"Свитер",
        description:"Теплый свитер, выполненный из мягкой пряжи Mars. Изюминка модели – объёмный рукав-буф. Хорошо сочетается с брюками или юбкой.",
        price:749,
        image:["/Item/vz1/vz (1).jpg","/Item/vz1/vz (2).jpg"],
        Vyzanoe
    },
    {
        id:20, 
        name:"Плаття",
        description:"Расклешённое платье из приятного к телу трикотажа. Изделие с воротником-стойкой и рукавом-реглан. Пояс с пряжкой в комплекте. Отлично подойдёт обладательницам фигуры типа песочные часы и прямоугольник.",
        price:1149,
        image:["/Item/pl4/pl.jpg"],
        Platty
    },
    {
        id:21, 
        name:"Сумка",
        price:840,
        image:["/Item/sm1/sm (1).jpg","/Item/sm1/sm (2).jpg"],
        Sumka
    },
    {
        id:31, 
        name:"Свитер",
        description:"Тёплый свитер из мягкой пряжи с высоким воротником. Изюминка модели - флористический принт.",
        price:779,
        image:["/Item/vz3/vz (1).jpg","/Item/vz3/vz (2).jpg","/Item/vz3/vz (3).jpg"],
        Vyzanoe
    },
    {
        id:32, 
        name:"Свитер",
        description:"Удлиненный свитер вязки рубчик с разрезами по бокам. Изделие дополнено узором «коса» по полочке.",
        price:749,
        image:["/Item/vz4/vz.jpg"],
        Vyzanoe
    },
]
export default AboutSlot