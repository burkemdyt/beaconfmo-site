'use client'

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(184,146,42,0.06),transparent_70%)] top-[-200px] right-[-100px] animate-drift" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,146,42,0.04),transparent_70%)] bottom-[-100px] left-[-100px] animate-drift-slow" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(184,146,42,0.03),transparent_70%)] top-[40%] left-[60%] animate-drift-reverse" />
    </div>
  )
}
