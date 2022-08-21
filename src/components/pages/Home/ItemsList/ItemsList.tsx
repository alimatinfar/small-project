import {useEffect, useState} from "react";
import KeyValue from "../../../KeyValue";
import Pagination from "../../../pagination";
import Search from "../Search";
import Container from "../../../Container";
import {useItems, useSetItemsSearchedCount} from "../../../../contexes/ItemsContext";


function ItemsList() {

  const itemsRes = useItems()
  const [, setItemsSearchedCountHandler] = useSetItemsSearchedCount()

  const [items, setItems] = useState([])
  const [itemSearched, setItemSearched] = useState<null | []>(null)
  const [page, setPage] = useState<null | number>(null)


  useEffect(function () {
    if (itemsRes.data) {
      setItemSearched(itemsRes.data)
    }
  }, [itemsRes])

  useEffect(function () {
    if (itemSearched !== null) {
      setItemsSearchedCountHandler(itemSearched.length)
      setPage(1)
    }
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
              <div key={item.id} className='space-y-3 duration-300 cursor-pointer border border-gray-200 hover:border-gray-400 rounded p-3'>
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