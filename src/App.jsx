import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

function App() {
  return (
    <>
      <SectionWrapper
        title="Your Own store of Nifty NFTs, Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      {/* <SectionWrapper
        title="Smart User Interface Marketplace"
        description="e"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      /> */}
    </>
  );
}

export default App;
