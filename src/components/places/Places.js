import React, { useState } from "react";
import { useQuery } from "react-query";
import { Grid, Title, Pagination } from "@mantine/core";
import Place from "./Place";

export default function Places() {
  const [page, setPage] = useState(1);

  const fetchPlaces = async ({ queryKey }) => {
    const respose = await fetch(
      `https://rickandmortyapi.com/api/location?page=${queryKey[1]}`
    );
    return respose.json();
  };

  const { data, isLoading, isError } = useQuery(["places", page], fetchPlaces, {
    keepPreviousData: true,
  });

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
        {data.results.map((place) => (
          <Grid.Col span={4} key={place.id}>
            <Place place={place} />
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
