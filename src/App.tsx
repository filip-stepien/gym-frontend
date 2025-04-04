import { Router } from './Router';
import { Provider } from './Provider';

export function App() {
    return (
        <Provider>
            <Router />
        </Provider>
    );
}
