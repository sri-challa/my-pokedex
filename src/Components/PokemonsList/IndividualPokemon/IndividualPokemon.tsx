import { HStack, VStack, Text, Box, Button } from "@chakra-ui/react";
import { usePokemon } from "../../../Services/api/useFetchPokemon";

import { Capitalize } from "../../../utils/capitalize";
import PokemonTypesList from "../../atoms/PokemonTypesList/PokemonTypesList";
import AnimatedPokemonImageWithBackground from "../../atoms/AnimatedPokemonImageWithBackground/AnimatedPokemonImageWithBackground";
import AnimatedImage from "../../atoms/AnimatedImage/AnimatedImage";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IndividualPokemonProps {
  name: string;
}
export default function IndividualPokemon({ name }: IndividualPokemonProps) {
  const { isLoading, data, isError, refetch } = usePokemon(name);
  const navigate = useNavigate();

  return (
    <>
      {isLoading && (
        <InividualPokemonBody
          id="#0"
          name="Loading"
          body={
            <>
              <AnimatedImage source="/assets/pokeBall.png" />
              <Text textStyle="content">Hang Tight</Text>
            </>
          }
        />
      )}
      {isError && (
        <InividualPokemonBody
          id="#0"
          name="Something went wrong"
          body={
            <>
              <AnimatedImage source="/assets/error.png" />
              <Button
                colorScheme="teal"
                onClick={() => {
                  refetch();
                }}
              >
                Retry
              </Button>
            </>
          }
        />
      )}
      {data && (
        <Box
          sx={{
            padding: "1rem",
            width: "100%",
            border: "solid 1px gray",
            borderRadius: "16px",
            "&: hover": {
              boxShadow: `0 4px 8px -4px black`,
            },
          }}
          onClick={() => {
            navigate(`/pokemon/${data.id}`);
          }}
          as="button"
        >
          <InividualPokemonBody
            id={`#${data.id}`}
            name={Capitalize(data.name)}
            body={
              <>
                <Box
                  bg={`${data.types[0].name}.100`}
                  borderRadius="16px"
                  width="100%"
                >
                  <AnimatedPokemonImageWithBackground
                    id={data.id}
                    name={data.name}
                    backgroundColor={`${data.types[0].name}.100`}
                    maxHeight={"250px"}
                  />
                </Box>
                <PokemonTypesList types={data.types} />
              </>
            }
          />
        </Box>
      )}
    </>
  );
}

function InividualPokemonBody({
  id,
  name,
  body,
}: {
  id: string;
  name: string;
  body: React.ReactNode;
}) {
  return (
    <VStack spacing={2}>
      <HStack sx={{ justifyContent: "space-between", width: "100%" }}>
        <Text textStyle="subHeading">{id}</Text>
        <Text textStyle="heading">{name}</Text>
      </HStack>
      {body}
    </VStack>
  );
}
