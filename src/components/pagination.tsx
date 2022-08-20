import Button from "./UI/Button/Button";

type Props = {
  havePaginate: boolean;
  onClickHandler: () => void;
};

function Pagination({havePaginate, onClickHandler}: Props) {
  return havePaginate ? (
    <div className='flex-center w-full py-10'>
      <Button
        onClick={onClickHandler}
        size="lg" type='primary'
      >
        مشاهده بیشتر
      </Button>
    </div>
  ) : null;
};

export default Pagination;
