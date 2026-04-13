import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default",
      }}
    >
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 4,
          position: "relative",
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default PageLayout;