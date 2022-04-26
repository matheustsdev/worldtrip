import { GetServerSideProps } from "next";
import { api } from "../../services/api";
import { CitiesProps } from "../../types/Cards100";

interface ContinentProps {
  countries: {
    quantity: number;
    cities: CitiesProps[];
  };
}

export default function Continent({ countries }: ContinentProps) {
  console.log(countries);

  return (
    <div>
      {countries.cities.map((country) => {
        return <h1 key={country.id}>{country.name}</h1>;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params!;

  const response = await api
    .get(`/countries?continent=${slug}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const countries = await response;

  return {
    props: { countries },
  };
};
