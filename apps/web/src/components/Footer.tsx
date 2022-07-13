import { ActionIcon, Container, DEFAULT_THEME, Group, Text } from "@mantine/core";
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons";
import { ConmpanyIcon } from "./CompanyIcon";

export const Footer = () => {
  return (
    <footer style={{
        marginTop: 120,
        paddingTop: DEFAULT_THEME.spacing.xl * 2,
        paddingBottom: DEFAULT_THEME.spacing.xl * 2,
        backgroundColor: DEFAULT_THEME.colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[6] : DEFAULT_THEME.colors.gray[0],
        borderTop: `1px solid ${
          DEFAULT_THEME.colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[5] : DEFAULT_THEME.colors.gray[2]
        }`,
      }}>
      <Container className='flex justify-between'>
        <div>
          <ConmpanyIcon />
          <Text size="xs" color="dimmed" className='mt-1'>
            Build fully functional accessible web applications faster than ever
          </Text>
        </div>
        <div className='flex flex-wrap'>
            {/* {group}     */}
        </div>
      </Container>
      <Container className='flex justify-between items-center my-8 border-0 border-t border-solid border-t-slate-300'>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};
