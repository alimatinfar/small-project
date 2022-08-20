import useAxios from "../../../../hooks/useAxios";
import {useEffect, useState} from "react";
import Typography from "../../../UI/Typography/Typography";
import KeyValue from "../../../KeyValue";

function ItemsList() {

  const [itemsRes, getItems] = useAxios()
  const [items, setItems] = useState([])
  console.log('items', itemsRes)
  useEffect(function () {
    getItems({url: '/todos'}).then(response => {
      setItems(response)
    })
  }, [])

  return (
    <div className='grid grid-cols-3 bg-white shadow w-11/12 mx-auto rounded mt-20 p-10 gap-6'>
      {items.length !== 0 && items.map((item:any) => {
        return (
          <div key={item.id} className='space-y-3 border border-gray-200 rounded p-3'>
            {Object.keys(item).map((itemKey:string) => {
              return (
                <KeyValue title={itemKey} value={item[itemKey].toString()} direction='ltr' />
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default ItemsList;