import type { NextApiRequest, NextApiResponse } from "next";
import { ContinentProps } from "../../types/Slides";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContinentProps[] | ContinentProps>
) {
  const data: ContinentProps[] = [
    {
      id: "1",
      title: "Europa",
      subtitle: "O continente mais antigo",
      src: "https://www.earthtrekkers.com/wp-content/uploads/2020/06/Europe-Itinerary-Photo.jpg",
      countries_number: 50,
      languages_number: 60,
      description:
        "O turismo na Europa é como uma aula de história, mas que ainda está sendo escrita. Isso porque, embora os países do chamado “Velho Continente” tenham registros de habitantes datados de 35.000 a. C., foram palco de guerras no passado e também da invenção de objetos, do debate de grandes ideias, e de muitos outros acontecimentos, há sempre novidades. A história não para de acontecer na Europa.",
    },
    {
      id: "2",
      title: "America do Norte",
      subtitle: "O continente do EUA",
      src: "https://bigseventravel.com/wp-content/uploads/2019/01/patrick-tomasso-40308-unsplash-1920x1440.jpg",
      countries_number: 3,
      languages_number: 6,
      description:
        "O turismo na América do Norte é como um grande e variado cardápio. Há opções de cidades urbanas e cosmopolitas, desérticas, nevadas, outras para quem gosta de sossego, de baladas, de parques de diversão, de turismo de aventura.",
    },
    {
      id: "3",
      title: "America do Sul",
      subtitle: "O continente emergente",
      src: "https://www.wendywutours.co.uk/resource/upload/1020/banner-south-america.jpg",
      countries_number: 12,
      languages_number: 9,
      description:
        "O turismo na América do Sul é bem variado. Afinal, o continente de mais de 17,8 milhões de km² tem uma grande variedade de paisagens, climas e estilos em cada um dos países que o formam. Por isso, fazer turismo no continente sul-americano agrada a qualquer tipo de viajante, desde aquele que prefere praias de mar azul cristalino a aqueles que buscam paisagens de deserto ou mesmo esquiar na neve.",
    },
    {
      id: "4",
      title: "Ásia",
      subtitle: "Continente da tecnologia",
      src: "https://www.royalcaribbean.com.br/wp-content/uploads/2017/09/asia-2.jpg",
      countries_number: 50,
      languages_number: 100,
      description:
        "Fazer turismo na Ásia é fascinante, pois é o destino que muitos viajantes escolhem para vivenciar um verdadeiro choque cultural. As religiões, a gastronomia típica, os costumes e a maneira de viver dos asiáticos, contrastam bastante com o estilo de vida do ocidente são fatores que atraem turistas de todas as partes do planeta, principalmente europeus.",
    },
    {
      id: "5",
      title: "África",
      subtitle: "O berço do mundo",
      src: "https://agitintercambio.com.br/wp-content/uploads/2021/09/BANNER-AFRICA-DO-SUL@2x-1.jpg",
      countries_number: 54,
      languages_number: 3000,
      description:
        "As religiões, a gastronomia típica, os costumes e a maneira de viver dos asiáticos, contrastam bastante com o estilo de vida do ocidente são fatores que atraem turistas de todas as partes do planeta, principalmente europeus.",
    },
    {
      id: "6",
      title: "Oceania",
      subtitle: "O continente arquipélago",
      src: "https://www.infoescola.com/wp-content/uploads/2016/09/economia-oceania-273380090.jpg",
      countries_number: 16,
      languages_number: 18,
      description:
        "Uma das curiosidades da Oceania é que esse continente já foi tratado como o “fim do mundo”, devido à distância da Europa e das Américas. A sorte (nossa!), é claro, é que hoje em dia há diversas rotas para o continente. O que faz com que o turismo na Oceania seja super viável e não pare de crescer. A Oceania é formada por 20 mil ilhas e atóis. No total, a região tem 9 milhões de km² de paisagens paradisíacas, tradições de civilizações aborígenes e cultura europeia, e cidades cheias de atrativos.",
    },
  ];

  if (req.query.name) {
    const responseData = data.find((continent) => {
      return continent.title.toLowerCase() === req.query.name;
    });
    if (responseData) {
      return res.status(200).json(responseData);
    }
  } else {
    return res.status(200).json(data);
  }
}
