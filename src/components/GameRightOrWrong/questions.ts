export type Question = {
  question: string;
  imageSrc: string;
  answer: boolean;
};

export const questions: Question[] = [
  {
    question:
      'É importante não deixar água parada em casa para evitar o mosquito da dengue?',
    imageSrc: '/question01.png',
    answer: true
  },
  {
    question: 'Devemos usar repelente para evitar picadas de mosquitos?',
    imageSrc: '/question02.png',
    answer: true
  },
  {
    question: 'Podemos deixar garrafas e pneus ao ar livre com água acumulada?',
    imageSrc: '/question03.png',
    answer: false
  },
  {
    question:
      'É bom colocar areia nos pratos de vasos de plantas para evitar que os mosquitos se reproduzam?',
    imageSrc: '/question04.png',
    answer: true
  },
  {
    question:
      'Devemos sempre cobrir caixas dágua e tonéis para evitar a proliferação de mosquitos?',
    imageSrc: '/question05.png',
    answer: true
  },
  {
    question:
      'É seguro deixar piscinas sem tratamento ou limpeza por muito tempo?',
    imageSrc: '/question06.png',
    answer: false
  },
  {
    question:
      'Manter o quintal limpo e sem lixo ajuda a prevenir o mosquito da dengue?',
    imageSrc: '/question07.png',
    answer: true
  },
  {
    question:
      'Usar mosquiteiros nas janelas e nas camas ajuda a evitar picadas de mosquitos?',
    imageSrc: '/question08.png',
    answer: true
  },
  {
    question:
      'Não há problema em deixar calhas e ralos entupidos com folhas e sujeira?',
    imageSrc: '/question09.png',
    answer: false
  },
  {
    question:
      'Devemos avisar um adulto se virmos um lugar com água parada onde mosquitos possam se reproduzir?',
    imageSrc: '/question10.png',
    answer: true
  }
];
