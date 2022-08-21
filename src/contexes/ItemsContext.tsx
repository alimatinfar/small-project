import React, {ReactNode, useContext, useEffect, useState,} from "react";

import useAxios, {ResponseType} from "../hooks/useAxios";

const ItemsContext = React.createContext<ResponseType>({data: null, error: null, loading: false, status: null})
const SetItemsSearchedCountContext = React.createContext<[number, (count:number) => void]>([0, (count: number) => console.log()])

export function useItems() {
  return useContext(ItemsContext)
}

export function useSetItemsSearchedCount() {
  return useContext(SetItemsSearchedCountContext)
}

type Props = {
  children: ReactNode
}

export function ItemsProvider({children}: Props) {
  const [itemsRes, getItems] = useAxios()
  const [itemsSearchedCount, setItemsSearchedCount] = useState(0)

  useEffect(() => {
    getItems({url: '/todos'})
  }, [])

  function setItemsSearchedCountHandler(count: number) {
    setItemsSearchedCount(count)
  }


  return (
    <ItemsContext.Provider value={itemsRes}>
      <SetItemsSearchedCountContext.Provider value={[itemsSearchedCount, setItemsSearchedCountHandler]}>
        {children}
      </SetItemsSearchedCountContext.Provider>
    </ItemsContext.Provider>
  )
}