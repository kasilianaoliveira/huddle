import { About } from "./components/About";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { ReadyCommunity } from "./components/ReadyCommunity";
import { ScreenNumber } from "./components/ScreenNumber";
import { TextImage } from "./components/TextImage";
import { TextImageWhite } from "./components/TextImageWhite";

function App() {
  return (
    <>
      <Header />
      <About />
      <ScreenNumber />
      <TextImage
        title="Grow Together"
        paragraph="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
        img="img2"
      />

      <TextImageWhite
        title="Flowing Conversations"
        paragraph="Huddle re-imagines the way we build communities. You have a voice, but so does your audience."
      />
      <TextImage
        title="Your Users"
        paragraph="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion."
        img="img1"
      />
      <ReadyCommunity title="Ready To Build Your Community" />
      <Footer />
    </>
  );
}

export default App;
