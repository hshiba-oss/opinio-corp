type PageHeaderProps = {
  subtitle?: string
  title: string
  description?: string
  compact?: boolean
}

export default function PageHeader({ subtitle, title, description, compact = false }: PageHeaderProps) {
  return (
    <section className={`relative text-white overflow-hidden bg-primary-800 ${compact ? 'py-16 md:py-20' : 'py-20 md:py-28'}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/opiniocorpherobackground.png')" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(45,42,91,0.5) 0%, rgba(45,42,91,0.2) 40%, transparent 60%)',
        }}
      />
      <div className="section-container relative">
        {subtitle && <p className="text-accent-400 font-medium mb-4">{subtitle}</p>}
        <h1 className={`heading-1${description ? ' mb-4' : ''}`}>{title}</h1>
        {description && (
          <p className="text-xl text-gray-300">{description}</p>
        )}
      </div>
    </section>
  )
}
