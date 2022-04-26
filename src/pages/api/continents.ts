// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { SlideProps } from "../../types/Slides";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SlideProps[]>
) {
  const data: SlideProps[] = [
    {
      id: "1",
      title: "Europa",
      subtitle: "O continente mais antigo",
      src: "https://www.earthtrekkers.com/wp-content/uploads/2020/06/Europe-Itinerary-Photo.jpg",
    },
    {
      id: "2",
      title: "America do Norte",
      subtitle: "O continente do EUA",
      src: "https://bigseventravel.com/wp-content/uploads/2019/01/patrick-tomasso-40308-unsplash-1920x1440.jpg",
    },
    {
      id: "3",
      title: "America do Sul",
      subtitle: "O continente emergente",
      src: "https://www.wendywutours.co.uk/resource/upload/1020/banner-south-america.jpg",
    },
    {
      id: "4",
      title: "Ásia",
      subtitle: "Continente da tecnologia",
      src: "https://www.royalcaribbean.com.br/wp-content/uploads/2017/09/asia-2.jpg",
    },
    {
      id: "5",
      title: "Africa",
      subtitle: "O berço do mundo",
      src: "https://agitintercambio.com.br/wp-content/uploads/2021/09/BANNER-AFRICA-DO-SUL@2x-1.jpg",
    },
    {
      id: "6",
      title: "Oceania",
      subtitle: "O continente arquipélago",
      src: "https://www.infoescola.com/wp-content/uploads/2016/09/economia-oceania-273380090.jpg",
    },
  ];
  res.status(200).json(data);
}
