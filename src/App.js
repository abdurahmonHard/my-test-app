import React, { useState } from "react";
import "./App.css";

const TestSearchApp = () => {
  // Test savollari va javoblari
  const testData = [
    { question: "Где чаще", answer: "В литературных произведениях" },
    { question: "Имя", answer: "Сколько? Какой? Который" },
    { question: "Какие", answer: "-ый, -ий, -ой" },
    { question: "Определите", answer: "Научный" },
    { question: "Что называется", answer: "Стиль речи, который употребляется при общении в неформальной обстановке" },
    { question: "Каковы", answer: "Чёткие формулировки, сообщение фактов" },
    { question: "Определите стиль речи данного отрывка", answer: "Художественный;" },
    { question: "Монолог", answer: "Разговорному" },
    { question: "К какому", answer: "К художественно-литературному" },
    { question: "К жанрам научного", answer: "учебные пособия, монографии, тезисы, энциклопедии" },
    { question: "К жанрам", answer: "международный обзор, корреспонденция, репортаж, газетные статьи, интервью, фельетон;" },
    { question: "Главные", answer: "подлежащее и сказуемое" },
    { question: "Второстепенные", answer: "дополнение, определение, обстоятельство" },
    { question: "Замените", answer: "она" },
    { question: "Вставьте нужное слово: Моей", answer: "лет" },
    { question: "Вставьте нужное слово: Мне", answer: "год" },
    { question: "Вставьте нужное слово: Нашему", answer: "года" },
    { question: "Я уже", answer: "эту" },
    { question: "Когда", answer: "зимой" },
    { question: "Что ты", answer: "я люблю музыку" },
    { question: "В каком", answer: "яблоко, груша, слива" },
    { question: "Что вы", answer: "Я пью чай." },
    { question: "Где лежит", answer: "на столе" },
    { question: "Какой", answer: "большой, красивый, кирпичный" },
    { question: "Мадина", answer: "нами" },
    { question: "Анвар", answer: "Франции" },
    { question: "Найдите имя существительное", answer: "комната" },
    { question: "Найдите имя числительное", answer: "четырнадцать" },
    { question: "Что ты делал", answer: "Читал книгу и смотрел телевизор" },
    { question: "Что вы будете", answer: "Мы будем отдыхать" },
    { question: "Найдите имя существительное, которое отвечает на вопрос ЧТО", answer: "окно" },
    { question: "Найдите имя существительное, которое отвечает на вопрос КТО", answer: "мальчик" },
    { question: "Кому вы", answer: "Я купил подарок маме" },
    { question: "Найдите правильный", answer: "моя" },
    { question: "Я хочу", answer: "большую" },
    { question: "Билол", answer: "младшему" },
    { question: "Элбек", answer: "журналистом" },
    { question: "Сейчас он", answer: "бизнесом" },
    { question: "Мы поздравили", answer: "учителя" },
    { question: "Найдите правильный ответ: Чьё", answer: "твоё" },
    { question: "Вчера студенты", answer: "отмечали праздник" },
    { question: "Найдите правильный ответ: 61", answer: "шестьдесят один" },
    { question: "Найдите имя прилагательное", answer: "красивая" },
    { question: "Найдите глагол", answer: "сидеть" },
    { question: "Какое имя прилагательное", answer: "маленькая" },
    { question: "Я не знал", answer: "артисткой" },
    { question: "Раньше здесь", answer: "остановки" },
    { question: "Мадина уже давно", answer: "искусством" },
    { question: "Летом", answer: "на озеро" },
    { question: "Как зовут", answer: "этого студента" },
    { question: "Банк", answer: "в новом здании" },
    { question: "На какой", answer: "какой" },
    { question: "Найдите местоимение", answer: "лиса" },
    { question: "Найдите правильный ответ: ___ это стол", answer: "чей" },
    { question: "Найдите правильный ответ: Чьё это письмо", answer: "наше" },
    { question: "Найдите имя существительное среднего рода", answer: "окно, небо" },
    { question: "Алишер", answer: "русскую литературу" },
    { question: "Сегодня я", answer: "друзей" },
    { question: "Антон", answer: "в пятницу" },
    { question: "Перерыв", answer: "минут" },
    { question: "Раньше Насиба", answer: "работала" },
    { question: "Анвар недавно", answer: "изучать" },
    { question: "На какие вопросы", answer: "что делать" },
    { question: "Найдите правильное сочетание слов", answer: "белый снег" },
    { question: "Найдите правильное написание числительного 278", answer: "двести семьдесят восемь" },
    { question: "На какой вопрос", answer: "сколько? который" },
    { question: "Что вы едите", answer: "Я ем бутерброды" },
    { question: "Подберите", answer: "Это мой журнал" },
    { question: "Один", answer: "имя числительное" },
    { question: "Найдите предложение, где", answer: "Я иду домой" },
    { question: "У меня", answer: "нет" },
    { question: "Я знаю", answer: "где" },
    { question: "Сейчас уже", answer: "весна" },
    { question: "Наша", answer: "нефтью" },
    { question: "По дороге", answer: "зашла" },
    { question: "Найдите предложение, где есть местоимение", answer: "Это мой папа" },
    { question: "Найдите предложение, где есть имя", answer: "Умный ребёнок" },
    { question: "Найдите правильный ответ: Сколько", answer: "тридцать один" },
    { question: "Найдите правильный ответ: Это ваша", answer: "наша" },
    { question: "Замените имя существительное", answer: "они" },
    { question: "Найдите местоимения", answer: "они, вы, мы" },
    { question: "Найдите местоимения в", answer: "я, ты, он" },
    { question: "Вставьте нужное слово: Преподаватель", answer: "сказал" },
    { question: "Вставьте нужное слово: Скажите", answer: "приглашать" },
    { question: "Вставьте нужное слово: На", answer: "в Москве" },
    { question: "Вставьте нужное слово: На нашей", answer: "новый магазин" },
    { question: "Вставьте нужное слово: Я", answer: "старшему брату" },
    { question: "Вставьте нужное слово: Студенты", answer: "смотрели" },
    { question: "Вставьте нужное слово: Вчера", answer: "у зубного врача" },
    { question: "Вставьте нужное слово: В", answer: "в школе" },
    { question: "Вставьте нужное слово: Мы", answer: "остановки" },
    { question: "Раздел", answer: "лексика" },
    { question: "Найдите одушевленное имя", answer: "девочка" },
    { question: "Найдите существительное мужского рода", answer: "отец" },
    { question: "Найдите существительное среднего рода", answer: "дерево" },
    { question: "Найдите существительное во множественном числе", answer: "студенты" },
    { question: "Какой антоним", answer: "добрый" },
    { question: "Для чего", answer: "используются для выражения вопроса" },
    { question: "Как", answer: "год" },
    { question: "Вставьте нужные слова: Фильм", answer: "в семь часов" },
    { question: "В какой строке указаны положительные", answer: "вежливый, порядочный, трудолюбивый" },
    { question: "В какой строке указаны отрицательные", answer: "столе" },
    { question: "Вставьте нужное слово: Моя тётя", answer: "года" },
    { question: "Найдите ошибку", answer: "моя дядя" },
    { question: "Выберите правильный вариант", answer: "скрыт" },
    { question: "Определите", answer: "официально-деловой " },
    { question: "Что означает", answer: "это неповторимое, уникальное, духовное своеобразие человеческого рода " },
    { question: "Что такое", answer: "*Совокупность обычаев, обрядов, песен и других явлений быта народов " },
    { question: "Укажите", answer: "медведь" },
    { question: "Слово с ударением на первом", answer: "радость" },
    { question: "Слово с ударением на третьем", answer: "монолог " },
    { question: "Слово с ударением на втором", answer: "гитара" },
    { question: "В слове три", answer: "монолог" },
    { question: "В корне", answer: "Голу…ка " },
    { question: "Укажите слово с согласной", answer: "Сторо…ка" },
    { question: "Словосочетание в переносном значении", answer: "ветер воет" },
    { question: "Синоним к слову ЛОЖЬ", answer: "столе" },
    { question: "Синоним к слову МЕТЕЛЬ", answer: "дождь" },
    { question: "Одушевленное", answer: "лошадь " },
    { question: "Существительное мужского", answer: "год " },
    { question: "Существительное среднего", answer: "здоровье " },
    { question: "Существительное множественного", answer: "портфели " },
    { question: "Антоним к слову ГРУСТЬ", answer: "радость " },
    { question: "Антоним к слову ГРОМАДНЫЙ", answer: "крошечный " },
    { question: "Антонимы", answer: "ненависть, любовь" },
    { question: "Фразеологизм", answer: "сидеть сложа руки" },
    { question: "Фразеологизм", answer: "шито белыми нитками" },
    { question: "Фразеологизм в", answer: "вводить в заблуждение " },
    { question: "Синоним", answer: "бить баклуши, работать спустя рукава " },
    { question: "Омонимы", answer: "одинаковы по звучанию и написанию, но разные по значению " },
    { question: "Окончание", answer: "Изменяемая часть слова, которая служит для образования форм слова и для связи слов в предложении  " },
    { question: "Корень", answer: "Главная часть основы, общая для родственных слов" },
    { question: "Слово, не входящее", answer: "Водитель" },
    { question: "Найдите пару", answer: "Вода – водитель" },
    { question: "Укажите слово", answer: "Горевать" },
    { question: "Найдите слово с соединительной", answer: "Пар…ход" },
    { question: "Раздел", answer: "Синтаксис " },
    { question: "Соединительная гласная О", answer: "вод...пад " },
    { question: "Заимствованное слово", answer: "жалюзи " },
    { question: "Глагол повелительного", answer: "знайте " },
    { question: "Глагол условного", answer: "сказал бы" },
    { question: "Эти", answer: "Обобщенно-личные" },
    { question: "Найдите обобщенно", answer: "Цыплят по осени считают" },
  ];

  // State for search input and result
  const [searchQuery, setSearchQuery] = useState("");
  const [answer, setAnswer] = useState("");

  // Qidiruv funksiyasi
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Savolni qidirish
    const result = testData.find(
      (item) => item.question.toLowerCase() === query
    );

    // Javobni o'rnatish
    if (result) {
      setAnswer(result.answer);
    } else if (query.trim() !== "") {
      setAnswer("Savolni to‘g‘ri kiriting.");
    } else {
      setAnswer(""); // Agar foydalanuvchi hech narsa kiritmasa, bo'sh qoldiramiz
    }
  };

  return (
    <div className="container">
      <h1>Javoblarni qidirish</h1>
      <input
        type="text"
        placeholder="SAVILINGIZNI YOZING..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="answer-box">
        <p className="answer-title">JAVOBI:</p>
        <p className="answer-text">{answer}</p>
      </div>
    </div>
  );
};

export default TestSearchApp;