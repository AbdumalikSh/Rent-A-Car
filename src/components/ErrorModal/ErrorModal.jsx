import { Error } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";

const ErrorModal = ({open, onClose, errorMessage}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="error-modal-title"
      aria-describedby="error-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#f8d7da",
          boxShadow: 24,
          p: 4,
          textAlign: "center",
          borderRadius: "25px",
        }}
      >
        <Error sx={{ fontSize: 64, color: "#721c24" }} />
        <Typography variant="h5" sx={{ mt: 2, color: "#721c24" }}>
          Ошибка
        </Typography>
        <Typography sx={{ color: "#721c24" }} id="error-modal-description">
          {errorMessage}
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={onClose}
          sx={{ mt: 3 }}
        >
          ОК
        </Button>
      </Box>
    </Modal>
  );
};

export default ErrorModal