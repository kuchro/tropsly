import { Modal } from 'antd'
import MiniProductDetails from '../product/MiniProductDetail'

export const Info = (product) => {
    return (
        Modal.info({
            content: (
            <MiniProductDetails product={product}/>),
            okText: 'Close',
        }))
}