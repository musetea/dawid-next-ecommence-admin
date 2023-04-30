import Layout from '@/components/Layout';
import Link from 'next/link';
import ProductForm from '@/components/ProductForm';

export default function NewProduct() {

    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    );

}
