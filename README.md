# choco-app

Библиотека для взаимодействия веб-приложений с Choco SuperApp. Работает только в браузерном окружении.

## Установка

```console
npm install choco-app
```

## Share

### `shareFile`

Type: `(base64: string, filename?: string, mime?: string) => void`<br>

Поделиться файлом формата Base64.

```typescript
import { shareFile } from 'choco-app';

shareFile('data:image/png;base64', 'name', 'image/png');
```

### `shareImage`

Type: `(base64: string, filename?: string, mime?: string) => void`<br>

Поделиться картинкой формата Base64.

```typescript
import { shareImage } from 'choco-app';

shareImage('data:image/png;base64', 'name', 'image/png');
```

### `shareText`

Type: `(text: string) => void`<br>

Поделиться текстом.

```typescript
import { shareText } from 'choco-app';

shareText('Hello World!');
```

### `clearCache`

Type: `() => void`<br>

Очищает кэш приложения.

```typescript
import { clearCache } from 'choco-app';

clearCache();
```

### `backToApplication`

Type: `() => void`<br>

Выход из веб-приложения обратно в нативное.

```typescript
import { backToApplication } from 'choco-app';

backToApplication();
```

### `applicationBecomeActive`

Type: `(callback: Function) => void`<br>

Принимает функцию, которую стоит выполнить при выходе приложения из фона.

```typescript
import { applicationBecomeActive } from 'choco-app';

applicationBecomeActive(() => console.log('Вышел из фона'));
```

### `hapticSelection`

Type: `() => void`<br>

Вызывает нативную вибрацию.

```typescript
import { hapticSelection } from 'choco-app';

hapticSelection();
```

### `isLocationEnabled`

Type: `() => void`<br>

Доступна ли геопозиция при использовании приложения.

```typescript
import { isLocationEnabled } from 'choco-app';

isLocationEnabled();
```

### `onKeyboardClosed`

Type: `(callback: Function) => void`<br>

Принимает функцию, которую стоит выполнить при закрытии клавиатуры.

```typescript
import { onKeyboardClosed } from 'choco-app';

onKeyboardClosed(() => console.log('Вышел из фона'));
```

### `reload`

Type: `() => void`<br>

Обновление страницы с передачей в query следующих параметров: track_id, code, device_id, session_id и т.д.

```typescript
import { reload } from 'choco-app';

reload();
```
