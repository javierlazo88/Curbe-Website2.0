import { useState } from "react";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { Footer } from "@/components/layout/Footer";
import { DemoForm } from "@/components/forms/DemoForm";
import PricingSection from "@/components/sections/PricingSection";

export default function Pricing() {
  const [demoFormOpen, setDemoFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <MegaHeader onTalkToSales={() => setDemoFormOpen(true)} />
      <PricingSection />
      <Footer />
      <DemoForm open={demoFormOpen} onOpenChange={setDemoFormOpen} />
    </div>
  );
}
