import RotatingText from '@components/RotatingText';

export default function Main() {
  return (
    <div>
      <RotatingText
        texts={['React', 'Bits', 'Is', 'Cool!']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={'last'}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-120%' }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
