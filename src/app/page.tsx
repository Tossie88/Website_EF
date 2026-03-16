import { HeroSection } from '@/components/home/HeroSection'
import { BenefitsSection } from '@/components/home/BenefitsSection'
import { FavorelliShowcase } from '@/components/home/FavorelliShowcase'
import { ProductTeaser } from '@/components/home/ProductTeaser'
import { TrustSection } from '@/components/home/TrustSection'
import { CtaBanner } from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <FavorelliShowcase />
      <ProductTeaser />
      <TrustSection />
      <CtaBanner />
    </>
  )
}
