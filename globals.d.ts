import { IRahmetApp, IRahmetWebApp } from './src/ts/interface';

declare global {
    var RahmetApp: IRahmetApp;
    var RahmetWebApp: IRahmetWebApp;
}
