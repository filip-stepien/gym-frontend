import { Router } from './router';
import { Provider } from './Provider';

export function App() {
    return (
        <Provider>
            <Router />
        </Provider>
    );
}
