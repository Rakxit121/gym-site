import Footer from "../../components/Footer/Footer";
import SubscriptionSuccess from "../../components/PaymentOptions/SubscriptionSucess";

function PaymentConfirmation() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Payment Confirmation
          </h1>
        </div>
        <SubscriptionSuccess />
        <Footer />
      </section>
    </>
  );
}

export default PaymentConfirmation;