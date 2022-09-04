import { Autocomplete, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
export function Search() {
  return (
    <Autocomplete
      icon={<IconSearch size={20} stroke={2} color="black" />}
      variant="filled"
      radius="xl"
      size="lg"
      height={40}
      data={['no', 'hay', 'nada', 'todavia']}
      styles={{
        input: { background: '#D9D9D9', minWidth: 324 },
      }}
    />
  );
}
