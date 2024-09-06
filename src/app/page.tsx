import Chip from "@components/Chip";
import PostCard from "@components/PostCard";

export default function Home() {
  return (
    <div className="h-screen">
      <Chip type={'neomorphism'} />
      <Chip type={'neomorphism'} selected />

      <PostCard 
        thumbnailImage="/test/친칠라2.png" 
        type="type1" 
        title="테스트입니당!" 
        category="test" 
        description="이러쿵저러쿵~!~!~!" 
      />
    </div>
  );
}
