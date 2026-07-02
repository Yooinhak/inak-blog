import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap" style={{ paddingTop: 96 }}>
      <div className="empty glass">
        <span className="empty-glyph mono">404</span>
        <h3>페이지를 찾을 수 없어요</h3>
        <p>주소가 바뀌었거나 삭제된 페이지예요.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link className="btn btn-primary" href="/">
            홈으로
          </Link>
          <Link className="btn btn-ghost" href="/posts">
            글 목록 보기
          </Link>
        </div>
      </div>
    </div>
  );
}
