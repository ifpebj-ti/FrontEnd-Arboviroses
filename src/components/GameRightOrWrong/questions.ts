export interface Question {
  question: string;
  answer: boolean;
  image?: string;
}

const questions: Question[] = [
  {
    question:
      'É importante não deixar água parada em casa para evitar o mosquito da dengue?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question: 'Devemos usar repelente para evitar picadas de mosquitos?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question: 'Podemos deixar garrafas e pneus ao ar livre com água acumulada?',
    image: 'https://via.placeholder.com/300',
    answer: false
  },
  {
    question:
      'É bom colocar areia nos pratos de vasos de plantas para evitar que os mosquitos se reproduzam?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question:
      'Devemos sempre cobrir caixas dágua e tonéis para evitar a proliferação de mosquitos?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question:
      'É seguro deixar piscinas sem tratamento ou limpeza por muito tempo?',
    image: 'https://via.placeholder.com/300',
    answer: false
  },
  {
    question:
      'Manter o quintal limpo e sem lixo ajuda a prevenir o mosquito da dengue?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question:
      'Usar mosquiteiros nas janelas e nas camas ajuda a evitar picadas de mosquitos?',
    image: 'https://via.placeholder.com/300',
    answer: true
  },
  {
    question:
      'Não há problema em deixar calhas e ralos entupidos com folhas e sujeira?',
    image: 'https://via.placeholder.com/300',
    answer: false
  },
  {
    question:
      'Devemos avisar um adulto se virmos um lugar com água parada onde mosquitos possam se reproduzir?',
    image: 'https://via.placeholder.com/300',
    answer: true
  }
];

export default questions;
