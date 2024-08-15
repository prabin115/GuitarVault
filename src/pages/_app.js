import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CartProvider } from "@/contexts/CartContext";
import { PaymentProvider } from "@/contexts/PaymentContext";
import { ProductsProvider } from "@/contexts/ProductContext";
import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return(
  <>
    <CartProvider>
      <PaymentProvider>
        <ProductsProvider>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </ProductsProvider>
      </PaymentProvider>
    </CartProvider>
    <ToastContainer
      position="top-left"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </>
  )
}
