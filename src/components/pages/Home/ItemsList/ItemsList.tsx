import KeyValue from "../../../KeyValue";
import Pagination from "../../../pagination";
import Search from "../Search";
import Container from "../../../Container";
import EditItemModal from "./EditItemModal";
import useItemsLogic from "../../../../hooks/pages/useItemsLogic";


function ItemsList() {

  const {
    items, itemSearched, modalInfo, searchHandler, openModalHandler, closeModalHandler, onPaginate
  } = useItemsLogic()

  return (
    <div className='w-11/12 mx-auto my-10'>
      <Search onChange={searchHandler} />

      <Container className='p-4 md:p-10 mt-10'>
        <div className='grid md:grid-cols-2 xl:grid-cols-3  gap-6'>
          {items.length !== 0 && items.map((item: any) => {
            return (
              <div onClick={() => openModalHandler(item)}
                   key={item.id} className='space-y-3 duration-300 cursor-pointer border border-gray-200 hover:border-gray-400 rounded p-3'>
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

      <EditItemModal modalInfo={modalInfo} onClose={closeModalHandler} />
    </div>

  );
}

export default ItemsList;