import { useRouter } from "next/router";
import Header04 from "./header/Header04";
import Footer from "./footer";

export default function Layout({ children }) {
  const route = useRouter();

  return (
    <>
      <Header04 />
      {/* <Wallet_modal />
      <BidsModal />
      <BuyModal /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
