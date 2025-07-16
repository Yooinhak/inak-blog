import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | 유인학 개발 블로그',
  description: '프론트엔드 개발자 유인학입니다. 저에 대해 더 알아보세요.',
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <header className="text-center mb-16">
        <div className="mb-8">
          <Image
            src="/images/inhak-profile.jpg"
            alt="유인학 프로필 사진"
            width={150}
            height={150}
            className="rounded-full object-cover ring-4 ring-primary ring-offset-4 ring-offset-base-100 mx-auto shadow-xl"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-base-content mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          유인학
        </h1>
        <p className="text-2xl font-semibold text-primary mb-4">💁🏻‍♂️ Front-End Developer</p>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          학습하고 성장하는 것이 즐거운 개발자입니다.
          <br />
          사용자 입장에서 필요한 것이 무엇인지 고민하면서 개발합니다.
        </p>
      </header>

      {/* Contact & Channels */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          📞 Contact & Channels
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Link
            href="mailto:syu3236@gmail.com"
            className="card bg-base-200 hover:bg-base-300 transition-colors p-4 text-center"
          >
            <div className="text-2xl mb-2">📧</div>
            <div className="font-semibold">Email</div>
            <div className="text-sm text-base-content/70">syu3236@gmail.com</div>
          </Link>
          <div className="card bg-base-200 p-4 text-center">
            <div className="text-2xl mb-2">📱</div>
            <div className="font-semibold">Phone</div>
            <div className="text-sm text-base-content/70">010-3680-3224</div>
          </div>
          <Link
            href="https://github.com/Yooinhak"
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 hover:bg-base-300 transition-colors p-4 text-center"
          >
            <div className="text-2xl mb-2">💻</div>
            <div className="font-semibold">Github</div>
            <div className="text-sm text-base-content/70">@Yooinhak</div>
          </Link>
          {/* <Link
            href="https://lucy0218.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="card bg-base-200 hover:bg-base-300 transition-colors p-4 text-center"
          >
            <div className="text-2xl mb-2">🗒</div>
            <div className="font-semibold">Blog</div>
            <div className="text-sm text-base-content/70">Tistory</div>
          </Link> */}
        </div>
      </section>

      {/* About Me */}
      <section className="mb-16">
        <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">🙋🏻‍♂️ About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">✨</span>
                <p>무엇이든 관심이 생기면 빠르게 도전하고 실행합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">👥</span>
                <p>사람들과 소통하고 의견을 나눌 때 행복합니다😊</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">🎯</span>
                <p>사용자 입장에서 필요한 것이 무엇인지 고민하면서 개발합니다.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl">📚</span>
                <p>지속적인 학습과 도전을 통해 새로운 기술에 대한 열정을 유지합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">🛠 Tech Stacks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-200 p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Front-End</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'React-Native',
                'Next.js',
                'Jotai',
                'SCSS',
                'Styled-components',
                'TailwindCSS',
              ].map(tech => (
                <span key={tech} className="badge badge-primary badge-outline">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="card bg-base-200 p-6">
            <h3 className="text-xl font-bold mb-4 text-secondary">Collaboration & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Slack', 'Notion', 'Teams', 'VSCode', 'Atom', 'Figma', 'Git', 'Github', 'Bitbucket', 'AWS'].map(
                tool => (
                  <span key={tool} className="badge badge-secondary badge-outline">
                    {tool}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">💼 Career</h2>
        <div className="space-y-6">
          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary">블로믹스 (Blomics)</h3>
              <span className="badge badge-primary">2024.11 ~ 현재</span>
            </div>
            <p className="text-base-content/80 mb-2">프론트엔드 개발자</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
              <li>테일즈런너 게임 웹 페이지 유지보수</li>
              <li>어드민 페이지 유지보수</li>
            </ul>
          </div>
          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary">Corretto</h3>
              <span className="badge badge-primary">2022.10 ~ 2024.10</span>
            </div>
            <p className="text-base-content/80 mb-2">프론트엔드 개발자</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70">
              <li>SI 프로젝트 프론트엔드 개발</li>
              <li>자체 솔루션 프론트엔드 개발</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          💻 Work Experience
        </h2>
        <div className="space-y-6">
          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <Link
                href="https://gelclick.com/home/main.do"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:underline"
              >
                Gel-click
              </Link>
              <div className="flex flex-col gap-1">
                <span className="badge badge-outline">2022.11 ~ 2023.04</span>
                <span className="badge badge-outline">2023.08 ~ 2023.10</span>
              </div>
            </div>
            <p className="text-base-content/80 mb-2">쇼핑몰 통합관리 솔루션</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
              <li>OMS, CMS 종합 관리 플랫폼</li>
              <li>플랫폼 및 백오피스 프론트엔드 개발</li>
              <li>i18n을 이용한 글로벌 언어 지원 서비스</li>
            </ul>
            <div className="flex gap-2">
              <span className="badge badge-sm">Next.js</span>
              <span className="badge badge-sm">styled-components</span>
              <span className="badge badge-sm">Jotai</span>
            </div>
          </div>

          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <Link
                href="https://wingbuddy.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:underline"
              >
                윙버디
              </Link>
              <span className="badge badge-outline">2023.05 ~ 2023.08</span>
            </div>
            <p className="text-base-content/80 mb-2">온라인 특수교육 플랫폼</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
              <li>모바일 전용 서비스를 웹 앱 반응형으로 전환</li>
              <li>ebook 추가 기능 개발</li>
            </ul>
            <div className="flex gap-2">
              <span className="badge badge-sm">Next.js</span>
              <span className="badge badge-sm">styled-components</span>
              <span className="badge badge-sm">Jotai</span>
            </div>
          </div>

          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <Link
                href="https://korlymally.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold text-primary hover:underline"
              >
                KorlyMally
              </Link>
              <span className="badge badge-outline">2023.10 ~ 2024.01</span>
            </div>
            <p className="text-base-content/80 mb-2">해외 쇼핑 플랫폼</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
              <li>국제 e-commerce</li>
              <li>WMS, OMS 백오피스 프론트엔드 개발</li>
            </ul>
            <div className="flex gap-2">
              <span className="badge badge-sm">Next.js</span>
              <span className="badge badge-sm">styled-components</span>
              <span className="badge badge-sm">Jotai</span>
            </div>
          </div>

          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary">Future Plan</h3>
              <span className="badge badge-outline">2024.01 ~ 2024.06</span>
            </div>
            <p className="text-base-content/80 mb-2">진로진학 시스템 리빌딩</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
              <li>전체적인 페이지 프론트엔드 개발 참여</li>
            </ul>
            <div className="flex gap-2">
              <span className="badge badge-sm">Next.js</span>
              <span className="badge badge-sm">styled-components</span>
              <span className="badge badge-sm">Jotai</span>
            </div>
          </div>

          <div className="card bg-base-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-bold text-primary">한화정밀기계</h3>
              <span className="badge badge-outline">2024.07 ~ 2024.10</span>
            </div>
            <p className="text-base-content/80 mb-2">CRM 시스템</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
              <li>CRM 개발</li>
              <li>table-MUI, echart를 사용한 대시보드 관리</li>
            </ul>
            <div className="flex gap-2">
              <span className="badge badge-sm">Next.js</span>
              <span className="badge badge-sm">styled-components</span>
              <span className="badge badge-sm">Jotai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
          💻 Projects Experience
        </h2>
        <div className="card bg-base-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <Link
              href="https://github.com/Yooinhak/Safety_Tour_Flatform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-primary hover:underline"
            >
              Safety Tour Platform
            </Link>
            <span className="badge badge-outline">2021.09 ~ 2022.04</span>
          </div>
          <p className="text-base-content/80 mb-3">
            코로나 위험도를 확인할 수 있는 안전한 관광지 여행 정보 제공 어플리케이션
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-base-content/70 mb-3">
            <li>React Native를 사용한 하이브리드 앱</li>
          </ul>
          <div className="flex gap-2">
            <span className="badge badge-sm">React Native</span>
            <span className="badge badge-sm">React Navigation</span>
            <span className="badge badge-sm">React Hooks</span>
            <span className="badge badge-sm">Axios</span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">🎓 Education</h2>
        <div className="card bg-base-200 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-bold text-primary">남서울대학교</h3>
            <span className="badge badge-outline">2017.03 ~ 2023.08</span>
          </div>
          <p className="text-base-content/80 mb-2">컴퓨터소프트웨어학과 전공</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">총 학점:</span> 3.51/4.5
            </div>
            <div>
              <span className="font-semibold">전공평점:</span> 3.74/4.5
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Introduction */}
      {/* <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">🙋🏻‍♂️ Introduce</h2>
        <div className="card bg-gradient-to-br from-base-200 to-base-300 p-8">
          <div className="prose prose-lg max-w-none text-base-content">
            <p className="mb-4">
              저는 1년 11개월 동안 SI 회사에서 다양한 기술과 협업을 경험하며 성장한 경험이 있습니다.
              <strong className="text-primary"> Next.js, styled-components, jotai</strong>, 그리고 RESTful API를
              활용하여 사용자 경험을 향상시키고, 효율적인 코드를 작성하는 데 기여했습니다.
            </p>
            <p className="mb-4">
              또한, <strong className="text-primary">react-hook-form</strong>을 사용하여 폼 관리와 유효성 검사를 보다
              효율적으로 처리하는 방법에 대한 경험도 쌓았습니다.
            </p>
            <p className="mb-4">
              컴포넌트 주도 개발 방법론을 실천하기 위해 <strong className="text-primary">Storybook</strong>을 활용하여
              시각적 테스팅과 API 문서를 효과적으로 관리했습니다. 이를 통해 팀 내에서 개발한 컴포넌트의 재사용성을
              높이고, 개발과 디자인 간의 원활한 소통을 도모했습니다.
            </p>
            <p>
              문제 해결 능력을 발휘하여 프로젝트 진행 중 발생한 어려움을 신속하게 극복하고, 유연한 대처로 팀의 목표를
              달성하는 데 핵심 역할을 하였습니다. 기획자, 디자이너, 백엔드 개발자와의 원활한 소통을 통해 팀의 성공을
              위해 최선을 다하는 것을 약속드립니다.
            </p>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="text-center">
        <div className="card bg-gradient-to-r from-primary to-secondary p-8 text-primary-content">
          <h2 className="text-2xl font-bold mb-4">함께 일하고 싶으시다면</h2>
          <p className="mb-6">언제든지 연락주세요! 새로운 도전과 협업을 기다리고 있습니다.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="mailto:syu3236@gmail.com" className="btn btn-outline btn-primary-content">
              📧 이메일 보내기
            </Link>
            <Link
              href="https://github.com/Yooinhak"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-primary-content"
            >
              💻 GitHub 보기
            </Link>
            <Link href="/posts" className="btn btn-outline btn-primary-content">
              📝 블로그 보러가기
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
