import React, { useState } from 'react';

const AddProductPage = () => {
  const [category, setCategory] = useState('');
  const [souscategory, setSousCategory] = useState('');
  const [Pname, setPname] = useState('');
  const [Price, setPrice] = useState('');
  const [Desc, setDesc] = useState('');
  const [reference, setReference] = useState('');
  const [img, setImg] = useState('');
  const [qte, setQte] = useState('');

  const handleAddProduct = async () => {
    const newProduct = {
      category,
      souscategory,
      Pname,
      Price: parseFloat(Price),
      Desc,
      reference,
      img,
      qte: parseInt(qte)
    };

    try {
      const response = await fetch('http://localhost:4000/api/product/saveproduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      const data = await response.json();
      console.log('Product added:', data);
      // Réinitialiser les champs
      setCategory('');
      setSousCategory('');
      setPname('');
      setPrice('');
      setDesc('');
      setReference('');
      setImg('');
      setQte('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="AddProductPage">
      <h1>Add Product</h1>
      <div>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sous Category"
          value={souscategory}
          onChange={(e) => setSousCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qte}
          onChange={(e) => setQte(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AddProductPage;
