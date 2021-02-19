import { IPageData } from "../../interfaces/ISite"

const sushi: IPageData = {
  companyName: "HAPPYSMILE",
  names: [
    "АППАРАТ ДЛЯ ПРИГОТОВЛЕНИЯ СУШИ И РОЛЛОВ В ДОМАШНИХ УСЛОВИЯХ",
    "НАСЛАЖДАЙТЕСЬ ВКУСНЕЙШИМИ ДОМАШНИМИ РОЛЛАМИ",
  ],
  phoneNumber: "+38 (044) 333-90-48",
  mainImages: ["https://picsum.photos/id/51/800/900"],
  goodsLeft: "Немного",
  slang: "Приготовить роллы за 3 минуты? Это реально!",
  descriptions: [
    "Полакомиться вкусными суши и роллами любят многие. Но как часто вам предоставляется такая возможность? Дойти до любимого суши-ресторана иногда не хватает времени, а заказывать доставку из ближайшего к дому или офису заведения бывает попросту рискованно – неизвестно, какого качества предлагаемая там продукция.",
    "Выход прост – готовить суши и роллы дома из качественный и свежих продуктов.",
    "Но внешний вид таких самодельных изделий часто получается весьма прискорбным:",
    "- содержит  слишком большое количество риса или  мало начинки;",
    "- имеет недостаточную плотность и разваливается.",
    "С сушимейкером HappySmile вы гарантированно избавитесь от этих проблем и буквально за 2-3 минуты приготовите красивые и вкусные суши и роллы с идеальным количеством риса и начинки.",
  ],
  advantages: [
    "100% идеальный результат",
    "Безупречный вкус и гарантированное качество",
    "Экономия сил и времени",
  ],
  price: {
    active: 200,
    prev: 600,
    procent: -50,
    valute: "грн.",
  },
  video: {
    img: "https://happysmile.ua/data/uploads/diozator_dlya_sushi_video.jpg",
    url: "https://www.youtube.com/embed/TFKa4liHkaE",
  },
  descriptionContainer: {
    title: "Приготовить роллы за 3 минуты? Это реально!",
    img: "https://picsum.photos/id/237/480/400",
    text:
      "Полакомиться вкусными суши и роллами любят многие. Но как часто вам предоставляется такая возможность? Дойти до любимого суши-ресторана иногда не хватает времени, а заказывать доставку из ближайшего к дому или офису заведения бывает попросту рискованно – неизвестно, какого качества предлагаемая там продукция.\n\nВыход прост – готовить суши и роллы дома из качественный и свежих продуктов.\n\nНо внешний вид таких самодельных изделий часто получается весьма прискорбным:\n\n- содержит слишком большое количество риса или мало начинки;\n\n- имеет недостаточную плотность и разваливается.\n\nС сушимейкером HappySmile вы гарантированно избавитесь от этих проблем и буквально за 2-3 минуты приготовите красивые и вкусные суши и роллы с идеальным количеством риса и начинки.",
  },
  comparison: {
    title:
      "Становитесь виртуозом в приготовлении суши и роллов с сушимейкером HappySmile!",
    comparisons: [
      {
        bad: {
          img: "https://picsum.photos/id/50/480/400",
          description: "Внешний вид роллов оставляет желать лучшего",
        },
        nice: {
          img: "https://picsum.photos/id/49/480/400",
          description:
            "Безупречный и аппетитный внешний вид с идеальным количеством риса и начинки",
        },
      },
      {
        bad: {
          img: "https://picsum.photos/id/51/480/400",
          description: "Обычные самодельные роллы рассыпаются и разваливаются на ходу",
        },
        nice: {
          img: "https://picsum.photos/id/52/480/400",
          description:
            "С помощью аппарата HappySmile получаются плотные и аккуратные рулетики",
        },
      },
      {
        bad: {
          img: "https://picsum.photos/id/53/480/400",
          description:
            "Магазинные роллы содержат мало начинки и нет гарантии, что для их приготовления использовались свежие и качественные продукты",
        },
        nice: {
          img: "https://picsum.photos/id/54/480/400",
          description:
            "Домашние роллы, приготовленные из строго отобранных качественных продуктов с помощью девайса HappySmile, безупречны по вкусу",
        },
      },
    ],
  },
  instruction: {
    title: "Как им <boild>пользоваться?</boild>",
    steps: [
      {
        img: "https://picsum.photos/id/7/750/900",
        description:
          "Наполните каждую половинку прибора вареным рисом, а затем добавьте начинку.",
      },
      {
        img: "https://picsum.photos/id/8/750/900",
        description: "Защелкните две половинки аппарата и закройте замочки.",
      },
      {
        img: "https://picsum.photos/id/9/900/900",
        description: "С помощью поршня медленно выдавите ваш идеально ровный ролл.",
      },
    ],
  },
  feedbacks: {
    title: "Отзывы о <boild>товаре</boild>",
    data: [
      {
        img: "https://picsum.photos/id/10/900/900",
        name: "Юлия Ковшик",
        city: "Киев",
        yearsOld: "29 лет",
        feedback:
          "Обожаю роллы и суши! Готова есть их ежедневно! Но далеко не в каждом ресторане можно попробовать по-настоящему вкусные суши да и удовольствие это не из дешевых получается. Когда муж подарил этот суши-мейкер – была просто на седьмом небе от счастья. Теперь сама делаю суши и роллы с разными начинками. Легко, просто и вкусно и гораздо дешевле, чем ресторанах!",
      },
      {
        img: "https://picsum.photos/id/11/900/900",
        name: "Уляна Соловій",
        city: "Львів",
        yearsOld: "35 лет",
        feedback:
          "Завжди прохолодно відносилася до всіляких суш – боюся я сирої риби, але коли мені подарували цей чудовий девайс, зрозуміла, що їх можна з чим завгодно готувати. Тепер практично кожного дня дивую свою родину різними смачними стравами з рисом. І овочі всередину кладу, і м’ясо, і навіть солодкі роли робила. Дуже просто, оригінально і смачно.",
      },
      {
        img: "https://picsum.photos/id/12/900/900",
        name: "Константин Авраменко",
        city: "Одесса",
        yearsOld: "35 лет",
        feedback:
          "Раньше сам роллы и суши крутил, но если по вкусу еще ничего были, то по виду – совсем не айс. Разваливались, распадались. Короче, самому поесть еще сойдет, но на стол такое точно не поставишь. Случайно увидел рекламу этого аппарата. Решил рискнуть. Что могу сказать? Теперь на всех праздниках коронным блюдом мои роллы идут с разными начинками. И готовятся всего за пару минут. Классный аппарат!",
      },
    ],
  },
  order: {
    title:
      "Заказать устройство для приготовления домашних суши и роллов HappySmile легко!",
    steps: [
      {
        type: "request",
        title: "Заявка",
        description: "Оставляете заявку на нашем сайте.",
        img: require('./assets/order/deliv1.png'),
      },
      {
        type: "call",
        title: "Звонок",
        description:
          "Ожидаете звонка нашего менеджера для уточнения адреса доставки и сопутствующих нюансов..",
          img: require('./assets/order/deliv2.png'),
      },
      {
        type: "send",
        title: "Отправка",
        description: "В тот же день отправляем ваш заказ в любой город Украины.",
        img: require('./assets/order/deliv3.png'),
      },
      {
        type: "receiving",
        title: "Получение",
        description:
          "Через 1-3 дня забираете товар на указанном вами отделении почты и там же производите его оплату.",
          img: require('./assets/order/deliv4.png'),
      },
    ],
  },
}

export default sushi
