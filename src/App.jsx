import { memo, lazy, Suspense } from 'react';
import RainingLetters from './components/ui/raining-letters';

const Hero = lazy(() => import('./components/Hero'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Stories = lazy(() => import('./components/Stories'));
const Footer = lazy(() => import('./components/Footer'));

const SectionLoader = memo(() => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
));
SectionLoader.displayName = 'SectionLoader';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Raining Letters Background */}
      <RainingLetters />

      {/* Main Content */}
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
        <Suspense fallback={<SectionLoader />}>
          <Stories />
        </Suspense>
      </main>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default memo(App);
