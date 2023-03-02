import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { isInCart, productAdd } from "../../../../../../../features/cartSlice";
import { check, checkNull, decreaseQty, increaseQty } from "../../../../../../../features/productSlice";
import styles from "./BuyButton.module.css";

const BuyButton = ({product}) => {
  const [prod, setLocalProducts] = useState();
  const [isAdded, setAdded] = useState(false);
  const { id } = useParams();


 

const dispatch = useDispatch()
const qty = useSelector(state => state.productReducer.qty)
const isCheck = useSelector(state => state.productReducer.checked)
const token = useSelector((state) => state.authReducer.token);
const inCart = useSelector((state) => state.cartReducer.inCart);




useEffect(() => {
setAdded(inCart)
}, [inCart]);


  function incQty() {
    dispatch(increaseQty())
  }

  function decQty() {
    dispatch(decreaseQty())
  }
  function addProduct(product) {

   

    if(!token){
      let isInProducts = false
      let products = JSON.parse(localStorage.getItem("cart"));
      for(let i = 0; i < products.length; i++){

        if(products[i].id === product._id){

          isInProducts = true
          setAdded(true)
          
        }
      }
      if (!isInProducts) {
        products.push({id: product._id, checked: isCheck, count: qty});
        setLocalProducts(products);
        localStorage.setItem("cart", JSON.stringify(products));
        setAdded(true)

      }
      dispatch(checkNull([false, false, false]))
    }else{
      dispatch(productAdd({id: product._id, count: qty, checked: isCheck}))

      


    }
      


    
  }

  

  useEffect(() => {
    if(Object.entries(product).length !== 0){

      let products = JSON.parse(localStorage.getItem("cart"));
      for(let i = 0; i < products.length; i++){
        console.log("mans")
        if(products[i].id === product._id){


          setAdded(true)
          
        }else{
          setAdded(false)
        }
      }
    }
   }, [product]);

   useEffect(() => {
    dispatch(isInCart({id}))

   }, [dispatch]);
 

  return (
    <div className={styles.buy_btn_container}>
      <button onClick={decQty} className={styles.decrease}>-</button>
      <div className={styles.qty}>{qty}</div>
      <button onClick={incQty} className={styles.increase}>
        +
      </button>

      <Link to={!isAdded ?  null : "/cart"} onClick={() => !isAdded ? addProduct(product) : null}   className={!isAdded ? styles.buy_btn : styles.buy_btn1}>{!isAdded ?  "В корзину" : "В корзине"} {isAdded ? <p>перейти</p> : null} </Link>
    </div>
  );
};

export default BuyButton;
