import type { DrawerStatus } from '@react-navigation/native';
import * as React from 'react';

export default React.createContext<DrawerStatus | undefined>(undefined);
