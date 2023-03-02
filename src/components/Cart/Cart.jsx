import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteProd, getProdsFromCart, productAdd } from "../../features/cartSlice";
import styles from "./Cart.module.css"
import flag from "./succes.png"
import error from "./error.png"
import { Link } from "react-router-dom";
import { check, checkNull } from "../../features/productSlice";


const Cart = () => {


    const dispatch = useDispatch()
    let cart = useSelector(state => state.cartReducer.cart)
    const [deleting, setDeleting] = useState(null)
  const [prod, setLocalProducts] = useState();
  const [change, setChange] = useState([[], ""]);

const token = useSelector((state) => state.authReducer.token);
const auth = useSelector((state) => state.authReducer.isAuth);

function addProduct(product, num) {
    if(!token){

    }else{
        let check = !product.checked[num]
      dispatch(productAdd({id: product._doc._id, checked: [num !== 0 ? product.checked[0] : check, num !== 1 ? product.checked[1] : check, num !== 2 ? product.checked[2] : check]}))
    }
  }



    useEffect(() => {
        if(auth){
            dispatch(getProdsFromCart())
        }else{

        }
        
    }, [auth]);

    function delProduct(id) {
        if (!token) {

        } else {

        dispatch(deleteProd(id))


        }
      }

    return <>
    <div className={styles.mainContainer}>
    <div className={styles.containerCart}>
<div className={styles.left}>
    {cart.length > 0 ? cart.map((item, index) => {
        return <div className={styles.product}>
            <div className={styles.img_block}>
                <img src={item._doc.productPicture} className={styles.prodImg} alt="img" />
            </div>
            <div className={styles.leftMiddle}>
                <Link to={`/product/${item._doc._id}`} > <p className={styles.zagolovok}>{item._doc.productName}</p> </Link>
                <p className={styles.pflex} ><p className={styles.min}>Количество</p>{item.count}</p>
                <p className={styles.pflex}>Выездной монтаж - 500 <button className={styles.checking} onClick={() => addProduct(item, 0)}><img className={styles.errOrNot} src={item.checked[0] ? flag : error} alt="" /></button></p>
                <p className={styles.pflex}>Стационарный монтаж  <button className={styles.checking}  onClick={() => addProduct(item, 1)}><img className={styles.errOrNot} src={item.checked[1] ? flag : error} alt="" /></button></p>
                <p className={styles.pflex}>Хранение - 1000 <button className={styles.checking}  onClick={() => addProduct(item, 2)}><img className={styles.errOrNot} src={item.checked[2] ? flag : error} alt="" /></button></p>
                <p className={styles.pflex}>цена <p className={styles.errOrNot1}>{item._doc.price}</p></p>
                <p className={styles.pflex}>Сумма <p className={styles.errOrNot1}>{item._doc.price + (item.checked[0] ? 500 : 0 ) + (item.checked[2] ? 1000 : 0 )}</p></p>


            </div>
            <div className={styles.leftRight}>
                <button  onClick={() => setDeleting(item._doc._id)} className={styles.delete}>🗑</button>
                <div className={item._doc._id === deleting ? styles.buttons : styles.none}>
                        <input className={styles.otm} onClick={() => setDeleting(null)} type="button" value="отменить"/>
                        <input className={styles.ud} onClick={() => {
                            delProduct(item._doc._id)
                        }} type="button" value="удалить"/>

                </div>
            </div>
        </div>
    }) : null}
</div>
<div className={styles.right}>

</div>
    </div>
    </div>
    
    </>
}

export default Cart