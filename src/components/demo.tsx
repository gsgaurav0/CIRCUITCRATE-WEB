import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <section className="spline-showcase-section" style={{ padding: '6rem 0', background: 'var(--color-bg-primary)', position: 'relative' }}>
      <div className="container">
        <Card className="w-full h-[600px] md:h-[700px] bg-gradient-to-br from-[#0a0a16] via-[#0a0a16] to-[#1a0a2e] relative overflow-hidden border border-[rgba(112,0,255,0.2)] shadow-[0_0_30px_rgba(112,0,255,0.1)]">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="#00f0ff"
          />
          
          <div className="flex flex-col md:flex-row h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ 
                background: 'linear-gradient(135deg, #eef2f6 0%, #00f0ff 50%, #7000ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Build Robots.<br />
                <span style={{ color: '#fbbf24' }}>See Them Come to Life.</span>
              </h2>
              <p className="mt-4 text-lg md:text-xl text-[#a0aab8] max-w-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Experience robotics in 3D. Interact with our robot models, explore their components, 
                and visualize how circuits and sensors work together in real-time.
              </p>
              <div className="mt-6 flex gap-4">
                <button className="btn btn-primary" style={{ 
                  background: 'linear-gradient(135deg, var(--color-accent-secondary) 0%, #3b82f6 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.8rem 2rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  Explore 3D Models
                </button>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[400px] md:min-h-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}


