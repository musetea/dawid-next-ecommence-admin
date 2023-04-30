import { FC, FormEvent, useState } from 'react'

const ProductForm: FC<{}> = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const submitHnadler = (event: FormEvent) => {
        event.preventDefault();
        console.log(name, description, price);
    }

    return (
        <form action="" onSubmit={submitHnadler}>
            <label htmlFor="">Name</label>
            <input type="text" name="" id=""
                placeholder='product name'
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder='description' value={description} onChange={(e) => {
                setDescription(e.target.value);
            }}></textarea>
            <label htmlFor="">Price</label>
            <input type="number" name="" id="" placeholder='product price' value={price} onChange={(e) => {
                setPrice(e.target.value);
            }} />
            <button className='button-primary'>Add to Prodcut</button>
        </form>
    )
};

export default ProductForm;