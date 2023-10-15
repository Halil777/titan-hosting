import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  ru: {
    translation: {
      paymentType: "Способ оплаты",
      contact: "Контакт",
      superServerNider: "Супер   серверы в Нидерландах!",
      portSpeed: "Пропускная скорость порта",
      gBit: "1 Гбит/с",
      support7_24: "Круглосуточная поддержка без выходных",
      unlimitedTraffic: "Безлимитный трафик во всех тарифах",
      minutes: "15-20 минут",
      serverReadines: "Готовность сервера после заказа",
      tryToBePerfect: "Мы стараемся быть идеальными во всем",
      perfect1:
        "Шикарный выбор локаций – лучшие серверы в надежных дата-центрах Молдовы, Нидерландов, России, США, Латвии, Украины, Гонконга, Германии, Канады, Словакии, Чехии, Великобритании, Израиле, Турции, Польши, Болгарии, Румынии, Италии, Финляндии, Венгрии, Португалии, Швеции, Швейцарии, Казахстана, Сербии, Ирландии, Франции, Испании, Греции, Литве, Эстонии, Дании, Австрии, Норвегия и Бельгия",
      perfect2:
        "Исключительно собственное оборудование высокого качества! Все диски – NVMe.",
      perfect3:
        "Лицензированное ПО на ваш выбор, виртуализация KVM, удобные панели управления. Мы являемся членами ассоциации RIPE NCC, со статусом LIR и IP адресами.",
      perfect4:
        "Огромный выбор способов и валют оплаты, постоянные акции, скидки и индивидуальный тариф при необходимости.",
      perfect5:
        "Техподдержка обрабатывает любой запрос максимально быстро, в течение получаса. Многие процессы автоматизированы. Ваш сервер будет доступен практически сразу после заказа.",
      perfect6:
        "Мы кропотливо разработали для вас тарифы с идеальным соотношением цена-качество. Кроме того, мы обещаем постоянно радовать вас приятными акциями и скидками.",
      companyNews: "Новости компании",
      stayUpToDate: "Будь в курсе последних новостей и событий!",
      news1: "Технические работы и максимум скорости — 10 Гбит/с теперь и США",
      news1Sub:
        "Информируем вас о предстоящей миграции дата-центра в США — серверы PQ.Hosting переезжают в новый ЦОД Evoque Secaucus. После переезда скорость порта в США будет увеличена с 1 Гбит/с до скоростных 10 Гбит/с.",
      news2: "Максимум скорости — 10 Гбит/с теперь и в Англии!",
      news2Sub:
        "Совсем недавно мы объявили об увеличении скорости порта в Германии и решили на этом не останавливаться. Гордо заявляем об ещё одном классном обновлении — мы увеличили скорость порта в Англии до 10 Гбит/с!",
      news3: "Мощнее, быстрее и доступнее — 10 Гбит/с в Германии",
      news3Sub:
        "Не будем томить нашей классной новостью! Мы увеличили скорость порта в Германии — теперь в вашем распоряжении не привычные 1 Гбит/с, а быстродействующие 10 Гбит/с! ",
      news4: "Бельгия присоединяется к PQ",
      news4Sub:
        "Когда-то мы начинали с Нидерландов, поэтому открыться по соседству, в Бельгии, было вдвойне приятно. Серверы PQ установлены в дата-центре компании Digital Realty в столице страны Брюсселе.",
      news5: "Ограничение в доступности портов на VPS",
      news5Sub:
        "С сегодняшнего дня было принято решение ограничить работу 25 порта на услугах VPS. Данное ограничение касается только новых услуг, выданных с момента публикации этой новости. Для старых услуг порт остается открытым.",
      news6: "Быстрее, надежнее, вместительнее",
      news6Sub:
        "Заботливый хостинг-провайдер знает, насколько важно настроить параметры VPS для клиента. Мы с радостью объявляем о значимом улучшении наших серверов. Барабанная дробь! Теперь каждый новый VPS обеспечивается дополнительными 10 ГБ места!",
      news7: "PQ.Hosting стал генеральным спонсором ADRENALINE FEST 2023",
      news7Sub:
        "Любите вы скорость так же сильно, как и мы? Если да, то эта новость для вас! Мы стали генеральным спонсором ADRENALINE FEST 2023, который так долго ждали любители быстрых автомобилей Молдовы. Он пройдёт 1 и 2 июля в Бельцах в международном аэропорту Бельцы-Лядовены.",
      news8: "Мы покорили Скандинавию, добравшись до Норвегии",
      news8Sub:
        "Серверы PQ.Hosting установлены в тихой окраине столицы Норвегии Осло. Теперь у нас есть полное покрытие по всей Скандинавии! Общая вместимость дата-центра – около 250 стоек с двойным контролем доступа. Функционирует система автоматического пожаротушения.",
      news9: "Авария в дата-центре Канады",
      news9Sub:
        "Мы бы хотели обратиться к вам вновь с позитивными новостями, но, к сожалению, никто не застрахован от внешних факторов. Вынуждены сообщить, что в Дата-центре в Канаде произошла авария. В блоке, где располагаются наши серверы, вышло из строя охлаждение, ввиду чего на текущий момент оборудование приостановлено.",
      moreNews: "Больше новостей ",
      news: "Новости",
      hiCpuTitle: "Высокопроизводительный сервер Hi-CPU для VPS/VDS — 4,5 ГГц",
      hiCpuSubTitle:
        "Наши Hi-CPU серверы расположены в ведущем дата-центре Российской Федерации – DataPro. Защиту от DDoS атак предоставляет компания DDOS-GUARD. Виртуальные серверы располагаются на новейших серверных процессорах Intel E2288G, которые обеспечивают максимальную частоту процессора на каждое ядро. Также в комплектации – оперативная память DDR4 ECC и NVMe диски от компании Intel версии Data Center. Все это обеспечит максимально стабильную и быструю работу вашего VPS/VDS.",
      idealServer: "Почему наш сервер идеален",
      idealServerSubtitle: "Мы стараемся быть идеальными во всем",
      cpu1: "СуперХард!",
      cpuSub1:
        "Мы используем только собственное, проверенное оборудование последнего поколения от ведущих мировых производителей.",
      cpu2: "Виртуальное реально",
      cpuSub2:
        "Наши сервера реализованы при помощи KVM – технологии, которая полностью эмулирует отдельную машину: процессор, память, жесткий диск, сетевой интерфейс.",
      cpu3: "Админ всегда рядом",
      cpuSub3:
        "Мы готовы предоставить вам полное круглосуточное администрирование вашего сервера вне зависимости от выбранного тарифа.",
      cpu4: "Бесплатный перенос",
      cpuSub4:
        "Если вам нужно перенести к нам ваш проект с другого сервера, мы с удовольствием сделаем это совершенно бесплатно.",
      cpu5: "Скорость зашкаливает",
      cpuSub5:
        "Наши сервера работают на портах со скоростью 1 Гбит/с. Ваши сайты будут грузиться практически мгновенно. Нет. Просто мгновенно.",
      cpu6: "Диски",
      cpuSub6:
        "Все наши диски – исключительно NVMe с технологией защиты данных RAID 10, которая обеспечивает сверхнадежное сохранение данных.",
      cpu7: "Ваш сервер – ваши правила",
      cpuSub7:
        "Выбирайте любую операционную систему, с которой вам удобно работать. Мы ее установим на ваш сервер.",
      cpu8: "Полный контроль",
      cpuSub8:
        "У нас большой выбор панелей управления, в том числе и бесплатных. Определите самую комфортную для себя и управляйте сервером с правами администратора.",
      cpu9: "Раз – и готово",
      cpuSub9:
        "После заказа и оплаты VPS будет предоставлен вам в течение всего 15 минут. Выдача сервера производится в автоматическом режиме.",
      additionalService: "Дополнительные услуги",
      addServ1: "Облачный VPS с установленным Docker",
      addServ2: "Хостинг VPS/VDS с тестовым периодом",
      addServ3: "Аренда VPS/VDS сервера защита от DDoS-атак",
      addServ4: "Аренда VPS/VDS с Oracle",
      addServ5: "Аренда VPS/VDS хостинга для MineCraft",
      accTitle1: "Как подобрать себе  самый  подходящий  тариф ",
      accSubTitle1:
        "Проще простого. Свяжитесь с нашим менеджером, он задаст вам ряд наводящих вопросов – и подберет для вас самое оптимальное решение. Мы специально создали широкую линейку тарифов, чтобы удовлетворять максимальный спектр потребностей клиентов.",
      accTitle2: "Ваши услуги полностью офисиальны ?",
      accSubTitle2:
        "Наш бизнес легален и официально задокументирован до последней микросхемы. Мы работаем в полном соответствии с законодательствами Евросоюза, России и Молдовы.",
      accTitle3: "У кого будет возможность доступа к моей информации ?",
      accSubTitle3:
        "Только у того круга лиц, который вы сами определите. Кроме этого списка, больше никто не сможет получить доступ к вашей информации – это гарантируется охраной дата-центров, нашим отделом IT-безопасности и, разумеется, законодательством.",
      accTitle4: "Правила возврата средств ",
      accSubTitle4:
        "Средства возвращаем если услуга не предоставлена в полном объеме, но только при заполнении заявления, где требуется верификация пользователя в виде предоставления копии паспорта и заполненного заявления.",
      accTitle5: "Какой лучший SSL сертифкат ",
      accSubTitle5:
        "Лучший SSL сертификат - понятие очень относительное. Фактически, мы можем сказать, что SSL сертификат, который соответствует вашим потребностям, является лучшим SSL сертификатом. Однако следует подчеркнуть, что самые престижные сертификаты SSL в мире - это сертификаты EV SSL. Сайты, ориентированные на безопасность, такие как корпоративные сайты, сайты банков и сайты электронной коммерции, используют SSL сертификаты.",
      accTitle6: "Я по ошибке удалил свой SSL сертификат , что мне делать",
      accSubTitle6:
        "Если вы удалите SSL сертификат, наша служба поддержки бесплатно переопределит ваш сертификат.",
      accTitle7: "Зачем нужен SSS - сертификат ",
      accSubTitle7:
        "Работа сайта в незащищенном режиме позволяет получить доступ к информации, которая поступает от сервера и браузера. Сертификат безопасности минимизирует риск перехвата или подмены персональной информации пользователя — паролей, логинов, номеров телефона или банковских карт. Наличие сертификата повышает не только безопасность сайта, но и репутацию компании. Клиенты могут быть уверены, что важная информация находится под защитой. Установка на сайте SSL-сертификата делает соединение между сайтом и браузером пользователя безопасным. Все данные шифруются и передаются в виде случайного набора символов. Расшифровать кодировку можно только при наличии закрытого ключа, который находится на сервере компании. Даже если мошенник сможет получить данные, прочитать или изменить их не выйдет.",
      moreDefinitionText1:
        "SSL-сертификат – элементарно важный инструмент безопасности для любого веб-сайта. С его помощью данные между клиентом и сервером шифруются, чтобы их не могли перехватить злоумышленники.",
      moreDefinitionText2:
        "Если вы хотите обеспечить безопасность своего сайта и персональных данных пользователей, то лучший выбор – купить SSL-сертификат. Он защитит вас от возможных взломов, утечек информации и других кибератак.",
      moreDefinitionText3: "Что дает использование сертификата",
      moreDefinitionText4:
        "SSL (Secure Sockets Layer) – криптографический протокол, обеспечивающий безопасную передачу данных по Интернету. SSL-сертификат является удостоверением, которое выдается владельцу веб-сайта, подтверждающее, что он использует SSL-протокол для защиты данных, передаваемых между веб-сайтом и посетителями.",
    },
  },

  en: {
    translation: {
      paymentType: "Payment type",
      contact: "Contact",
      superServerNider: "Super servers in the Netherlands!",
      portSpeed: "Port throughput speed",
      gBit: "1 Gbit/s",
      support7_24: "24/7 Support",
      unlimitedTraffic: "Unlimited traffic in all tariffs",
      minutes: "15-20 minutes",
      serverReadines: "Server readiness after order",
      tryToBePerfect: "We try to be perfect in everything",
      perfect1:
        "Great selection of locations - the best servers in reliable data centers in Moldova, the Netherlands, Russia, USA, Latvia, Ukraine, Hong Kong, Germany, Canada, Slovakia, Czech Republic, Great Britain, Israel, Turkey, Poland, Bulgaria, Romania, Italy, Finland, Hungary , Portugal, Sweden, Switzerland, Kazakhstan, Serbia, Ireland, France, Spain, Greece, Lithuania, Estonia, Denmark, Austria, Norway and Belgium",

      perfect2:
        "Exclusively our own high quality equipment! All drives are NVMe.",
      perfect3:
        "Licensed software of your choice, KVM virtualization, convenient control panels. We are members of the RIPE NCC association, with LIR status and IP addresses.",
      perfect4:
        "A huge selection of payment methods and currencies, constant promotions, discounts and individual tariffs if necessary.",
      perfect5:
        "Technical support processes any request as quickly as possible, within half an hour. Many processes are automated. Your server will be available almost immediately after ordering.",

      perfect6:
        "We have painstakingly developed tariffs for you with an ideal price-quality ratio. In addition, we promise to constantly delight you with pleasant promotions and discounts.",
      companyNews: "Company's news",
      stayUpToDate: "Stay up to date with the latest news and events!",
      news1: "Technical work and maximum speed - 10 Gbit/s now in the USA",
      news1Sub:
        "We inform you about the upcoming migration of the data center to the USA - PQ.Hosting servers are moving to the new Evoque Secaucus data center. After the move, the port speed in the United States will be increased from 1 Gbps to high-speed 10 Gbps.",
      news2: "Maximum speed - 10 Gbit/s now in England!",
      news2Sub:
        "Just recently we announced an increase in port speed in Germany and decided not to stop there. We are proud to announce another cool update - we have increased the port speed in England to 10 Gbps!",
      news3: "More powerful, faster and more affordable - 10 Gbps in Germany",
      news3Sub:
        "Let's not bore you with our great news! We have increased the speed of the port in Germany - now you have at your disposal not the usual 1 Gbit/s, but a fast 10 Gbit/s!",
      news4: "Belgium joins PQ",
      news4Sub:
        "We once started in the Netherlands, so it was doubly nice to open next door, in Belgium. PQ servers are installed in the Digital Realty data center in the capital Brussels.",
      news5: "Limitation on port availability on VPS",
      news5Sub:
        "Starting today, it was decided to limit the operation of port 25 on VPS services. This restriction applies only to new services issued since the publication of this news. The port remains open for legacy services.",
      news6: "Faster, more reliable, more spacious",
      news6Sub:
        "A caring hosting provider knows how important it is to configure the VPS settings for the client. We are excited to announce significant improvements to our servers. Drumroll! Now every new VPS comes with an additional 10 GB of space!",
      news7: "PQ.Hosting became the general sponsor of ADRENALINE FEST 2023",
      news7Sub:
        "Do you love speed as much as we do? If yes, then this news is for you! We became the general sponsor of ADRENALINE FEST 2023, which fans of fast cars in Moldova have been waiting for so long. It will take place on July 1 and 2 in Balti at the Balti-Ladovena International Airport.",
      news8: "We conquered Scandinavia, reaching Norway",
      news8Sub:
        "PQ.Hosting servers are installed in a quiet outskirts of the Norwegian capital Oslo. We now have full coverage throughout Scandinavia! The total capacity of the data center is about 250 racks with dual access control. There is an automatic fire extinguishing system.",
      news9: "Accident in a Canadian data center",
      news9Sub:
        "We would like to contact you again with positive news, but, unfortunately, no one is immune from external factors. We are forced to inform you that an accident occurred at the Data Center in Canada. In the block where our servers are located, the cooling has failed, which is why the equipment is currently suspended.",
      moreNews: "More News",
      news: "News",
      hiCpuTitle: "High-performance Hi-CPU server for VPS/VDS – 4.5 GHz",
      hiCpuSubTitle:
        "Our Hi-CPU servers are located in the leading data center of the Russian Federation - DataPro. Protection against DDoS attacks is provided by DDOS-GUARD. Virtual servers are located on the latest Intel E2288G server processors, which provide the maximum processor frequency per core. Also included are DDR4 ECC RAM and NVMe drives from Intel Data Center version. All this will ensure the most stable and fast operation of your VPS/VDS.",
      idealServer: "Why our server is perfect",
      idealServerSubtitle: "We try to be perfect in everything",
      cpu1: "SuperHard!",
      cpuSub1:
        "We use only our own, proven, latest generation equipment from the world's leading manufacturers.",
      cpu2: "The virtual is real",
      cpuSub2:
        "Our servers are implemented using KVM - a technology that completely emulates a separate machine: processor, memory, hard drive, network interface.",
      cpu3: "The admin is always there",
      cpuSub3:
        "We are ready to provide you with full round-the-clock administration of your server, regardless of the chosen tariff.",
      cpu4: "Free transfer",
      cpuSub4:
        "If you need to transfer your project to us from another server, we will be happy to do it completely free of charge.",
      cpu5: "The speed is off the charts",
      cpuSub5:
        "Our servers operate on ports with a speed of 1 Gbit/s. Your sites will load almost instantly. No. Just instantly.",
      cpu6: "Discs",
      cpuSub6:
        "All our drives are exclusively NVMe with RAID 10 data protection technology, which ensures ultra-reliable data storage.",
      cpu7: "Your server - your rules",
      cpuSub7:
        "Choose any operating system with which you are comfortable working. We will install it on your server.",
      cpu8: "Full control",
      cpuSub8:
        "We have a large selection of control panels, including free ones. Determine the one that is most comfortable for you and manage the server with administrator rights.",
      cpu9: "Once - and you're done",
      cpuSub9:
        "After ordering and paying, the VPS will be provided to you within just 15 minutes. The server is issued automatically.",
      additionalService: "Additional services",
      addServ1: "Cloud VPS with Docker installed",
      addServ2: "VPS/VDS hosting with trial period",
      addServ3: "VPS/VDS server rental protection against DDoS attacks",
      addServ4: "Rent VPS/VDS with Oracle",
      addServ5: "Rent VPS/VDS hosting for MineCraft",
      accTitle1: "How to choose the most suitable tariff for yourself",
      accSubTitle1:
        "As easy as pie. Contact our manager, he will ask you a number of leading questions and select the most optimal solution for you. We have specially created a wide range of tariffs to satisfy the maximum range of customer needs.",
      accTitle2: "Are your services completely office based?",
      accSubTitle2:
        "Our business is legal and officially documented down to the last chip. We work in full compliance with the laws of the European Union, Russia and Moldova.",
      accTitle3: "Who will have access to my information?",
      accSubTitle3:
        "Only among the circle of people that you determine yourself. Apart from this list, no one else will be able to access your information - this is guaranteed by the security of the data centers, our IT security department and, of course, the law.",
      accTitle4: "Refund Policy",
      accSubTitle4:
        "We return funds if the service is not provided in full, but only when filling out an application, which requires user verification in the form of providing a copy of the passport and a completed application.",
      accTitle5: "What is the best SSL certificate",
      accSubTitle5:
        "The best SSL certificate is a very relative concept. In fact, we can say that the SSL certificate that suits your needs is the best SSL certificate. However, it should be emphasized that the most prestigious SSL certificates in the world are EV SSL certificates. Security-oriented sites such as corporate sites, banking sites, and e-commerce sites use SSL certificates.",
      accTitle6: "I deleted my SSL certificate by mistake, what should I do?",
      accSubTitle6:
        "If you delete your SSL certificate, our support team will re-identify your certificate free of charge.",
      accTitle7: "Why do you need an SSL certificate?",
      accSubTitle7:
        "Operating the site in unprotected mode allows you to access information that comes from the server and browser. A security certificate minimizes the risk of interception or substitution of the user’s personal information - passwords, logins, phone numbers or bank cards. Having a certificate increases not only the security of the site, but also the reputation of the company. Customers can be confident that important information is protected. Installing an SSL certificate on a website makes the connection between the website and the user's browser secure. All data is encrypted and transmitted as a random set of characters. You can decrypt the encoding only if you have the private key, which is located on the company server. Even if the fraudster is able to obtain the data, it will not be possible to read or change it.",
      moreDefinitionText1:
        "An SSL certificate is an essential security tool for any website. With its help, data between the client and server is encrypted so that it cannot be intercepted by attackers.",
      moreDefinitionText2:
        "If you want to ensure the security of your website and users’ personal data, then the best choice is to buy an SSL certificate. It will protect you from possible hacks, information leaks and other cyber attacks.",
      moreDefinitionText3: "What does using a certificate provide?",
      moreDefinitionText4:
        "SSL (Secure Sockets Layer) is a cryptographic protocol that ensures secure data transmission over the Internet. An SSL certificate is an identification that is issued to the owner of a website confirming that they are using the SSL protocol to protect the data transmitted between the website and visitors.",
    },
  },
  tm: {
    translation: {},
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
