import { createGlobalState } from '.';

type UserState = {
    name: string;
    isSignedIn: boolean;
};

export const useUserState = createGlobalState<UserState>('user', {
    name: 'Darius',
    isSignedIn: true,
});


export const useToggle = createGlobalState<boolean>('toggle', false);

const theme: string = 'Dark';


export const usePostState = createGlobalState<string>('post', theme);