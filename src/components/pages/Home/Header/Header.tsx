import KeyValue from "../../../KeyValue";
import {useSetItemsSearchedCount} from "../../../../contexes/ItemsContext";

type Props = {
  userInfo: any
}

function Header({userInfo}:Props) {
  const [count, ] = useSetItemsSearchedCount()

  return (
    <div className='bg-white shadow h-16 px-10 flex items-center justify-between'>
      <KeyValue
        title='نام کاربری' value={userInfo?.username}
        titleSize='md' valueSize='lg'
      />
      <KeyValue
        title='تعداد نتایج' value={count | 0}
        titleSize='md' valueSize='lg'
      />
    </div>
  );
}

export default Header;