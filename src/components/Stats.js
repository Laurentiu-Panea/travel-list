export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? "You are all done ✈🌍 !!!"
          : `👜You have ${numItems} number on your list,and you already pack
        ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
