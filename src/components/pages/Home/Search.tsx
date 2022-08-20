import Container from "../../Container";
import SearchIcon from "../../svg/SearchIcon";

type Props = {
  onChange: (e:any) => void
}

function Search({onChange}: Props) {
  return (
    <Container className='flex items-center justify-between w-full px-10 py-4'>
      <input
        onChange={onChange}
        className='w-full outline-none'
        placeholder='جستجو بر اساس title'
      />

      <div className='w-5 text-gray-400'>
        <SearchIcon/>
      </div>
    </Container>
  );
}

export default Search;