import { BannerSection } from './BannerSection'
import { SpotlightedItemsSection } from './SpotlightedItemsSection'
import { CategorySection } from './CategorySection'
import { AboutSection } from './AboutSection'
import { TelesalesSection } from './TelesalesSection'

export const Home = () => {
  return (
    <main>
      <BannerSection />
      <SpotlightedItemsSection />
      <CategorySection />
      <AboutSection />
      <TelesalesSection />
    </main>
  )
}
