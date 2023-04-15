import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <ClientOnly>
        {/* <Modal title='mon titre'  actionLabel='Submit'    /> */}
      <Navbar></Navbar>
      </ClientOnly>
    </div>
  );
}
