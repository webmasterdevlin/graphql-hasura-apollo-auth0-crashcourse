import { getInstance } from "./authWrapper";

export const authGuard = (to, from, next) => {
    const authService = getInstance();

    const fn = () => {
        if (authService.isAuthenticated) {
            console.log("isAuthenticated: ", authService.isAuthenticated)
            return next();
        }
        console.log("isAuthenticated: ", authService.isAuthenticated)
        authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
    };

    if (!authService.loading) {
        return fn();
    }

    authService.$watch("loading", loading => {
        console.log("$watch")
        if (loading === false) {
            return fn();
        }
    });
};