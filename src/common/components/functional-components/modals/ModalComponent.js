import { Modal, message } from 'antd'
import MiniProductDetails from '../../product/product-details/MiniProductDetail'



export const Info = (product) => {
    return (
        Modal.info({
            content: (
            <MiniProductDetails product={product}/>),
            okText: 'Close',
        }))
}

export const success = (text) => {

    message.success({
        content: `Product added to ${text}.`,
        duration: 2,
        style: {
            marginTop: '10vh',
        },
    });
};

export const successCustomMessage = (text) => {

    message.success({
        content: `${text}.`,
        duration: 2,
        style: {
            marginTop: '10vh',
        },
    });
};

export const deleted_success = (text) => {
    message.info({
        content: `Product deleted from the ${text}.`,
        duration: 1,
        style: {
            marginTop: '10vh',
        },
    });
};

export const warning = () => {
    message.warning({
        content: `Product already exist on the list.`,
        duration: 1,
        style: {
            marginTop: '10vh',
        },
    });
};

export const confirmation = ()=>{
    
}