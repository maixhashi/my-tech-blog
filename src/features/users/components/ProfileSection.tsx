import Link from "next/link";

export function ProfileSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start justify-center py-16 lg:py-24">
      {/* アバター画像 */}
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-12">
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-4xl lg:text-6xl">👨‍💻</div>
        </div>
      </div>
      {/* テキスト部分 */}
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          maixhashi
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
          フルスタックエンジニアとして働いています。<br />
          GO、Reactに主に触れてます。<br />
          このブログではエンジニアとして学んだことや備忘録を書いていきます。
        </p>
        <Link 
          href="/about" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
        >
          プロフィールをもっと見る
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
} 