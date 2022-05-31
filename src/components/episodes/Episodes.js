import React, { useState } from "react";
import { useQuery } from "react-query";
import { Grid, Title, Pagination } from "@mantine/core";
import Episode from "./Episode";

export default function Episodes() {
  const [page, setPage] = useState(1);

  const fetchEpisodes = async ({ queryKey }) => {
    const respose = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${queryKey[1]}`
    );
    return respose.json();
  };

  const { data, isLoading, isError } = useQuery(
    ["episodes", page],
    fetchEpisodes,
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
        {data.results.map((episode) => (
          <Grid.Col span={4} key={episode.id}>
            <Episode episode={episode} />
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
