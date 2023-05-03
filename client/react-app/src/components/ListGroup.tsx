interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  return (
    <ul className="list-group w-50">
      {items.map((i) => (
        <li key={i}className="list-group-item">{i}</li>
      ))}
    </ul>
  );
}

export default ListGroup;
