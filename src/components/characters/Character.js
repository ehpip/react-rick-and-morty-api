import React from "react";
import {
  Card,
  Text,
  Image,
  Group,
  Badge,
  useMantineTheme,
  Button,
} from "@mantine/core";

export default function Character({ character }) {
  const theme = useMantineTheme();

  return (
    <div>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={character.image} alt={character.name} />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{character.name}</Text>
          <Badge>{character.status}</Badge>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          status: {character.status}
        </Text>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          species: {character.species}
        </Text>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          location: {character.location.name}
        </Text>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          origin: {character.origin.name}
        </Text>
        <Text size="sm" style={{ lineHeight: 1.5 }}>
          gender: {character.gender}
        </Text>

        <Button fullWidth style={{ marginTop: 14 }}>
          Details
        </Button>
      </Card>
    </div>
  );
}
