import useAxios from "../../../../hooks/useAxios";
import {useEffect, useState} from "react";
import KeyValue from "../../../KeyValue";
import Pagination from "../../../pagination";
import Search from "../Search";
import Container from "../../../Container";

function ItemsList() {

  const [itemsRes, getItems] = useAxios()


  const [items, setItems] = useState([])
  const [itemSearched, setItemSearched] = useState<null | []>(null)
  const [page, setPage] = useState<null | number>(null)


  useEffect(function () {
    getItems({url: '/todos'}).then(response => {
      setItemSearched(response)
    })
  }, [])

  useEffect(function () {
    if (itemSearched !== null) setPage(1)
  }, [itemSearched])

  useEffect(function () {
    if (page !== null && itemSearched !== null) {
      setItems(itemSearched.slice(0, (page * 12)))
    }
  }, [page, itemSearched])

  function onPaginate() {
    setPage(prev => prev !== null ? prev + 1 : null)
  }

  function searchHandler(e:any) {
    const searchValue = e.target.value
    const searched = itemsRes?.data?.filter((item:any) => item.title.includes(searchValue))
    setItemSearched(searched)
  }

  return (
    <div className='w-11/12 mx-auto my-10'>
      <Search onChange={searchHandler} />

      <Container className='p-10 mt-10'>
        <div className='grid grid-cols-3  gap-6'>
          {items.length !== 0 && items.map((item: any) => {
            return (
              <div key={item.id} className='space-y-3 border border-gray-200 rounded p-3'>
                {Object.keys(item).map((itemKey: string) => {
                  return (
                    <KeyValue title={itemKey} value={item[itemKey].toString()} direction='ltr'/>
                  )
                })}
              </div>
            )
          })}
        </div>

        <Pagination
          havePaginate={itemSearched?.length !== items?.length}
          onClickHandler={onPaginate}
        />
      </Container>
    </div>

  );
}

export default ItemsList;