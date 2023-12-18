function rapperName() {
  const getName = document.getElementById("name");
  const firstNames = [
	"Весёлый",
	"Мишурный",
	"Радостный",
	"Снежный",
	"Печеньковый",
	"Искрящийся",
	"Какаоный",
	"Заснеженный",
	"Дружок",
	"Остролистный",
	"Шариковый",
	"Пестренький",
	"Звенящий",
	"Инжирный",
	"Танцующий",
	"Топающий",
	"Счастливый",
	"Феечка",
	"Джазовый",
	"Сладкий",
	"Хлёсткий",
	"Удачливый",
	"Пузырьковый",
	"Милашка",
	"Заносчивый",
	"Звёздный",
  ];
  const secondNames = [
	"Искристые ножки",
	"Глаза-блёстки",
	"Ледяные шары",
	"Звонкие дудочки",
	"Весёлые сливы",
	"Коричные шортики",
	"Мишурные штанишки",
	"Ирисковый пирог",
	"Сахарный животик",
	"Звонкие шарики",
	"Печеньковый дух",
	"Блестящие штаны",
	"Сахарные носочки",
	"Ледяные варежки",
	"Сахарная слива",
	"Огурцовые пальчики",
	"Сладкая вата",
	"Имбирный ангел",
	"Звёздные огоньки",
	"Шипучие носочки",
	"Штаны-пышечки",
	"Стильные ботинки",
	"Сахарные орешки",
	"Шлёпанцы-лапки",
	"Пудинговые штаны"
  ];
  const getRandomNumber = (max) => Math.floor(Math.random() * max);
  const getRandomName = `${firstNames[getRandomNumber(firstNames.length)]} ${
    getName.value
  } ${secondNames[getRandomNumber(secondNames.length)]}`;

  return (document.getElementById("random-name").innerText = getRandomName);
}

document.getElementById("generate").addEventListener("click", rapperName);

rapperName();