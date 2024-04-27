import { Pagination } from "@mui/material";

const CarPagination = ({ prodPerPage, totalProd, paginate }) => {
  const pageCount = Math.ceil(totalProd / prodPerPage);
  const handlePageChange = (event, page) => {
    paginate(page);
  };
  return (
    <div>
      <Pagination
        count={pageCount}
        variant="outlined"
        color="primary"
        onChange={handlePageChange}
      />
    </div>
  );
};

export default CarPagination;
