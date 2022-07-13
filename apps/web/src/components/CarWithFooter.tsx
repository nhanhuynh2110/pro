import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  DEFAULT_THEME,
  Group,
  Image,
  Text,
} from "@mantine/core";
import { IconBookmark, IconHeart, IconShare } from "@tabler/icons";
import { FC } from "react";

type CardWithFooterProp = {
  title: string;
  description: string;
  image: string;
  info: string;
};

export const CardWithFooter: FC<CardWithFooterProp> = ({
  title,
  description,
  image,
  info,
}) => {
  return (
    <Card withBorder p="lg" className="bg-white shadow-sm">
      <Card.Section mb="sm">
        <Image
          src={image}
          alt={title}
          height={180}
        />
      </Card.Section>

      <Badge
        classNames={{
          root: "w-full !m-0",
          inner: "truncate w-full space-x-4 lowercase",
        }}
        color="green"
      >
        <span className="font-semibold">Đang mở bán</span>
        <span>-</span>
        <span>20/11/2022</span>
      </Badge>
      <div className="space-y-2 py-2">
        <Text
          weight={700}
          style={{
            fontFamily: `Greycliff CF, ${DEFAULT_THEME.fontFamily}`,
          }}
          className="line-clamp-1 text-sm"
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: `Greycliff CF, ${DEFAULT_THEME.fontFamily}`,
          }}
          className="line-clamp-2 text-xs"
        >
          {description}
        </Text>
      </div>

      <Card.Section
        className="h-12"
        style={{
          padding: `${DEFAULT_THEME.spacing.xs}px ${DEFAULT_THEME.spacing.lg}px`,
          marginTop: DEFAULT_THEME.spacing.md,
          borderTop: `1px solid ${
            DEFAULT_THEME.colorScheme === "dark"
              ? DEFAULT_THEME.colors.dark[5]
              : DEFAULT_THEME.colors.gray[2]
          }`,
        }}
      >
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {info}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} color={DEFAULT_THEME.colors.red[6]} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark size={18} color={DEFAULT_THEME.colors.yellow[6]} />
            </ActionIcon>
            <ActionIcon>
              <IconShare size={16} color={DEFAULT_THEME.colors.blue[6]} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
