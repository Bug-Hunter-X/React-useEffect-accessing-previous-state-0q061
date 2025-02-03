```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  useEffect(() => {
    setPrevCount(count); 
    console.log('Previous Count:', prevCount); // Use prevCount
    // Now using prevCount to avoid issues with asynchronous operations
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```