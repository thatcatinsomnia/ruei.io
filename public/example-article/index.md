---
title: "React 進階概念：效能優化與最佳實踐"
publishAt: "2024-07-18"
---

![React Logo](https://via.placeholder.com/800x400 "React Logo")

React 作為前端開發的主流框架之一，不斷evolving與推出新的特性。本文將探討一些 React 的進階概念和最佳實踐，幫助您優化應用程式效能，提升開發效率。

## 目錄
1. [使用 useMemo 和 useCallback](#使用-usememo-和-usecallback)
2. [React.lazy 和 Suspense 實現程式碼分割](#reactlazy-和-suspense-實現程式碼分割)
3. [自定義 Hooks](#自定義-hooks)
4. [效能優化技巧](#效能優化技巧)
5. [TypeScript 與 React](#typescript-與-react)

## 使用 useMemo 和 useCallback

`useMemo` 和 `useCallback` 是 React 提供的兩個強大的 Hooks，用於優化效能。

### useMemo

`useMemo` 用於記憶計算結果，避免不必要的重複計算。

```jsx
import React, { useMemo } from 'react';

function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return expensiveCalculation(data);
  }, [data]);

  return <div>{processedData}</div>;
}
```

### useCallback

`useCallback` 用於記憶函數，避免不必要的重新渲染。

```jsx
import React, { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}
```

## React.lazy 和 Suspense 實現程式碼分割

使用 `React.lazy` 和 `Suspense` 可以實現程式碼分割，提升應用程式的載入速度。

```jsx
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```

## 自定義 Hooks

自定義 Hooks 是復用狀態邏輯的好方法。以下是一個簡單的例子：

```jsx
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}
```

## 效能優化技巧

- **使用 React.memo**：用於避免不必要的重新渲染。
- **避免內聯函數**：在渲染方法中定義的內聯函數會在每次渲染時重新創建。
- **使用虛擬列表**：當需要渲染大量數據時，考慮使用虛擬列表。

## TypeScript 與 React

TypeScript 可以提供更好的型別檢查和開發體驗。以下是一個使用 TypeScript 的 React 組件例子：

```tsx
import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
```

## 結語

掌握這些進階概念和最佳實踐，能夠幫助您開發出更高效、更易維護的 React 應用程式。記住，效能優化應該是持續的過程，而不是一次性的工作。

---

您對這些 React 進階概念有什麼看法？您在實際專案中使用過哪些技巧？歡迎在下方留言分享您的經驗！

## 參考資料

1. [React 官方文件](https://reactjs.org/docs/getting-started.html)
2. [React Hooks API 參考](https://reactjs.org/docs/hooks-reference.html)
3. [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
