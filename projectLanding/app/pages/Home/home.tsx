import PageContainer from "../page-container/page-container";
import Body from "./body";
import Footer from "./footer";
import Header from "./header";

export default function HomePage() {
    return (
        <PageContainer>
            <Header />
            <Body />
            <Footer />
        </PageContainer>
    );
}