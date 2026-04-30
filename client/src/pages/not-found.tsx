import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { MegaHeader } from "@/components/layout/MegaHeader";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="bg-[#0a0a0f] text-gray-200 min-h-screen">
      <MegaHeader onTalkToSales={() => {}} />
      <div className="min-h-[70vh] w-full flex items-center justify-center pt-20">
        <Card className="w-full max-w-md mx-4 bg-white/5 backdrop-blur-xl border border-white/10">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
