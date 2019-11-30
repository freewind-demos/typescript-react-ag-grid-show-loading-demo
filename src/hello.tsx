import React, {useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {ColDef} from 'ag-grid-community';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';


const columnDefs: ColDef[] = [{
  headerName: "Make", field: "make", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Model", field: "model", sortable: true, filter: true, editable: true, width: 100
}, {
  headerName: "Price", field: "price", sortable: true, filter: true, editable: true, width: 100
}]

type Row = {
  make: string,
  model: string,
  price: number
};

const defaultData = [{
  make: "Toyota", model: "Celica", price: 35000
}, {
  make: "Ford", model: "Mondeo", price: 32000
}, {
  make: "Porsche", model: "Boxter", price: 72000
}];

export default function Hello() {

  const [rowData, setRowData] = useState<Row[] | undefined>(defaultData)

  function reload() {
    setRowData(undefined);
    setTimeout(() => {
      setRowData(defaultData)
    }, 1000);
  }

  return <div>
    <h1>Hello React-AgGrid</h1>

    <div className="ag-theme-balham">
      <div>
        <button onClick={() => reload()}>Reload</button>
      </div>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData as any}
        onRowDataChanged={(event) => {
          if (rowData === undefined) {
            event.api.showLoadingOverlay();
          } else {
            event.api.closeToolPanel();
          }
        }}>
      </AgGridReact>
    </div>
  </div>
};
