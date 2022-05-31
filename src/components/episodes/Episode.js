import React from "react";
import { Card, Text, Group, Badge, useMantineTheme } from "@mantine/core";

export default function Episode({ episode }) {
  const theme = useMantineTheme();

  return (
    <div>
      <Card shadow="sm" p="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{episode.name}</Text>
          <Badge>{episode.episode}</Badge>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          episode: {episode.air_date}
        </Text>
      </Card>
    </div>
  );
}
