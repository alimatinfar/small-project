import {useItems, useSetItemsSearchedCount} from "../../contexes/ItemsContext";
import {useEffect, useState} from "react";

function useItemsLogic() {

  const itemsRes = useItems()
  const [, setItemsSearchedCountHandler] = useSetItemsSearchedCount()

  const [items, setItems] = useState([])
  const [itemSearched, setItemSearched] = useState<null | []>(null)
  const [page, setPage] = useState<null | number>(null)

  const [modalInfo, setModalInfo] = useState({open:false, info: null})


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

  function openModalHandler(item:any) {
    setModalInfo({open: true, info: item})
  }

  function closeModalHandler() {
    setModalInfo({open: false, info: null})
  }


  return {
    items, itemSearched, modalInfo, searchHandler, openModalHandler, closeModalHandler, onPaginate
  }
}

export default useItemsLogic;