import { IRahmetApp, IRahmetWebApp } from './src/ts/interface';

declare global {
    interface Window {
        RahmetApp: IRahmetApp;
        RahmetWebApp: IRahmetWebApp;
    }
}
