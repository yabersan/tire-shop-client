import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteProd, getProdsFromCart } from "../../features/cartSlice";
import styles from "./Cart.module.css"
import flag from "./succes.png"
import error from "./error.png"


const Cart = () => {
    const dispatch = useDispatch()
    let cart = useSelector(state => state.cartReducer.cart)
    const [deleting, setDeleting] = useState(null)
  const [prod, setLocalProducts] = useState();
const token = useSelector((state) => state.authReducer.token);
const auth = useSelector((state) => state.authReducer.isAuth);





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
                <p>{item._doc.productName}</p>
                <p className={styles.pflex} ><p className={styles.min}>Количество</p>{item.count}</p>
                <p className={styles.pflex}>Выездной монтаж  <img className={styles.errOrNot} src={item.checked[0] ? flag : error} alt="" /></p>
                <p className={styles.pflex}>Стационарный монтаж  <img className={styles.errOrNot} src={item.checked[1] ? flag : error} alt="" /></p>
                <p className={styles.pflex}>Хранение  <img className={styles.errOrNot} src={item.checked[2] ? flag : error} alt="" /></p>

            </div>
            <div className={styles.leftRight}>
                <button  onClick={() => setDeleting(index)} className={styles.delete}>🗑</button>
                <div className={index === deleting ? styles.buttons : styles.none}>
                        <input className={styles.otm} onClick={() => setDeleting(null)} type="button" value="отменить"/>
                        <input className={styles.ud} onClick={() => {
                            delProduct(item._doc._id)
                        }} type="button" value="удалить"/>

                </div>
            </div>
        </div>
    }) : null}
</div>
    </div>
    </div>
    
    </>
}

export default Cart