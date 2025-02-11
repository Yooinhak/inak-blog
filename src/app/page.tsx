import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('@components/ThreeScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex">
      <div>
        <ThreeScene />
      </div>
      <div>ljkfdsalfkjasdlkfjsa</div>
    </div>
  );
}
