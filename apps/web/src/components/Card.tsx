import { Avatar, Card, DEFAULT_THEME, Group, Image, Text } from "@mantine/core";

export const CardTemplate = () => {
  return (
    <Card radius="sm" p={0}>
      <Group noWrap spacing={0}>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={140}
          width={140}
          className="border-r-0"
        />
        <div className="p-2">
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            TECHNOLOGY
          </Text>
          <Text
            className="font-semibold"
            mt="xs"
            mb="md"
            style={{
              fontFamily: `Greycliff CF, ${DEFAULT_THEME.fontFamily}`,
              lineHeight: 1.2,
            }}
          >
            The best laptop for Frontend engineers in 2022
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Avatar
                size={20}
                src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
              />
              <Text size="xs">Elsa Brown</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text size="xs" color="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
};
