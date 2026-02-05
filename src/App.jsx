import { memo, lazy, Suspense } from 'react';
import { Spotlight } from './components/ui/spotlight';

// Lazy load all sections except Hero
const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Footer = lazy(() => import('./components/Footer'));

// Simple section loader
const SectionLoader = memo(() => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
));

SectionLoader.displayName = 'SectionLoader';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global Spotlights - GPU accelerated */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none gpu-accelerate">
        <Spotlight className="-top-40 -left-40 md:left-20 md:-top-20" fill="white" />
        <Spotlight className="top-1/3 -right-60 md:right-0" fill="white" />
      </div>

      <main className="relative z-10">
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Achievements />
        </Suspense>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default memo(App);
