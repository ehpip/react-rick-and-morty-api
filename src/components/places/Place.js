import React from "react";
import { Card, Text, Group, Badge, useMantineTheme } from "@mantine/core";

export default function Character({ place }) {
  const theme = useMantineTheme();

  return (
    <div>
      <Card shadow="sm" p="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{place.name}</Text>
          <Badge>{place.type}</Badge>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5 }}>
          dimension: {place.dimension}
        </Text>
      </Card>
    </div>
  );
}
