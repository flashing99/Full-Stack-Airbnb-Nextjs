import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import ToasterProvider from "./components/providers/ToasterProvider";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        {/* <Modal title='mon titre'  actionLabel='Submit'    /> */}
        <ToasterProvider/>
        <RegisterModal />
        <Navbar></Navbar>
      </ClientOnly>
    </div>
  );
}
