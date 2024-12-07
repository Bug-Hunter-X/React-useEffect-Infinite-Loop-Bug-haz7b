```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Correct logic: Use useRef to avoid triggering additional renders
    countRef.current++;
    setCount(countRef.current);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```