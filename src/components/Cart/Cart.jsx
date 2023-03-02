import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { deleteProd, getProdsFromCart, productAdd } from "../../features/cartSlice";
import styles from "./Cart.module.css"
import flag from "./succes.png"
import error from "./error.png"
import { Link } from "react-router-dom";
import { check, checkNull } from "../../features/productSlice";
import {  changeChecked, delProd, getProductsById } from "../../features/productsSlice";


const Cart = () => {


    const dispatch = useDispatch()
    let cart = useSelector(state => state.cartReducer.cart)
    let cart1 = useSelector(state => state.productsReducer.cart)
    



    const [deleting, setDeleting] = useState(null)
  const [prod, setLocalProducts] = useState([]);
  const [change, setChange] = useState([[], ""]);
  const [toplam, setToplam] = useState([[], 0])

const token = useSelector((state) => state.authReducer.token);
const auth = useSelector((state) => state.authReducer.isAuth);

const Toplam = (e, item) => {

    if(toplam[0].indexOf(item._doc._id) === -1 && e.target.value === "on"){
        let new_toplam_arr = toplam[0].push(item._doc._id)
        setToplam([new_toplam_arr, toplam[1] + (item.count * item._doc.price)+ (item.checked[0] ? 500 : 0 ) + (item.checked[2] ? 1000 : 0 )])
        console.log(toplam[0],item._doc._id)

    }else{
        console.log("KMD")
    }
}

function addProduct(product, num) {
    if(!auth){
        let check = !product.checked[num]
        let newChecked = [num !== 0 ? product.checked[0] : check, num !== 1 ? product.checked[1] : check, num !== 2 ? product.checked[2] : check]
        let products = JSON.parse(localStorage.getItem("cart"))
            products = products.map(item => {

                return item.id === product._doc._id ? {...item, checked: newChecked} : item
            })
            console.log(products)
            localStorage.setItem("cart", JSON.stringify(products))
            setLocalProducts(products)
            dispatch(changeChecked([product._doc._id, newChecked]))

            
    }else{
        let check = !product.checked[num]
      dispatch(productAdd({id: product._doc._id, checked: [num !== 0 ? product.checked[0] : check, num !== 1 ? product.checked[1] : check, num !== 2 ? product.checked[2] : check]}))
    }
  }



    useEffect(() => {
        if(auth){
            dispatch(getProdsFromCart())
        }else{
            dispatch(getProductsById({arr: JSON.parse(localStorage.getItem("cart"))}))
        }
        
    }, [auth]);

    function delProduct(id) {
        if (!auth) {
            let products = JSON.parse(localStorage.getItem("cart"))
            products = products.filter(item => {
                return item.id === id ? null : item
            })
            localStorage.setItem("cart", JSON.stringify(products))
            setLocalProducts(products)
            dispatch(delProd(id))

        } else {

        dispatch(deleteProd(id))


        }
      }

useEffect(() => {
    if(token){

    }else{

    }
}, [dispatch]);

    return <>
    <div className={styles.mainContainer}>
    <div className={styles.containerCart}>
<div className={styles.left}>
    {cart.length > 0 ? cart.map((item, index) => {
        return <div className={styles.check}><div className={styles.product}>
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
                <p className={styles.pflex}>Сумма <p className={styles.errOrNot1}>{(item.count * item._doc.price)+ (item.checked[0] ? 500 : 0 ) + (item.checked[2] ? 1000 : 0 )}</p></p>


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
        <input type="checkbox" onClick={(e) => {
            Toplam(e, item)
        }} className={styles.checkbox}/>
        </div>
    }) : cart1.map((item, index) => {
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
                <p className={styles.pflex}>Сумма <p className={styles.errOrNot1}>{(item.count * item._doc.price)+ (item.checked[0] ? 500 : 0 ) + (item.checked[2] ? 1000 : 0 )}</p></p>


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
    })}
</div>
<div className={styles.right}>

</div>
    </div>
    </div>
    
    </>
}

export default Cart