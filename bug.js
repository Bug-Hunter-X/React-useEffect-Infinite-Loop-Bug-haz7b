```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop because every render will change the count
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```