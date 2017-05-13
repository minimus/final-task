const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

const exclude = [
  "Ширина упаковки",
  "Высота упаковки",
  "Глубина упаковки",
  "Тип",
  "Дополнительно",
  "Комплектация",
  "Совместимые ОС",
  "Видеообзор",
  "Функции",
  "Вес",
  "Количество кнопок",
  "Доп. комплектация",
  "Коннекторы",
  "Внешние размеры, мм",
  "Вид насадки",
  "Вид механического переключателя",
  "Функции и режимы",
  "Синхронизация",
  "Мин. время перезарядки, с",
  "Углы освещения",
  "Наличие встроенных динамиков",
  "Предназначениe",
  "Тип студийного оборудования",
  "Система фокусировки",
  "Светосила",
  "Конструкция",
  "Минимальное фокусное расстояние, мм",
  "Конструкция объектива, элементов в группах",
  "Чувствительность ISO",
  "Фокусировка",
  "Поле зрения",
  "Режимы съемки",
  "Вспышка",
  "Баланс белого",
  "Мультимедийный плеер",
  "Замер экспозиции",
  "Дополнительная защита",
  "Физический размер матрицы, дюймов",
  "Тип вспышки",
  "Оптический зум",
  //"Вид карты памяти",
  "Минимальная освещенность, люкс",
  "Эффективное количество пикселей, млн. пикселей",
  "Количество Ethernet портов",
  "Версия Bluetooth",
  "Диагностика и управление",
  "ATM",
  "Безопасность/защита сети",
  "Поддержка VPN",
  "Количество подключаемых устройств",
  "Относительное отверстие",
  "Номинальный ток, А",
  "Пусковой ток, А",
  "Емкость, А•ч",
  "Емкость, мА•ч",
  "Напряжение, В",
  "Скорость записи",
  "Толщина, мм",
  "Дополнительные кнопки",
  "Разрешение датчика",
  "Длина шнура, м",
  "Количество",
  "Максимальная скорость беспроводного соединения, Mbps",
  "Количество пикселей (общее/эффективных)",
  "Факс",
  "Потребляемая мощность (режим ожидания), Вт",
  "Расходные материалы",
  "Уровни регулировки подставки",
  "Интерфейсы",
  "Брэкетинг",
  "Сила тока",
  "Спецификация БП",
  "Турбо-частота, ГГц",
  "Максимальная диафрагма",
  "Базовая частота, ГГц",
  "Совместимость",
  "Поддержка стандартов и драйверов",
  "Кол-во выходных интерфейсов",
  "Кол-во входных интерфейсов",
  "Входные интерфейсы",
  "Поддерживаемые носители",
  "Коэффициент нелинейных искажений",
  "Высота, см",
  "Ширина, см",
  "Глубина, мм",
  "Ширина, мм",
  "Функции и протоколы",
  "Количество в упаковке, шт",
  "Высота вентилятора, мм",
  "Толщина стенок, мм",
  "Контрастность",
  "Характеристики ЦАП/АЦП",
  "Выход первой страницы, с",
  "Подходит к",
  "Кол-во циклов заряд-разряд",
  "Потребляемая мощность, Вт",
  "Стандарты модулей RAM",
  "Длина, мм",
  "Скорость чтения",
  "Характеристики",
  "Вентиляторы",
  "2001-03-04T21:00:00.000Z",
  "Длина кабеля, м",
  "Внутренние разъемы",
  "Имя модели",
  "Нагрузка в месяц",
  "Диафрагма",
  "Частоты ядра в других режимах",
  "Рабочая диафрагма, F",
  "Назначение",
  "Сетевые функции",
  "Совместимые модели",
  "Состав комплекта",
  "Поддерживаемые сокеты",
  "Конструктивные особенности",
  "Прочие лотки",
  "Размеры основного отделения, мм",
  "Длина кабеля, см",
  "Макс. ток, А",
  "Глубина, см",
  "Альтернативное название",
  "Функции камеры",
  "Операционная система",
  "Выходные интерфейсы",
  "Форматы печатных материалов",
  "Интерфейсы и разъемы",
  "Беспроводные подключения",
  "Разъем для процессора",
  "Органайзер",
  "Особенности",
  "Скорость сканирования",
  "Встроенные датчики",
  "Диагональ",
  "Насадки",
  "Тип аксессуара",
  "Страна-изготовитель",
  "Кол-во элементов"
];

function prepareFilter(filter) {
  if (!filter) return [];

  const filterz = JSON.parse(filter);

  const vendors = [];
  const countries = [];
  const params = [];

  for (const val of filterz) {
    if (val.field === 'vendor') {
      vendors.push(val.value);
    }
    else if (val.field === 'country_of_origin') {
      countries.push(val.value)
    }
    else {
      const idx = params.findIndex(e => e.name === val.name);
      if (idx === -1) params.push({name: val.name, values: [val.value]});
      else params[idx].values.push(val.value);
    }
  }

  const matches = [];
  if (vendors.length) matches.push({$match: {vendor: {$in: vendors}}});
  if (countries.length) matches.push({$match: {country_of_origin: {$in: countries}}});
  if (params.length) {
    for (const param of params) {
      matches.push({$match: {$and: [{"param.name": param.name}, {"param.keyValue": {$in: param.values}}]}})
    }
  }

  return matches;
}

async function getData(cat, exclude, filter) {
  const matches = prepareFilter(filter);

  const db = await mongoClient.connect(mongoUrl);

  try {
    const goods = db.collection('offers');
    return {
      status: true,
      data: {
        facets: await goods.aggregate([
          {$match: {categoryid: cat}},
          ...matches,
          {$unwind: "$param"},
          {$match: {"param.name": {$nin: exclude}}},
          {$group: {_id: "$param.name", values: {$addToSet: "$param.keyValue"}}},
          {$project: {_id: 0, facet: "$_id", field: {$literal: 'param'}, values: 1}}
        ]).toArray(),
        vendor: await goods.aggregate([
          {$match: {categoryid: cat}},
          {$project: {name: {$literal: "Бренд"}, vendor: 1}},
          {$group: {_id: "$name", values: {$addToSet: "$vendor"}}},
          {$project: {_id: 0, facet: "$_id", field: {$literal: 'vendor'}, values: 1}}
        ]).toArray(),
        country: await goods.aggregate([
          {$match: {categoryid: cat}},
          ...matches,
          {$project: {name: {$literal: "Страна производства"}, country_of_origin: 1}},
          {$group: {_id: "$name", values: {$addToSet: "$country_of_origin"}}},
          {$project: {_id: 0, facet: "$_id", field: {$literal: 'country_of_origin'}, values: 1}}
        ]).toArray()
      }
    }
  }
  catch (e) {
    return Promise.reject(e);
  }
  finally {
    db.close();
  }
}

router.get('/:category', (req, res, next) => {
  const
    cat = parseInt(req.params.category, 10),
    filter = req.query.filter;
  getData(cat, exclude, filter)
    .then(data => res.json(data))
    .catch(e => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    });
});

module.exports = router;