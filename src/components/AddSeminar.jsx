import { useState } from 'react';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [cards, setCards] = useState([]);

  const handleTitleChange = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.length > 50) {
      setTitle(inputTitle.slice(0, 50));
    } else {
      setTitle(inputTitle);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { title, content, image });

    const newCard = {
      title,
      content: shortenText(content),
      image: imagePreview || 'https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg',
    };

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);

    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview(null);
  };

  const shortenText = (text) => {
    if (text.length > 50) {
      return text.slice(0, 50) + '...';
    }
    return text;
  };

  return (
    <div className="bg-gray-700 min-h-screen flex items-center justify-center">
      <div className="w-1/2 bg-indigo-300 p-4 rounded-lg shadow-2xl m-10">
        <h2 className="text-2xl font-semibold mb-6">Yeni Gönderi Oluştur</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Başlık</label>
            <input
              id="title"
              type="text"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Başlık"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">İçerik</label>
            <textarea
              id="content"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="İçerik"
              value={content}
              rows="5"
              onChange={handleContentChange}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Kapak Resmi Yükle</label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
              required
            />
            <label htmlFor="image" className="flex items-center justify-center w-full px-3 py-2 border border-gray-300 rounded-lg cursor-pointer bg-gray-100 text-gray-700 hover:bg-gray-200">
              Resim Seç
            </label>
            {imagePreview && (
              <div className="mt-4 overflow-hidden rounded-lg" style={{ maxWidth: '100%', maxHeight: '300px' }}>
                <img src={imagePreview} alt="Preview" className="w-full" />
              </div>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Gönder
            </button>
          </div>
        </form>
      </div>
      {/* Render the cards */}
      <div className="flex flex-wrap justify-center mt-10">
        {cards.map((card, index) => (
          <div key={index} className="max-w-xs mx-2 bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <img className="w-full h-48 object-cover object-center" src={card.image} alt="card" />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{card.title}</h2>
              <p className="text-gray-700 text-base">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormComponent;
