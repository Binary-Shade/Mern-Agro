const stats = [
    { id: 1, name: 'Farms', value: '400 +' },
    { id: 2, name: 'Annual clients', value: '1000 +' },
    { id: 3, name: 'Merchandise Sales', value: '70 000+' },
  ]
  
  export default function Facts() {
    return (
      <div className="facts py-24 sm:py-16 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  