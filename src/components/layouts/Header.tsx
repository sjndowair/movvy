const NAV_MENUS = [
  "드라마",
  "영화",
  "애니",
  "해외시리즈",
  "시사교양",
  "키즈",
  "영화플러스",
  "LIVE",
];

const Header = () => {
  return (
    <header>
      <h1>movvy</h1>
      <nav>
        <ul>
          {NAV_MENUS.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
//

export default Header;
