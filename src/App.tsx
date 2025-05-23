import { Router } from './router/Router';
import { Provider } from './Provider';

export function App() {
    return (
        <Provider>
            <Router />
        </Provider>
    );
}
