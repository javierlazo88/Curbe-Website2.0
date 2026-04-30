import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import ProductLanding from "@/pages/ProductLanding";
import IndustriesLanding from "@/pages/IndustriesLanding";
import ResourcesLanding from "@/pages/ResourcesLanding";
import ProductFeaturePage from "@/pages/ProductFeaturePage";
import IndustriesIndustryPage from "@/pages/IndustriesIndustryPage";
import ResourcesTopicPage from "@/pages/ResourcesTopicPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import CookiePolicy from "@/pages/CookiePolicy";
import Security from "@/pages/Security";
import Compliance from "@/pages/Compliance";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/product/:feature" component={ProductFeaturePage} />
      <Route path="/product" component={ProductLanding} />
      <Route path="/industries/:industry" component={IndustriesIndustryPage} />
      <Route path="/industries" component={IndustriesLanding} />
      <Route path="/resources/:resource" component={ResourcesTopicPage} />
      <Route path="/resources" component={ResourcesLanding} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/cookies" component={CookiePolicy} />
      <Route path="/security" component={Security} />
      <Route path="/compliance" component={Compliance} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
