import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { useEffect, useState } from 'react';

export function Search() {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (value === 'aleph') {
window.location.href =
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxiaWJsaWJyb3NwZGZ8Z3g6NWUyOTU3NzQxYmM3NWM1Yg';
}
  }, [value]);

  return (
    <Autocomplete
      value={value}
      onChange={setValue}
      icon={<IconSearch size={20} stroke={2} color="black" />}
      variant="filled"
      radius="xl"
      size="lg"
      height={40}
      data={[]}
      styles={{
        input: { background: '#D9D9D9', minWidth: 324, color: 'black' },
      }}
    />
  );
}
