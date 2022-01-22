import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any = {}) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}

export function push(...args: any[]) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.dispatch(StackActions.push(...args));
  }
}
