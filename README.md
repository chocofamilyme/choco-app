# choco-app

Библиотека для взаимодействия веб-приложений с Choco SuperApp. Работает только в браузерном окружении.

## Установка

```console
npm install choco-app
```

## Share

### `shareFile`

Type: `(base64: string, filename?: string, mime?: string) => void`

Поделиться файлом формата Base64.

#### base64

Type: `string`
Картинка в формате Base64.

#### filename

Type: `string`
Название файла.

#### mime

Type: `string`
Тип файла.

```typescript
import { shareFile } from 'choco-app';

shareFile('data:image/png;base64', 'name', 'image/png');
```

### `shareImage`

Type: `(base64: string, filename?: string, mime?: string) => void`

Поделиться картинкой формата Base64.

#### base64

Type: `string`
Картинка в формате Base64.

#### filename

Type: `string`
Название файла.

#### mime

Type: `string`
Тип файла.

```typescript
import { shareImage } from 'choco-app';

shareImage('data:image/png;base64', 'name', 'image/png');
```

### `shareText`

Type: `(text: string) => void`

Поделиться текстом.

#### text

Type: `string`
Передаваемый текст.

```typescript
import { shareText } from 'choco-app';

shareText('Hello World!');
```

## Остальное

### `clearCache`

Type: `() => void`

Очищает кэш приложения.

```typescript
import { clearCache } from 'choco-app';

clearCache();
```

### `backToApplication`

Type: `() => void`

Выход из веб-приложения обратно в нативное.

```typescript
import { backToApplication } from 'choco-app';

backToApplication();
```

### `applicationBecomeActive`

Type: `(callback: Function) => void`

Принимает функцию, которую стоит выполнить при выходе приложения из фона.

#### callback

Type: `Function`
Любая функция.

```typescript
import { applicationBecomeActive } from 'choco-app';

applicationBecomeActive(() => console.log('Вышел из фона'));
```

### `hapticSelection`

Type: `() => void`

Вызывает нативную вибрацию.

```typescript
import { hapticSelection } from 'choco-app';

hapticSelection();
```

### `isLocationEnabled`

Type: `() => boolean`

Доступна ли геопозиция при использовании приложения.

```typescript
import { isLocationEnabled } from 'choco-app';

isLocationEnabled();
```

### `onKeyboardClosed`

Type: `(callback: Function) => void`

Принимает функцию, которую стоит выполнить при закрытии клавиатуры.

#### callback

Type: `Function`
Любая функция.

```typescript
import { onKeyboardClosed } from 'choco-app';

onKeyboardClosed(() => console.log('Вышел из фона'));
```

### `reload`

Type: `() => void`

Обновление страницы с передачей в query следующих параметров: track_id, code, device_id, session_id и т.д.

```typescript
import { reload } from 'choco-app';

reload();
```

### `getRefferalCode`

Type: `() => Promise<IRefferalCode>`

Получение реферального кода.

```typescript
import { getRefferalCode } from 'choco-app';

getRefferalCode().then(code => console.log(`Реферальный код: ${code}`));
```

### `openQR`

Type: `() => Promise<string>`

Нативное считывание QR-кода.

```typescript
import { openQR } from 'choco-app';

openQR().then(text => console.log(`QR-код: ${text}`));
```

### `pay`

Type: `(deeplink: string) => Promise<'success' | 'closed'>`

Вызов оплаты через deeplink.

#### deeplink

Type: `string`
Ссылка на оплату в приложении.

```typescript
import { pay } from 'choco-app';

pay('ссылка на оплату').then(status => {
    if (status === 'success') {
        console.log('Оплата прошла успешно')
    } else {
        console.log('Модальное окно оплаты закрыли')
    }
}));
```

### `requestGeoPermissionStatus`

Type: `() => Promise<GeoStatus>`

Получение статуса геопозиции.

```typescript
import { requestGeoPermissionStatus } from 'choco-app';

requestGeoPermissionStatus().then(status => {
    if (status === 'granted') {
        // Получить гео
    }
}));
```

### `authorize`

Type: `(clientId: string, type: 'code' | 'trackId', redirectUri?: string, state?: string) => Promise<string | undefined>`

Авторизация пользователя по clientId.
Если пользователь не авторизован в нативном приложении, откроется окно авторизации с вводом номера телефона и кода.
В другом случае, метод сразу вернет ответ.

#### clientId

Type: `string`

Идентификатор вашего приложения.

#### type

Type: `'code' | 'trackId'`

Тип авторизации.

#### redirectUri

Type: `string`

Используется, если авторизация через code. На этот адрес возвращается код авторизации. Необходимо получить доступы у дежурного.

#### state

Type: `string`

Случайная строка, которая вернется вместе с кодом авторизации, чтобы приложение смогло убедиться, что ответ пришел не от стороннего сервиса.

> :warning: **Вызов метода по type='code'**: вернет ошибку, если авторизация по code отсутствует в нативном приложении. Необходимо сделать обработку на ошибку с message NOT_SUPPORTED.

> :warning: **Обработка ошибок**: В новых версиях приложения необходимо обрабатывать ошибки, отличные от NOT_SUPPORTED.

```typescript
import { authorize } from 'choco-app';

// Авторизация по trackId
authorize('11111111', 'trackId').then(trackId => {
    if (trackId) {
        // Сделать запрос на авторизацию
    }
}));

// Авторизация по code
authorize('11111111', 'code')
    .then(code => {
        if (code) {
            // Сделать запрос на авторизацию
        }
    })
    .catch(error => {
        if (error.message === 'NOT_SUPPORTED') {
            // Показать ошибку или вызвать authorize с типом trackId
        }
    })
```

#### `openBarcodeScanner`

Type: `(formats: BarcodeFormat[], instructions: string[], actionText?: string) => Promise<string | 'manual'>`

Открывает сканер штрихкодов. Возвращает строку с результатом сканирования или 'manual', если пользователь открыл ручной ввод.

#### formats

Type: `BarcodeFormat[]`

Массив форматов штрихкодов, которые нужно сканировать. По-умолчанию ['EAN_13', 'EAN_8', 'CODE_128'].

#### instructions

Type: `string[]`

Массив инструкций, которые будут показаны пользователю. По-умолчанию пустой массив.

#### actionText

Type: `string`

Текст кнопки внутри сканера. Опциональный параметр.

```typescript
import { openBarcodeScanner } from 'choco-app';
import { BarcodeFormat } from 'choco-app/dist/ts/enum';

openBarcodeScanner([BarcodeFormat.EAN_13, BarcodeFormat.EAN_8], ['Холодильник открыт', 'Возьмите товар', 'Наведите камеру на штрихкод'], 'Ввести штрихкод вручную').then(result => {
    if (result === 'manual') {
        // Показать ручной ввод
    } else {
        // Успешное сканирование, штрихкод в result
    }
}));
```

#### `isCameraPermissionEnabled`

Type: `() => Promise<boolean>`

Проверяет, есть ли разрешение на использование камеры.

```typescript
import { isCameraPermissionEnabled } from 'choco-app';

isCameraPermissionEnabled().then(isEnabled => {
    if (isEnabled) {
        // Разрешение есть
    } else {
        // Разрешения нет
    }
}));
```

#### `logAmplitudeEvent`

Type: `(event: string, body: unknown) => boolean`

Логирует событие в Amplitude.

#### event

Type: `string`

Название ивента аналитики.

#### body

Свойства ивента.

```typescript
import { logAmplitudeEvent } from 'choco-app';

logAmplitudeEvent('event', { data: 'data' });
```

### `getNotificationStatus`

Type: `() => Promise<NotificationStatus>`<br>

Получение статуса о разрешенности уведомлений.

Статусы бывают granted | notDetermined | denied

```typescript
import { getNotificationStatus } from 'choco-app';

getNotificationStatus().then(status => {
    if (status === 'granted') {
        // Когда уведомлений разрешены
    }
}));
```

### `requestNotificationStatus`

Type: `() => Promise<NotificationStatus>`<br>

Запрос на статусы о разрешенности уведомлений.
Когда у юзера не определен или заблочен, этот метод отправляет юзера в настройки приложения Choco в телефоне

Статусы бывают granted | notDetermined | denied

```typescript
import { requestNotificationStatus } from 'choco-app';

requestNotificationStatus().then(status => {
    if (status === 'granted') {
        // Когда уведомлений разрешены
    }
});
```

### `toastNotify`

Type: `(body: NotifyBody | string, title?: string, message?: string) => void`<br>

Показывает нативное уведомление в приложении.
Первым параметром принимает либо объект, либо строку, которая является типом NotifyType, вторым параметром может принять заголовок уведомления, а третьим сообщение.

NotifyType может быть 'success' | 'info' | 'warning' | 'error'.
Объект NotifyBody состоит из type (по умолчанию - 'success'), title, message.

```typescript
import { toastNotify } from 'choco-app';

toastNotify({
    type: 'success',
    title: 'Title',
    message: 'Some message'
});

toastNotify('error', 'Title', 'Some message');
```

#### `logAppsflyerEvent`

Type: `(event: string, body: unknown) => boolean`

Логирует событие в appsflyer.

#### event

Type: `string`

Название ивента appsflyer.

#### body

Свойства ивента.

```typescript
import { logAppsflyerEvent } from 'choco-app';

logAppsflyerEvent('event', { ... });
```