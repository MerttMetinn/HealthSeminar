const Card = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {[...Array(1)].map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://www.statnews.com/wp-content/uploads/2022/03/AdobeStock_246942922.jpeg"
              alt="resim"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Başlık</div>
              <p className="text-gray-700 text-base">Açıklama</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Settings
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
