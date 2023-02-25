import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SiimilarProducts.module.css";
import { useEffect } from "react";
import { getProducts } from "../../../features/productsSlice";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { yellow } from "@mui/material/colors";

export default function SimilarProducts() {
  const products = useSelector((state) => state.productsReducer.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className={styles.similar_content}>
      <div className={styles.similar_title_text}>Похожие товары</div>
      <TableContainer className={styles.table_container} component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow className={styles.title_table}>
              <TableCell>Наименование</TableCell>
              <TableCell align="right">Размер</TableCell>
              <TableCell align="right">Тип</TableCell>
              <TableCell align="right">Наличие</TableCell>
              <TableCell align="right">Цена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell component="th" scope="row">
                  <a
                    href={"/product/" + product._id}
                    className={styles.product_name}
                  >
                    {product.productName}
                  </a>
                </TableCell>
                <TableCell align="right">{product.tireDiameter}</TableCell>
                <TableCell align="right" vertical-align="middle" sx={{ color: yellow[700] }} >
                  {product.season === "Зима" ? (
                    <AcUnitIcon color="primary" />
                  ) : (
                    <WbSunnyOutlinedIcon sx={{ color: yellow[700] }} />
                  )}
                </TableCell>
                <TableCell align="right">{product.tireDiameter}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
