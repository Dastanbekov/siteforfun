import aitik from '../assets/aitik.png';

const Home = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 p-4">
      {/* Облако с текстом */}
      <div className="relative bg-white text-black text-sm sm:text-base shadow-md px-4 py-2 rounded-lg max-w-xs">
        Привет это тест
      </div>
<div className="absolute -bottom-2 left-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
      {/* Изображение стикмана */}
      <img
        src={aitik}
        alt="aitik"
        className="w-[180px] sm:w-[251px] h-auto object-contain"
      />
    </div>
  );
};

export default Home;
