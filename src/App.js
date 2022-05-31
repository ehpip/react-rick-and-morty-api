import { QueryClientProvider, QueryClient } from "react-query";
import { Container, Title } from "@mantine/core";
import { Routes, Route } from "react-router-dom";
import Characters from "./components/characters/Characters";
import Places from "./components/places/Places";
import Episodes from "./components/episodes/Episodes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container sx={{ marginTop: 20 }}>
        <Title>Rick and Morty API</Title>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Characters />
              </>
            }
          />
          <Route path="places" element={<Places />} />
          <Route path="episodes" element={<Episodes />} />
        </Routes>
      </Container>
    </QueryClientProvider>
  );
}

export default App;
