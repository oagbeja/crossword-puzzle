const displayTable = (arr, itemsWorked) => {
  return (
    <div className="row ">
      <div className="col-sm-12 card">
        <table className="table table-bordered  table-striped ">
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
      </div>
      <div className="col-sm-3 mt-3 card">
        <table className="table table-bordered table-striped">
          <thead class="thead-dark bg-light ">
            <tr>
              <th scope="col">Words</th>
            </tr>
          </thead>
          {itemsWorked.map((el, idx) => {
            return (
              <tr key={`TrW${idx}`}>
                <td>{el}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default displayTable;
