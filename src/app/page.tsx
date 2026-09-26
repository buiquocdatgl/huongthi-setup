import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NotFranchise from "@/components/NotFranchise";
import RealPerformance from "@/components/RealPerformance";
import RevenueChart from "@/components/RevenueChart";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import MenuExecution from "@/components/MenuExecution";
import TeamOperations from "@/components/TeamOperations";
import Capabilities from "@/components/Capabilities";
import SetupJourney from "@/components/SetupJourney";
import ProofOfOperation from "@/components/ProofOfOperation";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0C] text-[#F4F4F6] selection:bg-amber-500 selection:text-neutral-950 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section 7: Not a Franchise */}
      <NotFranchise />

      {/* Section 8: Real Business Performance */}
      <RealPerformance />

      {/* Section 9 & 10: Interactive Revenue Chart & Business Insights */}
      <RevenueChart />

      {/* Section 11, 12, 13, 14: Investment & Daily Cost Calculator */}
      <InvestmentCalculator />

      {/* Section 15: Restaurant Showcase Gallery */}
      <ShowcaseGallery />

      {/* Section 16: Menu Execution */}
      <MenuExecution />

      {/* Section 17: Team & Operations */}
      <TeamOperations />

      {/* Section 18: What We Can Build With You (9 Modules) */}
      <Capabilities />

      {/* Section 19: 10-Step Setup Journey Timeline */}
      <SetupJourney />

      {/* Section 20: Proof of Operation (3 Pillars) */}
      <ProofOfOperation />

      {/* Section 21 & 22: Important Disclaimer & Request Proposal Form */}
      <ContactCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
