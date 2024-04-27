import { Button } from "@mui/material";

const CarBtn = ({ onClickHandle, value, title }) => {
  return (
    <Button onClick={onClickHandle} value={value} variant="outlined" sx={{marginRight: '6px', color: '#000', marginTop:'6px', backgroundColor:'#fff'}}>
      {title}
    </Button>
  );
};

export default CarBtn;
