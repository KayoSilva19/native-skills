import { Switch as NativeSwitch } from 'react-native';

import { colors } from '@/styles/colors';
import { ThemeContext } from '@/Provider/ThemeProvider';
import { useContext } from 'react';

function Switch({
  ...props
}: React.ComponentPropsWithoutRef<typeof NativeSwitch>) {

  const { theme } = useContext(ThemeContext);
  return (
    <NativeSwitch
      trackColor={{
        true: colors.green[400],
        false: theme === 'light' ? colors.gray[400] : colors.gray[500],
      }}
      thumbColor={colors.green[500]}
      {...props}
    />
  );
}

export { Switch };
