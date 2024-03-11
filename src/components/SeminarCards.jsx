import PropTypes from 'prop-types';

const SeminarCards = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {Array.isArray(cards) && cards.map((card, index) => (
        <div key={index} className="max-w-xs mx-2 bg-black shadow-lg rounded-lg overflow-hidden m-4">
          <img className="w-full h-48 object-cover object-center" src={card.image} alt="card" />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
            <p className="text-gray-700 text-base">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

SeminarCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default SeminarCards;
