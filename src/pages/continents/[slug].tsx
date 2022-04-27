import { GetServerSideProps } from "next";
import { ContinentHero } from "../../components/ContinentHero";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { CitiesProps } from "../../types/Cards100";
import { useContinents } from "../../hooks/useContinents";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ContinentsInfo } from "../../components/ContinentInfos";
import { ContinentProps } from "../../types/Slides";
import { CountryCard } from "../../components/CountryCard";

interface ContinentPageProps {
  cities: {
    continent: any;
    quantity: number;
    cities: CitiesProps[];
  };
  continent: ContinentProps;
}

export default function Continent({ cities, continent }: ContinentPageProps) {
  const { continents } = useContinents();

  return (
    <>
      <Header />
      <ContinentHero continent={continent} />
      <Flex
        as="main"
        px="80px"
        pb="40px"
        color="dark.text"
        w="100%"
        direction="column"
      >
        <Flex py="80px" justify="space-between" w="100%">
          <Text w="600px" textAlign="justify">
            {continent.description}
          </Text>
          <ContinentsInfo
            countries={continent.countries_number}
            languages={continent.languages_number}
            starredCities={cities.quantity}
          />
        </Flex>
        <Text
          fontSize="2.25rem"
          color="dark.text"
          fontWeight="medium"
          mb="40px"
        >
          Cidades +100
        </Text>
        <Grid templateColumns="repeat(4, 256px)" gap="45px">
          {cities.cities.map((city) => {
            return (
              <GridItem key={city.id}>
                <CountryCard city={city} />
              </GridItem>
            );
          })}
        </Grid>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params!;

  const cities = await api
    .get(`/countries?continent=${slug}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const continent = await api
    .get(`/continents?name=${slug}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  const props = {
    cities,
    continent,
  };

  return {
    props,
  };
};
