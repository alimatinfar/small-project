import KeyValue from "../../../KeyValue";

type Props = {
  userInfo: any
}

function Header({userInfo}:Props) {
  return (
    <div className='bg-white shadow h-16 px-10 flex items-center justify-between'>
      <KeyValue
        title='نام کاربری' value={userInfo?.username}
        titleSize='md' valueSize='lg'
      />
      <KeyValue
        title='تعداد نتایج' value={100}
        titleSize='md' valueSize='lg'
      />
    </div>
  );
}

export default Header;