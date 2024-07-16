export type Props = {
  onClick: (index: number) => void;
};

export default function Tabs({ onClick }: Props) {
  return (
    <nav>
      <ul>
        <li><a onClick={() => onClick(1)}>Tab 1</a></li>
        <li><a onClick={() => onClick(2)}>Tab 2</a></li>
        <li><a onClick={() => onClick(3)}>Tab 3</a></li>
        <li><a onClick={() => onClick(4)}>Tab 4</a></li>
      </ul>
    </nav>
  );
}
