import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import ArticleContent from "@/components/ArticleContent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <div id="artikel">
        <TableOfContents />
        <ArticleContent />
      </div>
      <Footer />
    </div>
  );
};

export default Index;