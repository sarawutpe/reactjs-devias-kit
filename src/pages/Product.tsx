import { Box, Container, Grid, Pagination } from "@mui/material";
import { products } from "../__mocks__/products";
import { ProductResult } from "../__mocks__/type";
import { ProductListToolbar } from "../components/Product/ProductListToolbar";
import { ProductCard } from "../components/Product/ProductCard";

const Product: React.FC<any> = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product: ProductResult) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 3,
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

export default Product;
