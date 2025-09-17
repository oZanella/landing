import PageContainer from "../page-container/page-container";
import Body from "./Body/page";
import Footer from "./Footer/page";
import Header from "./Header/page";

export default function HomePage() {
    return (
        <PageContainer>
            <Header />
            <Body />
            <Footer />
        </PageContainer>
    );
}