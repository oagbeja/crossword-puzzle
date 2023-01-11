const displayTable = (arr, itemsWorked) => {
  return (
    <table>
      {arr.map((el, idx) => {
        return (
          <tr key={`Tr${idx}`}>
            {el.map((elm, idxm) => {
              return <td key={`Td${idxm}`}>{elm}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};
