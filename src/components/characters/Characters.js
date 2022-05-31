import React, { useState } from "react";
import { useQuery } from "react-query";
import { Grid, Title, Pagination } from "@mantine/core";
import Character from "./Character";

export default function Characters() {
  const [page, setPage] = useState(1);

  const fetchCharacters = async ({ queryKey }) => {
    const respose = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return respose.json();
  };

  const { data, isLoading, isError } = useQuery(
    ["characters", page],
    fetchCharacters,
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Title order={3}>Loading...</Title>;
  }

  if (isError) {
    return <Title order={3}>Unable to fetch data</Title>;
  }

  return (
    <div>
      <Pagination
        page={page}
        onChange={setPage}
        total={data.info.pages}
        sx={{ marginTop: 20, marginBottom: 20 }}
      />
      <Grid>
        {data.results.map((character) => (
          <Grid.Col span={4} key={character.id}>
            <Character character={character} />
          </Grid.Col>
        ))}
      </Grid>
      <Pagination
        page={page}
        onChange={setPage}
        total={data.info.pages}
        sx={{ marginTop: 20, marginBottom: 20 }}
      />
    </div>
  );
}
