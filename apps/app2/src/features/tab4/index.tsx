export default function Tab4({ isAuthenticated, onLink }: { isAuthenticated: boolean, onLink: (index: number) => void }) {
  return (
    <div>
      <h1>Tab 4 (App 2)</h1>
      <p>isAuthenticated: { isAuthenticated ? "true" : "false" }</p>

      <ul>
        <li><a onClick={() => onLink(1)}>Go to Tab 1</a></li>
        <li><a onClick={() => onLink(2)}>Go to Tab 2</a></li>
        <li><a onClick={() => onLink(3)}>Go to Tab 3</a></li>
      </ul>
    </div>
  );
}
