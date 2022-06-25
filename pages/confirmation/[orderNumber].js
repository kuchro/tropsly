
import { useRouter } from "next/router";

import { Button, Result } from "antd";

import {PaymentDetailsModal} from 'common/components/functional-components/modals/ModalComponent'

const ConfirmationDetailPage = () => {
  const router = useRouter()
  const { orderNumber } = router.query
    const goToHomePage =()=>{
        router.push('/');
    }
  return (
    <Result
      status="success"
      title="You have successfully ordered our products, thank you!"
      subTitle={`Order number: ${orderNumber} - Please save it. Please pay via bank transfer.`}
      extra={[
        <Button key="buy" onClick={()=> goToHomePage()}>Buy Again</Button>,
        <Button onClick={()=> PaymentDetailsModal()}>Payment details</Button>
      ]}
    />
  );
};

export default ConfirmationDetailPage;
