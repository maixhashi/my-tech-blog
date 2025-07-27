import Link from "next/link";

const Header = () => {
  return (
    <header className="py-6 lg:py-8">
      <div className="flex justify-between items-center">
        {/* サイトタイトル */}
        <Link href="/" className="text-2xl lg:text-3xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200">
          hashi.tech-blog
        </Link>
        
        {/* ナビゲーション */}
        <nav className="flex space-x-6 lg:space-x-8">
          <Link href="/articles" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Articles
          </Link>
          <Link href="/tags" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Tags
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
